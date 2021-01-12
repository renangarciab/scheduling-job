import axios from 'axios';

const api = axios.create({
	baseURL: 'http://fakehost:171',
});

export default api;
