import React from 'react';
import { useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import Jobs from '../../components/Jobs';

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

describe('Jobs', () => {
	it('shoud be component list', () => {
		const { findByTestId } = render(<Jobs />);
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
				],
			})
		);
		const { getByTestId, getByText } = render(<Jobs />);

		fireEvent.click(getByText('Carregar lista'));
		expect(getByTestId('jobs')).toHaveTextContent(
			'Importação de arquivos de fundos'
		);
		expect(getByTestId('jobs')).toHaveTextContent('11/11/2019 12:00');
		expect(getByTestId('jobs')).toHaveTextContent('2');
	});
});
