import { dateFormat, orderDateMatched } from './date';

export function returnJobsList(list) {
	const compareList = list;
	let exportList = [];
	let dateMatched = null;
	const groupArray = [];

	// Função que agrupa os jobs por dia
	for (let i = 0; i < list.length; i += 1) {
		dateMatched = compareList.filter(
			(item) =>
				dateFormat(item.deadline) === dateFormat(list[i].deadline) &&
				item.duration < 9
		);

		groupArray.push({
			dateMatched: dateFormat(list[i].deadline),
			deadlineMatched: list[i].deadline,
			list: dateMatched,
		});
	}

	// Função que remove os agrupamentos repetidos
	exportList = groupArray.filter(
		(group, index, self) =>
			index ===
			self.findIndex((found) => found.dateMatched === group.dateMatched)
	);

	return exportList.sort(orderDateMatched);
}
