import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user/userSlice';
import companyReducer from './slices/company/companySlice';

export default configureStore({
	reducer: {
		user: userReducer,
		company: companyReducer,
	},
});
