import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../../services/api';
import { successJobs, failJobs } from '../../../store/modules/jobs/actions';
import { getJobs } from '../../../store/modules/jobs/sagas';

const apiMock = new MockAdapter(api);

describe('Jobs saga', () => {
	it('should be able to fetch', async () => {
		const dispatch = jest.fn();

		apiMock.onGet('jobs').reply(200, [
			{
				id: 1,
				description: 'Importação de arquivos de fundos',
				deadline: '2019-11-11 12:00:00',
				duration: 2,
			},
		]);

		await runSaga({ dispatch }, getJobs).toPromise();

		expect(dispatch).toHaveBeenCalledWith(
			successJobs([
				{
					id: 1,
					description: 'Importação de arquivos de fundos',
					deadline: '2019-11-11 12:00:00',
					duration: 2,
				},
			])
		);
	});

	it('should fail fetch', async () => {
		const dispatch = jest.fn();

		apiMock.onGet('jobs').reply(500);

		await runSaga({ dispatch }, getJobs).toPromise();

		expect(dispatch).toHaveBeenCalledWith(failJobs());
	});
});
