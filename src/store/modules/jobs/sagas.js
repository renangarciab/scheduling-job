import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { successJobs, failJobs } from './actions';

export function* getJobs() {
	try {
		const response = yield call(api.get, 'jobs');

		yield put(successJobs(response.data));
	} catch (error) {
		yield put(failJobs(error));
	}
}
