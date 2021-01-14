import { all } from 'redux-saga/effects';

import * as jobs from './jobs/sagas';

export default function* rootSaga() {
	return yield all([jobs]);
}
