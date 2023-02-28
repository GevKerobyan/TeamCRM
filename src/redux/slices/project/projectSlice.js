import { createSlice } from '@reduxjs/toolkit';
import { projectCreate, projectGet, taskCreate } from './projectAsyncs';

const projectState = {
	isLoading: true,
	data: {
		projectName: '',
		managerId: '',
		companyId: '',
		projectLogo: '',
		description: '',
		projectAddress: '',
		projectWebpage: '',
		projectPhone: 0,
		projectUsers: [{}],
		tasks: [
			{
				taskName: '',
				description: '',
				photo: '',
				setPriority: '',
				dueData: ' { type: Schema.Types.Date, required: true }',
				assignMember: '',
				creator: '',
			},
		],
	},
};

const projectSlice = createSlice({
	name: 'project',
	initialState: projectState,
	reducers: {},
	extraReducers: (builder) => {
		//  =====> CREATE PROJECT
		builder.addCase(projectCreate.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(projectCreate.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
			state.error = '';
		});

		builder.addCase(projectCreate.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});

		builder.addCase(projectGet.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(projectGet.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
			state.error = '';
		});
		builder.addCase(projectGet.rejected, (state, action) => {
			state.isLoading = false;
			state.data = projectState;
			state.error = action.payload;
		});

		builder.addCase(taskCreate.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(taskCreate.fulfilled, (state, action) => {
		});
		builder.addCase(taskCreate.rejected, (state, action) => {
			state.isLoading = false;
			state.data = projectState;
			state.error = action.payload;
		});
	},

});

export default projectSlice.reducer;

// name: { type: String, required: true  },
// owner_id: { type: String, required: true },
// companyId: { type:Schema.Types.ObjectId,required:true },

// logo: { type: String },
// description: { type: String },
// address: { type: String },
// webpage: { type: String },
// phonenumber: { type: Number },
// users: [
//     { type: Schema.Types.ObjectId, ref:'User' }
// ],
// tasks: [ { type: Schema.Types.ObjectId, ref:'Task'} ]
