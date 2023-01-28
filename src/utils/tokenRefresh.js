import axiosInstance from '../axios/axiosConfig';

const tokenRefresh = () => {
	const BASE_URL = process.env.REACT_APP_BASE_URL;
	const auth = JSON.parse(localStorage.getItem('auth'));

	const refresh = async () => {
		const response = await axiosInstance.post(
			`${BASE_URL}/auth/refresh`, {},
			{
				headers: {
					jwt: auth.refreshToken,
				},
			}
		);
		sessionStorage.setItem('accessToken', response.data.accessToken);

		return response.data.accessToken;
	};
	return refresh;
};

export default tokenRefresh;
