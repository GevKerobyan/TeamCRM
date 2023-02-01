import { createSlice } from '@reduxjs/toolkit';
// import { addCompanyData } from './companyAsyncs';

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
			state.data = action.payload
		}
	},

	extraReducers: (builder) => {
		// builder.addCase(addCompanyData.pending, (state) => {
		// 	console.log('consoling: addCompanyData.pending =====> ' )
		// 	state.isLoading = true
		// });

		// builder.addCase(addCompanyData.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	console.log('consoling: addCompanyData.fulfilled =====> ', action.payload )
		// });

		// builder.addCase(addCompanyData.rejected,(state, action)=> {
		// 	state.isLoading = false;
		// 	console.log('consoling:  addCompanyData.rejected =====> ', action )
		// })
		// =====> Login
		// 	builder.addCase(companyLogin.pending, (state) => {
		// 		state.isLoading = true;
		// 	});
		// 	builder.addCase(companyLogin.fulfilled, (state, action) => {
		// 		console.log('consoling: action =====> ', action )
		// 		state.isLoading = false;
		// 		state.data = action.payload;
		// 		state.error = '';
		// 	});
		// 	builder.addCase(companyLogin.rejected, (state, action) => {
		// 		state.isLoading = false;
		// 		state.data = {};
		// 		state.error = action.payload;
		// 	});

		// 	// =====> Signup
		// 	builder.addCase(userSignup.pending, (state) => {
		// 		state.isLoading = true;
		// 	});
		// 	builder.addCase(userSignup.fulfilled, (state, action) => {
		// 		state.isLoading = false;
		// 		state.data = action.payload;
		// 		state.error = '';
		// 	});
		// 	builder.addCase(userSignup.rejected, (state, action) => {
		// 		state.isLoading = false;
		// 		state.data = this.initialState;
		// 		state.error = action.payload;
		// 	});
	},
});

export default companySlice.reducer;
export const { getCompany } = companySlice.actions;
