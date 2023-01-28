import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axios/axiosConfig';
import { colorCode } from '../../../helpers';
export const addCompanyData = createAsyncThunk('company/addCompanyData', async ({_id, rejectWithValue}) => {
  
});
