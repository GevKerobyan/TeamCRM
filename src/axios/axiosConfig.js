import axios from 'axios';
import tokenRefresh from '../utils/tokenRefresh';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

const setAxios = () => {

	axInstance.interceptors.request.use((config) => {
		config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('accessToken')}`;
		return config;
	});

	axInstance.interceptors.response.use(
		(response) => response,
		async (error) => {
			const prevRequest = error.config;
			if (error.response.status === 401) {
				const refresh = tokenRefresh();
				const newAccessToken = await refresh();
				if (newAccessToken) {
					prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
					return axInstance(prevRequest);
				}
				return;
			}
			return;
		}
	);
	return axInstance;
};

const axiosInstance = setAxios(axInstance);

export default axiosInstance;
