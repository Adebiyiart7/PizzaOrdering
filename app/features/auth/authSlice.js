import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import authService from "./authService";

let user = null;

try {
  user = JSON.parse(AsyncStorage.getItem("user"));
} catch (error) {
  console.log(error);
}

const initialState = {
  user: user,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Register A User
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.message &&
          error.response.message.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = actions.payload;
      })
      .addCase(register.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = actions.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
