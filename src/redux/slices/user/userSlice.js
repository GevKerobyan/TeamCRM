import { createSlice } from '@reduxjs/toolkit';
import { Navigate } from 'react-router';
import {
	userEdit,
	userGetInitial,
	userLogin,
	userSignout,
	userSignup,
} from './userAsyncs';

const userState = {
	isLoading: true,
	data: {
		id: '',
		firstName: '',
		lastName: '',
		companyId: '',
		email: '',
		password: '',
		photo: '',
		isAuth: false,
		colorCode: '',
	},
	error: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState: userState,
	reducers: {
		userRefreshAuthorize: (state) => {
			return { ...state, isAuth: true };
		},
		userSyncLogout: (state) => {
			localStorage.clear();
			sessionStorage.clear();
			return userState;
		},
	},

	extraReducers: (builder) => {
		
		// =====> Login
		builder.addCase(userLogin.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(userLogin.fulfilled, (state, action) => {
			console.log('consoling: Login FulFilled =====> ', action.payload);
			state.isLoading = false;
			state.data = action.payload;
			state.error = '';
		});
		builder.addCase(userLogin.rejected, (state, action) => {
			state.isLoading = false;
			state.data = userState;
			state.error = action.payload;
		});

		// =====> Signup
		builder.addCase(userSignup.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(userSignup.fulfilled, (state, action) => {
			console.log('consoling: Signup.FulFilled =====> ', action.payload);
			state.isLoading = false;
			state.data = action.payload;
			state.error = '';
		});
		builder.addCase(userSignup.rejected, (state, action) => {

			state.isLoading = false;
			state.data = userState;
			state.error = action.payload;
		});

		// =====> Get Initial
		builder.addCase(userGetInitial.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(userGetInitial.fulfilled, (state, action) => {
			console.log('consoling: GetInitial.FulFilled =====> ', action.payload);

			state.isLoading = false;
			state.data = action.payload;
			state.error = '';
		});
		builder.addCase(userGetInitial.rejected, (state, action) => {
			state.isLoading = false;
			state.data = userState;
			state.error = action.payload;
		});

		// =====> Sign Out
		builder.addCase(userSignout.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(userSignout.fulfilled, (state) => {
			state.isLoading = false;
			state.data = userState;
			state.error = '';
		});
		builder.addCase(userSignout.rejected, (state, action) => {
			state.isLoading = false;
			state.data = state;
			state.error = action.payload;
		});

		// =====> Edit
		builder.addCase(userEdit.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(userEdit.fulfilled, (state, action) => {
			console.log('consoling: Edit.FulFilled =====> ', action.payload);
			state.isLoading = false;
			state.data = action.payload;
			state.error = '';
		});
		builder.addCase(userEdit.rejected, (state, action) => {
			state.isLoading = false;
			state.data = userState;
			state.error = action.payload;
		});
	},
});

export default userSlice.reducer;
export const { userSyncLogout, userRefreshAuthorize } = userSlice.actions;
