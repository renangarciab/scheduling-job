export const mockJobs = {
	list: [
		{
			id: 1,
			description: 'Importação de arquivos de fundos',
			deadline: '2019-11-11 12:00:00',
			duration: 2,
		},
	],
	job: {
		id: 1,
		description: 'Importação de arquivos de fundos',
		deadline: '2019-11-11 12:00:00',
		duration: 2,
	},
	listToOrder: [
		{
			id: 1,
			description: 'Importação de arquivos de fundos',
			deadline: new Date('2019-11-11 12:00:00'),
			duration: 2,
		},
		{
			id: 2,
			description: 'Importação de dados da Base Legada',
			deadline: new Date('2019-11-13 12:00:00'),
			duration: 4,
		},
		{
			id: 3,
			description: 'Importação de dados de integração',
			deadline: new Date('2019-11-11 08:00:00'),
			duration: 6,
		},
		{
			id: 4,
			description: 'Importação de dados de integração',
			deadline: new Date('2019-11-12 18:00:00'),
			duration: 6,
		},
		{
			id: 5,
			description: 'Importação de dados de integração',
			deadline: new Date('2019-11-12 09:00:00'),
			duration: 8,
		},
		{
			id: 6,
			description: 'Importação de dados de integração',
			deadline: new Date('2019-11-12 15:00:00'),
			duration: 1,
		},
		{
			id: 7,
			description: 'Importação de dados de integração',
			deadline: new Date('2019-11-12 09:00:00'),
			duration: 10,
		},
	],
	listReodered: [
		{
			dateMatched: '11/11/2019',
			deadlineMatched: new Date('2019-11-11T15:00:00.000Z'),
			list: [
				{
					id: 1,
					description: 'Importação de arquivos de fundos',
					deadline: new Date('2019-11-11T15:00:00.000Z'),
					duration: 2,
				},
				{
					id: 3,
					description: 'Importação de dados de integração',
					deadline: new Date('2019-11-11T11:00:00.000Z'),
					duration: 6,
				},
			],
		},
		{
			dateMatched: '12/11/2019',
			deadlineMatched: new Date('2019-11-12T21:00:00.000Z'),
			list: [
				{
					id: 4,
					description: 'Importação de dados de integração',
					deadline: new Date('2019-11-12T21:00:00.000Z'),
					duration: 6,
				},
				{
					id: 5,
					description: 'Importação de dados de integração',
					deadline: new Date('2019-11-12T12:00:00.000Z'),
					duration: 8,
				},
				{
					id: 6,
					description: 'Importação de dados de integração',
					deadline: new Date('2019-11-12T18:00:00.000Z'),
					duration: 1,
				},
			],
		},
		{
			dateMatched: '13/11/2019',
			deadlineMatched: new Date('2019-11-13T15:00:00.000Z'),
			list: [
				{
					id: 2,
					description: 'Importação de dados da Base Legada',
					deadline: new Date('2019-11-13T15:00:00.000Z'),
					duration: 4,
				},
			],
		},
	],
};
