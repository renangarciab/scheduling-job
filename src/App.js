import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { format } from 'date-fns';
import {
	Container,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	Table,
	Button,
} from 'reactstrap';
import pt from 'date-fns/locale/pt';

import * as ActionsJobs from './store/modules/jobs/actions';

export default function App() {
	const jobs = useSelector((state) => state.jobs);
	const dispatch = useDispatch();

	const [jobsList, setJobsList] = useState([]);

	// useEffect(() => {
	// 	dispatch(ActionsJobs.requestJobs());
	// }, [dispatch]);

	// const jobs = [
	// 	{
	// 		id: 1,
	// 		description: 'Importação de arquivos de fundos',
	// 		deadline: new Date('2019-11-11 12:00:00'),
	// 		duration: 2,
	// 	},
	// 	{
	// 		id: 2,
	// 		description: 'Importação de dados da Base Legada',
	// 		deadline: new Date('2019-11-13 12:00:00'),
	// 		duration: 4,
	// 	},
	// 	{
	// 		id: 3,
	// 		description: 'Importação de dados de integração',
	// 		deadline: new Date('2019-11-11 08:00:00'),
	// 		duration: 6,
	// 	},
	// 	{
	// 		id: 4,
	// 		description: 'Importação de dados de integração',
	// 		deadline: new Date('2019-11-12 18:00:00'),
	// 		duration: 6,
	// 	},
	// 	{
	// 		id: 5,
	// 		description: 'Importação de dados de integração',
	// 		deadline: new Date('2019-11-12 09:00:00'),
	// 		duration: 8,
	// 	},
	// 	{
	// 		id: 6,
	// 		description: 'Importação de dados de integração',
	// 		deadline: new Date('2019-11-12 15:00:00'),
	// 		duration: 1,
	// 	},
	// 	{
	// 		id: 7,
	// 		description: 'Importação de dados de integração',
	// 		deadline: new Date('2019-11-12 09:00:00'),
	// 		duration: 10,
	// 	},
	// ];

	function dateFormat(date) {
		return format(date, "dd'/'MM'/'yyyy'", {
			locale: pt,
		});
	}

	function fullDateFormat(date) {
		return format(date, "dd'/'MM'/'yyyy' 'HH:mm", {
			locale: pt,
		});
	}

	function orderDateMatched(dateA, dateB) {
		return dateA.deadlineMatched - dateB.deadlineMatched;
	}

	function orderDate(dateA, dateB) {
		return dateA.deadline - dateB.deadline;
	}

	function returnJobsList() {
		const list = jobs;
		const compareList = list;
		let exportList = [];
		let dateMatched = null;
		const groupArray = [];

		// Função que agrupa os jobs por dia
		for (let i = 0; i < list.length; i += 1) {
			dateMatched = compareList.filter(
				(item) =>
					dateFormat(item.deadline) ===
						dateFormat(list[i].deadline) && item.duration < 9
			);

			groupArray.push({
				dateMatched: dateFormat(list[i].deadline),
				deadlineMatched: list[i].deadline,
				list: dateMatched,
			});
		}

		// console.log('groupArray', groupArray);

		// Função que remove os agrupamentos repetidos
		exportList = groupArray.filter(
			(group, index, self) =>
				index ===
				self.findIndex(
					(found) => found.dateMatched === group.dateMatched
				)
		);

		exportList.sort(orderDateMatched);

		// console.log('exportList', exportList);
		// return exportList;

		setJobsList(exportList);
	}

	return (
		<Container fluid="lg">
			<Button onClick={() => returnJobsList()}>Carregar lista</Button>
			<div data-testid="jobs">
				{jobsList.map((jobGroup) => (
					<ListGroup
						className="my-5"
						key={`${jobGroup.deadlineMatched}-${jobGroup.dateMatched}`}>
						<ListGroupItemHeading>
							Tarefas do dia - {jobGroup.dateMatched}
						</ListGroupItemHeading>
						<ListGroupItem>
							<Table>
								<thead>
									<tr>
										<th className="border-top-0 text-center">
											ID
										</th>
									</tr>
									<tr>
										<th className="border-top-0">
											Descrição
										</th>
									</tr>
									<tr>
										<th className="border-top-0">Prazo</th>
									</tr>
									<tr>
										<th className="border-top-0 text-center">
											Tempo
										</th>
									</tr>
								</thead>
								<tbody>
									{jobGroup.list
										.sort(orderDate)
										.map((job) => (
											<tr key={job.id}>
												<td className="text-center">
													{job.id}
												</td>
												<td>{job.description}</td>
												<td>
													{fullDateFormat(
														job.deadline
													)}
												</td>
												<td className="text-center">
													{job.duration}
												</td>
											</tr>
										))}
								</tbody>
							</Table>
						</ListGroupItem>
					</ListGroup>
				))}
			</div>
		</Container>
	);
}
