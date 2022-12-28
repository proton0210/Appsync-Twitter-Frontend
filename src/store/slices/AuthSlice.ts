import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
    user: null,
    signUpStep: 0
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
    setSignUpStep: (state, action) => {
      state.signUpStep = action.payload;
    }
  }
});

export const { login, logout,setSignUpStep } = AuthSlice.actions;
export default AuthSlice.reducer;
