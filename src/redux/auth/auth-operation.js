import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getUserCurrent,
  postLogout,
  setAuthorization,
  setRegisration,
} from 'helpers/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const authUsers = createAsyncThunk(
  'auth/registration',
  async (user, thunkApi) => {
    try {
      const response = await setRegisration(user);
      setAuthHeader(response.token);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUsers = createAsyncThunk(
  'auth/login',
  async (login, thunkApi) => {
    try {
      //const token = thunkApi.getState().auth.token
      //setAuthHeader(token)
      const response = await setAuthorization(login);
      setAuthHeader(response.token);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrent = createAsyncThunk(
  'auth/getcurrent',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    if (token === null) {
      return thunkApi.rejectWithValue();
    }
    setAuthHeader(token);
    try {
      const response = await getUserCurrent();
      //   setAuthHeader(response.token);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await postLogout();

    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
