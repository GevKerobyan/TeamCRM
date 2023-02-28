import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../axios/axiosConfig';

//api/v1/companies/63f3478fb41b76a5d367dd96/projects

export const projectCreate = createAsyncThunk(
	'project/createProject',
	async ({ project, companyId, rejectWithValue }) => {
		try {
			let accessToken = sessionStorage.getItem('accessToken');
			const res = await axiosInstance.post(
				`/companies/${companyId}/projects`,
				project,
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.error);
		}
	}
);

export const projectGet = createAsyncThunk(
	'project/getProject',
	async ({ projectId, companyId, rejectWithValue }) => {
		try {
			const res = await axiosInstance.get(
				`/companies/${companyId}/projects/${projectId}`
			);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.error);
		}
	}
);

export const taskCreate = createAsyncThunk(
	'task/createTask',
	async ({ task, projectId, companyId, rejectWithValue }) => {
		try {
			const res = await axiosInstance.post(
				`/companies/${companyId}/projects/${projectId}/task`,
				JSON.stringify({ taskName: task, status: 1 })
			);
		} catch (error) {
			return rejectWithValue(error.error);
		}
	}
);
