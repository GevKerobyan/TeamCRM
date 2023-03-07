import { createSlice } from '@reduxjs/toolkit';

const messagesState = [
	{
		isLoading: true,
		data: {
			sender: {
				sender_id: '',
				sender_photo: '',
			},
			reciever: {
				reciever_id: '',
				reciever_photo: '',
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
});

export default messagesSlice.reducer;
export const { addMessage, readMessage } = messagesSlice.actions;
