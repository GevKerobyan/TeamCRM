import { createSlice } from '@reduxjs/toolkit';

const messagesState = [
	{
		isLoading: true,
		data: {
			sender: {
				sender_id: '',
				sender_photo: '',
			},
			receiver: {
				receiver_id: '',
				receiver_photo: '',
			},
			content: '',
			is_read: false,
			attachment: '',
			sent_time: '',
		},
		error: '',
	},
];

const messagesSlice = createSlice({
	name: 'messages',
	initialState: messagesState,
	reducers: {
		addMessage: (state, action) => {
			return [
				...state,
				{
					isLoading: false,
					data: action.payload,
					error: '',
				},
			];
		},
		readMessage: (state) => {
			state.data.is_read = true;
		},
	},
	extraReducers: builder => {
		// builder.addCase(chatStart.pending, state=> {
		// 	state.isLoading = true
		// });
		// builder.addCase(chatStart.fulfilled, (state, action)=> {
		// 	state.isLoading = false;
		// 	state.data = action.payload;
		// 	state.error = '';
		// });
		// builder.addCase(chatStart.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.error = action.payload;
		// })
	}
});

export default messagesSlice.reducer;
export const { addMessage, readMessage } = messagesSlice.actions;
