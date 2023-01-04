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
  reducers: {
    setTwitterProfile: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.screenName = action.payload.screenName;
      state.imageUrl = action.payload.imageUrl;
      state.backgroundImageUrl = action.payload.backgroundImageUrl;
      state.bio = action.payload.bio;
      state.location = action.payload.location;
      state.website = action.payload.website;
      state.birthdate = action.payload.birthdate;
      state.createdAt = action.payload.createdAt;
      state.followersCount = action.payload.followersCount;
      state.followingCount = action.payload.followingCount;
      state.tweetsCount = action.payload.tweetsCount;
      state.likesCounts = action.payload.likesCounts;
    }
  }
});

export default twitterProfile.reducer;
export const { setTwitterProfile} = twitterProfile.actions;
