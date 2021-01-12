export function requestJobs() {
	return { type: 'REQUEST_JOBS' };
}

export function successJobs(data) {
	return { type: 'SUCCESS_JOBS', payload: data };
}

export function failJobs() {
	return { type: 'FAIL_JOBS' };
}
