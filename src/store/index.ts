import { configureStore } from '@reduxjs/toolkit';
import { login, logout } from './slices/AuthSlice';
import AuthSlice from './slices/AuthSlice';

const store = configureStore({
  reducer: {
    auth: AuthSlice
  }
});

export { login, logout, store };
