import { createSlice } from '@reduxjs/toolkit';

const otherProfile = createSlice({
  name: 'twitter',
  initialState: {
    profile: {
      id: '',
      createdAt: '',
      imageUrl: ''
    },
    tweets: {
      tweets: [],
      nextToken: undefined
    }
  },
  reducers: {
    setOtherTwitterProfile: (state, action) => {
      state.profile.id = action.payload.id;
      state.profile.createdAt = action.payload.createdAt;
      state.profile.imageUrl = action.payload.imageUrl;
    },
    setOtherTimeLine: (state, action) => {
      state.tweets.tweets = action.payload.tweets;
      state.tweets.nextToken = action.payload.nextToken;
    }
  }
});

export default otherProfile.reducer;
export const { setOtherTwitterProfile, setOtherTimeLine } =
  otherProfile.actions;
