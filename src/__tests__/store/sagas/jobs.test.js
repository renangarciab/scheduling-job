import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import { mockJobs } from '../../../mocks/jobs';
import api from '../../../services/api';
import { successJobs, failJobs } from '../../../store/modules/jobs/actions';
import { getJobs } from '../../../store/modules/jobs/sagas';

const apiMock = new MockAdapter(api);

describe('Jobs saga', () => {
	it('should be able to fetch', async () => {
		const dispatch = jest.fn();

		apiMock.onGet('jobs').reply(200, mockJobs.list);

		await runSaga({ dispatch }, getJobs).toPromise();

		expect(dispatch).toHaveBeenCalledWith(successJobs(mockJobs.list));
	});

	it('should fail fetch', async () => {
		const dispatch = jest.fn();

		apiMock.onGet('jobs').reply(500);

		await runSaga({ dispatch }, getJobs).toPromise();

		expect(dispatch).toHaveBeenCalledWith(failJobs());
	});
});
