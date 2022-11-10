import { authUsers } from './auth-operation';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlider = createSlice({
  name: 'auth',
  contasts: [],
  initialState,
  extraReducers: {
    [authUsers.pending](state) {
      state.isLoading = true;
    },
    [authUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
      state.token = action.payload.token;
    },
    [authUsers.rejected](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
  },
});

export const authReducer = authSlider.reducer;
