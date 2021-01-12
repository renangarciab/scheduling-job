import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import App from '../App';

import * as ActionsJobs from '../store/modules/jobs/actions';

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

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
				],
			})
		);
		const { getByTestId, getByText } = render(<App />);

		fireEvent.click(getByText('Carregar lista'));
		expect(getByTestId('jobs')).toHaveTextContent(
			'Importação de arquivos de fundos'
		);
		expect(getByTestId('jobs')).toHaveTextContent('11/11/2019 12:00');
		expect(getByTestId('jobs')).toHaveTextContent('2');
	});

	// it('shoulb be dispatch jobs', () => {
	// 	const { getByTestId } = render(<App />);
	// 	const dispatch = jest.fn();

	// 	useDispatch.mockReturnValue(dispatch);

	// 	fireEvent.load(getByTestId('jobs'));

	// 	expect(dispatch).toHaveBeenCalled(ActionsJobs.requestJobs());
	// });
});
