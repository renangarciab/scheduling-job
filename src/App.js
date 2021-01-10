import React, { useState, useEffect } from 'react';

import { isEqual, format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

function App() {
	const sortedJobs = [];
	const jobs = [
		{
			id: 1,
			description: 'Importação de arquivos de fundos',
			deadline: new Date('2019-11-11 12:00:00'),
			time: '2',
		},
		{
			id: 2,
			description: 'Importação de dados da Base Legada',
			deadline: new Date('2019-11-13 12:00:00'),
			time: '4',
		},
		{
			id: 3,
			description: 'Importação de dados de integração',
			deadline: new Date('2019-11-11 08:00:00'),
			time: '6',
		},
		{
			id: 4,
			description: 'Importação de dados de integração',
			deadline: new Date('2019-11-12 08:00:00'),
			time: '6',
		},
		{
			id: 5,
			description: 'Importação de dados de integração',
			deadline: new Date('2019-11-12 09:00:00'),
			time: '6',
		},
		{
			id: 6,
			description: 'Importação de dados de integração',
			deadline: new Date('2019-11-12 09:00:00'),
			time: '10',
		},
	];

	function dateFormat(date) {
		return format(date, "dd'/'MM'/'yyyy'", {
			locale: pt,
		});
	}

	function handlerOrderDate(dateA, dateB) {
		return dateA.deadlineMatched - dateB.deadlineMatched;
	}

	function handlerArray(list) {
		const compareList = list;
		let exportList = [];
		let dateMatched = null;
		const groupArray = [];

		console.log(exportList);

		for (let i = 0; i < list.length; i += 1) {
			if (list[i].time <= 8) {
				dateMatched = compareList.filter(
					(item) =>
						dateFormat(item.deadline) ===
						dateFormat(list[i].deadline)
				);
				groupArray.push({
					dateMatched: dateFormat(list[i].deadline),
					deadlineMatched: list[i].deadline,
					...dateMatched,
				});
			}
		}

		console.log('groupArray', groupArray);

		exportList = groupArray.filter(
			(group, index, self) =>
				index ===
				self.findIndex(
					(found) => found.dateMatched === group.dateMatched
				)
		);

		exportList.sort(handlerOrderDate);

		console.log('exportList', exportList);
	}

	handlerArray(jobs);

	// sortedJobs = jobs.slice().sort(handlerOrderDate);

	return (
		<div>
			{sortedJobs.map((job) => (
				<div key={job.id}>
					{job.id} -{' '}
					{format(job.deadline, "dd'/'MM'/'yyyy' 'HH:mm", {
						locale: pt,
					})}
				</div>
			))}
			<div />
		</div>
	);
}

export default App;
