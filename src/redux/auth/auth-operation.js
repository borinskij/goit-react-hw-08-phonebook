import { createAsyncThunk } from '@reduxjs/toolkit';
import { setRegisration } from 'helpers/api';

export const authUsers = createAsyncThunk(
  'auth/registration',
  async (user, thunkAPI) => {
    try {
      console.log('userOper :', user);
      const responses = await setRegisration(user);
      console.log('Responses :', responses);
      return responses;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
