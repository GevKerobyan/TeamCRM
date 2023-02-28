import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../axios/axiosConfig';

//api/v1/companies/63f3478fb41b76a5d367dd96/projects

export const projectCreate = createAsyncThunk(
	'project/createProject',
	async ({ project, companyId, rejectWithValue }) => {
		try {
			let accessToken = sessionStorage.getItem('accessToken');
			console.log('consoling: accessToken =====> ', accessToken);
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
			console.log('consoling: res in ASYNC =====> ', res);
			return res.data;
		} catch (error) {
			console.log('consoling: error in createProject =====> ', error);
			return rejectWithValue(error.error);
		}
	}
);

export const projectGet = createAsyncThunk(
	'project/getProject',
	async ({ projectId, companyId, rejectWithValue }) => {
		console.log('projectId, companyId =====> ', projectId, companyId);
		try {
			const res = await axiosInstance.get(
				`/companies/${companyId}/projects/${projectId}`
			);
			console.log('consoling: res in GetProject =====> ', res);
			return res.data;
		} catch (error) {
			console.log('consoling: error in GetCompany =====> ', error);
			return rejectWithValue(error.error);
		}
	}
);

export const taskCreate = createAsyncThunk(
	'task/createTask',
	async ({ task, projectId, companyId, rejectWithValue }) => {
		console.log('task =====> ', typeof task, projectId, companyId);
		try {
			console.log('mtav =====> ');
			const res = await axiosInstance.post(
				`/companies/${companyId}/projects/${projectId}/task`,
				JSON.stringify({ taskName: task, status: 1 })
			);
			console.log('consoling: res in CreateTask =====> ', res);
		} catch (error) {
			console.log('consoling: error in createTask =====> ', error);
			return rejectWithValue(error.error);
		}
	}
);
// /:id/task
