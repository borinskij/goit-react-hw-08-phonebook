import { authUsers, getCurrent, loginUsers, logout } from './auth-operation';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: '', email: '' },
  token: null,
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
      console.log('1');
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [authUsers.rejected](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [loginUsers.pending](state) {
      state.isLoading = true;
    },
    [loginUsers.fulfilled](state, action) {
      state.isLoading = false;
      console.log('2');
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [loginUsers.rejected](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [getCurrent.pending](state) {
      console.log('3');
      state.isLoading = true;
    },
    [getCurrent.fulfilled](state, action) {
      console.log('4');
      state.isLoading = false;
      state.user = action.payload;
      //   state.token = action.payload.token;

      //   state.token = action.payload;
    },
    [getCurrent.rejected](state) {
      console.log('5');
      state.isLoading = false;
    },
    [logout.fulfilled](state) {
      console.log('6');
      state.isLoading = 'lmlkm';
      //   state.user = action.payload;
      state.token = null;
    },
  },
});

export const authReducer = authSlider.reducer;
