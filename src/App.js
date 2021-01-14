import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index';

import Jobs from './components/Jobs';

export default function App() {
	return (
		<Provider store={store}>
			<Jobs />
		</Provider>
	);
}
