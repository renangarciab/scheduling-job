export const INITIAL_STATE = [];

export default function jobs(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SUCCESS_JOBS':
			return [action.payload];

		default:
			return state;
	}
}
