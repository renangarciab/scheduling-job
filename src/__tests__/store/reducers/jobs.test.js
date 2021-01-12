import reducer, { INITIAL_STATE } from '../../../store/modules/jobs/reducer';
import * as ActionsJobs from '../../../store/modules/jobs/actions';

describe('Jobs reducer', () => {
	it('SUCCESS_JOBS', () => {
		const state = reducer(
			INITIAL_STATE,
			ActionsJobs.successJobs({
				id: 1,
				description: 'Importação de arquivos de fundos',
				deadline: '2019-11-11 12:00:00',
				duration: 2,
			})
		);

		expect(state).toEqual([
			{
				id: 1,
				description: 'Importação de arquivos de fundos',
				deadline: '2019-11-11 12:00:00',
				duration: 2,
			},
		]);
	});
});
