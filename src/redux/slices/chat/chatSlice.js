import { createSlice } from '@reduxjs/toolkit';
import { chatStart } from './chatAsyncs';

const chatState = {
	isLoading: true,
	data: {
		id: '',
		users: [{
			id: '',
			firstname: '',
			lastname: '',
			email: '',
			photo: '',
		}],
		messages: [{}],
	},
	error: '',
};

const chatSlice = createSlice({
	name: 'chat',
	initialState: chatState,
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(chatStart.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(chatStart.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
			state.error = '';
		});
		builder.addCase(chatStart.rejected, (state, action) => {
			state.isLoading = false;
			state.data = chatState;
			state.error = action.payload;
		});
	},
});

export default chatSlice.reducer;
// export const {} = chatSlice.actions;
