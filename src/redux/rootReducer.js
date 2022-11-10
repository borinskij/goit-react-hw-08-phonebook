import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-Slider';

export const rootReducer = combineReducers({
  auth: authReducer,
});
