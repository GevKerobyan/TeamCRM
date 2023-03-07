import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user/userSlice';
import companyReducer from './slices/company/companySlice';
import projectReducer from './slices/project/projectSlice';
import messagesSlice from './slices/messages/messagesSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		company: companyReducer,
		project: projectReducer,
		messages: messagesSlice,
	},
});
