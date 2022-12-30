import { configureStore } from '@reduxjs/toolkit';
import { login, logout, setSignUpStep } from './slices/AuthSlice';
import TwitterProfileSlice, {
  setTwitterProfile
} from './slices/TwitterProfileSlice';
import AuthSlice from './slices/AuthSlice';

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    profile: TwitterProfileSlice
  }
});

export { login, logout, setSignUpStep, setTwitterProfile, store };
