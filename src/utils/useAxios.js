import { useEffect } from 'react';
import tokenRefresh from './tokenRefresh';
// import axiosInstance from '../axios/axiosConfig';
import { userRefreshAuthorize } from '../redux/slices/user/userSlice';
import { useDispatch } from 'react-redux';

const useAxios = () => {
	const dispatch = useDispatch();

	const refresh = tokenRefresh();

	let accessToken = sessionStorage.getItem('accessToken');

	useEffect(() => {
		const requestIntercept = axiosInstance.interceptors.request.use(
			(config) => {
				if (!config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${accessToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		const responseIntercept = axiosInstance.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error.config;
				if (error.response.status === 401) {
					const newAccessToken = await refresh();
					prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
					dispatch(userRefreshAuthorize({ newToken: newAccessToken }));
					return axiosInstance(prevRequest);
				}
				return Promise.reject(error);
			}
		);

		return () => {
			axiosInstance.interceptors.request.eject(requestIntercept);
			axiosInstance.interceptors.response.eject(responseIntercept);
		};
	}, [refresh, accessToken, dispatch, axiosInstance]);

	return axiosInstance;
};

export default useAxios;
