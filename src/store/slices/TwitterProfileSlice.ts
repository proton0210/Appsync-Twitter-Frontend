import { createSlice } from '@reduxjs/toolkit';

const twitterProfile = createSlice({
  name: 'twitter',
  initialState: {
    id: '',
    createdAt: '2-10-1996',
    imageUrl: 'default'
  },
  reducers: {
    setTwitterProfile: (state, action) => {
      state.id = action.payload.id;
      state.createdAt = action.payload.createdAt;
      state.imageUrl = action.payload.imageUrl;
    }
  }
});

export default twitterProfile.reducer;
export const { setTwitterProfile } = twitterProfile.actions;
