import axiosInstance from '../axios/axiosConfig';

const tokenRefresh = () => {
	const BASE_URL = process.env.REACT_APP_BASE_URL;
	
	const refresh = async () => {
		const auth = JSON.parse(localStorage.getItem('auth'));

		try {
			if (auth) {
				const response = await axiosInstance.post(
					`${BASE_URL}/auth/refresh`,
					{},
					{
						headers: {
							jwt: auth.refreshToken,
						},
					}
				);
				sessionStorage.setItem('accessToken', response.data.accessToken);
				return response.data.accessToken;
			} 

			// else return;
		} catch (error) {
			if(error.status === 403) return
			console.log('error in refresh ====> ', error);
		}
	};
	return refresh;
};

export default tokenRefresh;
