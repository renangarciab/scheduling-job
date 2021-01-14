import { returnJobsList } from '../../helpers/jobs';
import { mockJobs } from '../../mocks/jobs';

describe('Jobs', () => {
	it('should group by date', () => {
		const jobs = returnJobsList(mockJobs.listToOrder);

		expect(jobs).toStrictEqual(mockJobs.listReodered);
	});
});
