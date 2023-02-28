import { createAsyncThunk } from '@reduxjs/toolkit';
import { colorCode } from '../../../helpers';
import axiosInstance from '../../../axios/axiosConfig';
import { Navigate } from 'react-router';
import axios from 'axios';

export const userLogin = createAsyncThunk(
	'user/userLogin',
	async ({ user, rejectWithValue }) => {
		const BASE_URL = process.env.REACT_APP_BASE_URL;

		try {
			const res = await axios.post(`${BASE_URL}/auth/login`, user);

			console.log('consoling: res in userLogin =====> ', res.data);

			sessionStorage.setItem('accessToken', res.data.accessToken);
			localStorage.setItem(
				'auth',
				JSON.stringify({
					refreshToken: res.data.refreshToken,
					id: res.data.id,
				})
			);
			return {
				...res.data,
				colorCode: colorCode(),
				isAuth: true,
			};
		} catch (error) {
			console.log('consoling: error in userLogin =====> ', error);
			return rejectWithValue(error);
		}
	}
);

export const userSignup = createAsyncThunk(
	'user/userSignup',
	async ({ user, rejectWithValue }) => {
		const BASE_URL = process.env.REACT_APP_BASE_URL;
		try {
			const res = await axios.post(`${BASE_URL}/auth/register`, user);
			console.log('consoling: res in Signup =====> ', res.data);
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
			console.log('consoling: error in Signup =====> ', error);
			return rejectWithValue(error);
		}
	}
);

export const userEdit = createAsyncThunk(
	'user/userEdit',
	async ({ eidtedUser, rejectWithValue }) => {
		try {
			let accessToken = sessionStorage.getItem('accessToken');
			const res = await axiosInstance.put(`/user`, eidtedUser, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${accessToken}`,
				},
			});
			console.log('consoling: res in Edit =====> ', res);
			return {
				...res.data.data,
				colorCode: colorCode(),
				isAuth: true,
			};
		} catch (error) {
			console.log('consoling: error in Edit =====> ', error);
			return rejectWithValue(error);
		}
	}
);

export const userGetInitial = createAsyncThunk(
	'user/userGetInitial',
	async (_, { rejectWithValue }) => {
		try {
			const res = await axiosInstance.get('/user');
			console.log('consoling: res in getInitial =====> ', res);
			return {
				...res.data,
				isAuth: true,
				colorCode: colorCode(),
			};
		} catch (error) {
			console.log('consoling: error in getInitial =====> ', error);
			return rejectWithValue(error);
		}
	}
);

export const userSignout = createAsyncThunk(
	'user/signout',
	async ({ refreshToken, rejectWithValue }) => {
		try {
			console.log('consoling: refreshtoken in userSignout =====> ', refreshToken);
			const res = await axiosInstance.post(`/auth/logout`, { refreshToken });
			console.log('consoling: res signout =====> ', res);
			localStorage.clear();
			sessionStorage.clear();
			<Navigate to='/' />;
			return;
		} catch (error) {
			console.log('consoling: error in userSignout =====> ', error);
			return rejectWithValue(error.error);
		}
	}
);
