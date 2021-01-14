import React, { useState } from 'react';
import {
	Container,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	Table,
	Button,
} from 'reactstrap';

import { mockJobs } from '../../mocks/jobs';
import { fullDateFormat, orderDate } from '../../helpers/date';
import { returnJobsList } from '../../helpers/jobs';

export default function Jobs() {
	const [jobsList, setJobsList] = useState([]);

	function handlerLoadJobs() {
		setJobsList(returnJobsList(mockJobs.listToOrder));
	}

	return (
		<Container fluid="lg">
			<Button className="mt-5" onClick={() => handlerLoadJobs()}>
				Carregar lista
			</Button>
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
										<th className="border-top-0">
											Descrição
										</th>
										<th className="border-top-0">Prazo</th>
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
