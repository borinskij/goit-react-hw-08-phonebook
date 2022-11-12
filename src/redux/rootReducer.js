import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-Slider';
import phonebookReducer from '../redux/Phonebook/slicePhonebook';
import filterReducer from '../redux/Phonebook/sliceFilter';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedReducer,
  contacts: phonebookReducer,
  filter: filterReducer,
});
