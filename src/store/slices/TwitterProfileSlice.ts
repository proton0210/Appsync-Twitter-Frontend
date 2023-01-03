import { createSlice } from '@reduxjs/toolkit';

const twitterProfile = createSlice({
  name: 'twitter',
  initialState: {
    id: '',
    name: '',
    screenName: '',
    imageUrl: '',
    backgroundImageUrl: '',
    bio: '',
    location: '',
    website: '',
    birthdate: '',
    createdAt: '',
    followersCount: '',
    followingCount: '',
    tweetsCount: '',
    likesCounts: ''
  },
  reducers: {}
});

export default twitterProfile.reducer;
export const {} = twitterProfile.actions;
