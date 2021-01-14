import {
	dateFormat,
	fullDateFormat,
	orderDate,
	orderDateMatched,
} from '../../helpers/date';

describe('Date', () => {
	it('should format date', () => {
		const date = dateFormat(new Date('2020-11-11 12:00:00'));

		expect(date).toStrictEqual('11/11/2020');
	});

	it('should format full date', () => {
		const date = fullDateFormat(new Date('2020-11-11 12:00:00'));

		expect(date).toStrictEqual('11/11/2020 12:00');
	});

	it('should order date', () => {
		const date = [
			{ deadline: new Date('2020-11-20 12:00:00') },
			{ deadline: new Date('2020-11-11 12:00:00') },
		].sort(orderDate);

		expect(date).toStrictEqual([
			{ deadline: new Date('2020-11-11 12:00:00') },
			{ deadline: new Date('2020-11-20 12:00:00') },
		]);
	});

	it('should order date matched', () => {
		const date = [
			{ deadlineMatched: new Date('2020-11-22 12:00:00') },
			{ deadlineMatched: new Date('2020-11-11 12:00:00') },
		].sort(orderDateMatched);

		expect(date).toStrictEqual([
			{ deadlineMatched: new Date('2020-11-11 12:00:00') },
			{ deadlineMatched: new Date('2020-11-22 12:00:00') },
		]);
	});
});
