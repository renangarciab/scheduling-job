import reducer, { INITIAL_STATE } from '../../../store/modules/jobs/reducer';
import { mockJobs } from '../../../mocks/jobs';
import * as ActionsJobs from '../../../store/modules/jobs/actions';

describe('Jobs reducer', () => {
	it('SUCCESS_JOBS', () => {
		const state = reducer(
			INITIAL_STATE,
			ActionsJobs.successJobs(mockJobs.job)
		);

		expect(state).toEqual(mockJobs.list);
	});
});
