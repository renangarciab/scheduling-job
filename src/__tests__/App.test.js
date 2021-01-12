import React from 'react';
import { useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import App from '../App';

jest.mock('react-redux');

describe('App', () => {
	it('shoud be component list', () => {
		const { findByTestId } = render(<App />);
		expect(findByTestId('jobs')).toBeTruthy();
	});

	it('render jobs list', () => {
		useSelector.mockImplementation((data) =>
			data({
				jobs: [
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
				],
			})
		);
		const { getByTestId, debug, getByText } = render(<App />);

		fireEvent.click(getByText('Carregar lista'));
		expect(getByTestId('jobs')).toHaveTextContent(
			'Importação de arquivos de fundos'
		);
		expect(getByTestId('jobs')).toHaveTextContent('11/11/2019 12:00');
		expect(getByTestId('jobs')).toHaveTextContent('2');
		debug();
	});
});
