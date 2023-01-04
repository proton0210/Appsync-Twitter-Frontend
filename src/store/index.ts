import { configureStore } from '@reduxjs/toolkit';
import { login, logout, setSignUpStep } from './slices/AuthSlice';

import TwitterProfileSlice, {
  setTwitterProfile
} from './slices/TwitterProfileSlice';
import TimeLineSlice, { setTimeLine } from './slices/TimeLineSlice';
import AuthSlice from './slices/AuthSlice';

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    profile: TwitterProfileSlice,
    timeLine: TimeLineSlice
  }
});

export { login, logout, setSignUpStep, setTwitterProfile, setTimeLine, store };
