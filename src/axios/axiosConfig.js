import axios from 'axios';
import tokenRefresh from '../utils/tokenRefresh';
import userRefreshAuthorize from '../redux/slices/user/userSlice';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

const setAxios = (axInstance) => {
	const refresh = tokenRefresh();
	let accessToken = sessionStorage.getItem('accessToken');
	axInstance.interceptors.request.use(
		(config) => {
			if (!config.headers['Authorization']) {
				config.headers['Authorization'] = `Bearer ${accessToken}`;
			}
			return config;
		},
		(error) => Promise.reject(error)
	);

	axInstance.interceptors.response.use(
		(response) => response,
		async (error) => {
			const prevRequest = error.config;
			if (error.response.status === 401) {
				const newAccessToken = await refresh();
				prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
				// userRefreshAuthorize({ newToken: newAccessToken });
				return axInstance(prevRequest);
			}
			return Promise.reject(error);
		}
	);
	return axInstance;
};

const axiosInstance = setAxios(axInstance);

export default axiosInstance;
