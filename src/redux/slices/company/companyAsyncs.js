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
			return res.data;
		} catch (error) {
			return rejectWithValue(error.error);
		}
	}
);

export const companyGet = createAsyncThunk(
	'company/getCompany',
	async ({ companyId, rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(`/companies/${companyId}`);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.error);
		}
	}
);

