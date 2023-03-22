
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../axios/axiosConfig";

export const chatStart = createAsyncThunk('chat/startChat', async({currentUserId, secondUserId, rejectWithValue})=> {
  try {
    const res = await axiosInstance.post(`/chats`, {currentUserId, secondUserId})
    return {
        id: res.data.id,
        users: res.data.users,
        messages: res.data.messages,
    }
  } catch (error) {
    return rejectWithValue(error.error);
  }
})

