import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export function dateFormat(date) {
	return format(date, "dd'/'MM'/'yyyy'", {
		locale: pt,
	});
}

export function fullDateFormat(date) {
	return format(date, "dd'/'MM'/'yyyy' 'HH:mm", {
		locale: pt,
	});
}

export function orderDateMatched(dateA, dateB) {
	return dateA.deadlineMatched - dateB.deadlineMatched;
}

export function orderDate(dateA, dateB) {
	return dateA.deadline - dateB.deadline;
}
