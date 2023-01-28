import { createAsyncThunk } from '@reduxjs/toolkit';
import { colorCode } from '../../../helpers';
import axiosInstance from '../../../axios/axiosConfig';
import { Navigate } from 'react-router';

export const userLogin = createAsyncThunk(
	'user/userLogin',
	async ({ user, rejectWithValue }) => {
		console.log('consoling: user before try =====> ', user);
		try {
			const res = await axiosInstance.post(`/auth/login`, user);
			console.log('consoling: res in Login =====> ', res);

			sessionStorage.setItem('accessToken', res.data.accessToken);
			localStorage.setItem(
				'auth',
				JSON.stringify({
					refreshToken: res.data.refreshToken,
					id: res.data.data.id,
				})
			);

			return {
				...res.data.data,
				colorCode: colorCode(),
				isAuth: true,
			};
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const userSignup = createAsyncThunk(
	'user/userSignup',
	async ({ user, rejectWithValue }) => {
		try {
			const res = await axiosInstance.post(`/auth/register`, user);
			console.log('consoling: res in Signup =====> ', res.data);
			sessionStorage.setItem('accessToken', res.data.accessToken);
			localStorage.setItem(
				'auth',
				JSON.stringify({
					refreshToken: res.data.refreshToken,
					id: res.data.data._id,
				})
			);
			// <Navigate to={`/user/${res.data.user.id}`} />;
			return {
				...res.data.data,
				colorCode: colorCode(),
				isAuth: true,
			};
		} catch (error) {
			console.log('consoling: error =====> ', error )
			return rejectWithValue(error);
		}
	}
);

export const userEdit = createAsyncThunk(
	'user/userEdit',
	async ({ eidtedUser, rejectWithValue }) => {
		try {
			let accessToken = sessionStorage.getItem('accessToken')
			const res = await axiosInstance.put(`/user`, eidtedUser, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'multipart/form-data',
					'Authorization': `Bearer ${accessToken}`
				},
			});
			console.log('consoling: res Edit =====> ', res )
			return {
				...res.data.user,
				colorCode: colorCode(),
				isAuth: true,
			};
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const userGetInitial = createAsyncThunk(
	'user/userGetInitial',
	async (_, { rejectWithValue }) => {
		console.log('consoling: GetInitial =====> ');
		try {
			const res = await axiosInstance.get('/user').data;
			console.log('consoling: user in getInitial =====> ', res);
			return {
				...res,
				isAuth: true,
				colorCode: colorCode(),
			};
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const userSignout = createAsyncThunk(
	'user/1s',
	async (_, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(`auth/logout`);
			console.log('consoling: res signout =====> ', res);
			localStorage.clear();

			sessionStorage.clear();

			return res.data;
		} catch (error) {
			return rejectWithValue(error.error);
		}
	}
);
