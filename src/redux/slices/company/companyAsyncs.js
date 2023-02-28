import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../axios/axiosConfig';

export const companyCreate = createAsyncThunk(
	'company/createCompany',
	async ({ company, rejectWithValue }) => {
		try {
			let accessToken = sessionStorage.getItem('accessToken');
			const res = await axiosInstance.post(`/companies`, company, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${accessToken}`,
				},
			});
			console.log('consoling: res in CreateCompany =====> ', res);
			return res.data;
		} catch (error) {
			console.log('consoling: error in CreateCompany =====> ', error);
			return rejectWithValue(error.error);
		}
	}
);

export const companyGet = createAsyncThunk(
	'company/getCompany',
	async ({ companyId, rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(`/companies/${companyId}`);
			console.log('consoling: res in GetCompany =====> ', res);
			return res.data;
		} catch (error) {
			console.log('consoling: error in GetCompany =====> ', error);
			return rejectWithValue(error.error);
		}
	}
);

