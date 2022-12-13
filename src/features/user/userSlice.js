import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { customFetch } from "../../utils/axios";
import {
  addUsertoLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  user: getUserFromLocalStorage(),
  pending: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/register", user);
      addUsertoLocalStorage(user);
      return resp.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/login", user);
      addUsertoLocalStorage(user);
      return resp.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.pending = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.pending = false;
        state.user = user;
        toast.success(`Hello ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.pending = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, state => {
        state.pending = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.pending = false;
        state.user = user;
        toast.success(`Welcome back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.pending = false;
        toast.error(payload);
      });
  },
});

export const { reducer } = userSlice;
