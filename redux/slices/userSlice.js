import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Async Thunks
export const getUsers = createAsyncThunk("user/getUsers", async () => {
  try {
    return await fetch(`${BASE_URL}/users`).then((res) => res.json());
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  users: 0,
  status: "",
  sampleData: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.sampleData += 1;
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = userSlice.actions;

// Selectors
export const selectSampleData = (state) => state.user.sampleData;
export const selectUsers = (state) => state.user.users;
export const selectStatus = (state) => state.user.status;

// Reducer
export default userSlice.reducer;
