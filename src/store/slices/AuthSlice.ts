import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false
  },
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    }
  }
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
