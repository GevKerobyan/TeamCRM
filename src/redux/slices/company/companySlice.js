import { createSlice } from '@reduxjs/toolkit';
import { companyCreate, companyGet } from './companyAsyncs';

const companyState = {
	isLoading: true,
	data: {
		name: '',
		owner_id: '',
		logo: '',
		description: '',
		address: '',
		webpage: '',
		phonenumber: 0,
		users: [],
		projects: [''],
	},
	error: '',
};

const companySlice = createSlice({
	name: 'company',
	initialState: companyState,
	reducers: {
		getCompany: (state, action) => {
			state.data = action.payload;
		},
	},

	extraReducers: (builder) => {
		// =====> CREATE COMPANY

		builder.addCase(companyCreate.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(companyCreate.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
			state.error = '';
		});

		builder.addCase(companyCreate.rejected, (state, action) => {
			state.isLoading = false;
		});

		// =====> GET COMPANY
		builder.addCase(companyGet.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(companyGet.fulfilled, (state, action) => {
			
			state.isLoading = false;
			state.data = action.payload;
			state.error = '';
		});

		builder.addCase(companyGet.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});

export default companySlice.reducer;
export const { getCompany } = companySlice.actions;
