import { createSlice } from '@reduxjs/toolkit';

const twitterProfile = createSlice({
  name: 'twitter',
  initialState: {
    profile: {
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
    tweets: {
      tweet: '',
      tweets: [''],
      nextToken: ''
    }
  },
  reducers: {
    setTwitterProfile: (state, action) => {
      state.profile.id = action.payload.id;
      state.profile.name = action.payload.name;
      state.profile.screenName = action.payload.screenName;
      state.profile.imageUrl = action.payload.imageUrl;
      state.profile.backgroundImageUrl = action.payload.backgroundImageUrl;
      state.profile.bio = action.payload.bio;
      state.profile.location = action.payload.location;
      state.profile.website = action.payload.website;
      state.profile.birthdate = action.payload.birthdate;
      state.profile.createdAt = action.payload.createdAt;
      state.profile.followersCount = action.payload.followersCount;
      state.profile.followingCount = action.payload.followingCount;
      state.profile.tweetsCount = action.payload.tweetsCount;
      state.profile.likesCounts = action.payload.likesCounts;
    },
    setTweets: (state, action) => {
      state.tweets.tweets = action.payload;
    },
    createTweet: (state, action) => {
      state.tweets.tweets = [action.payload, ...state.tweets.tweets];
    },
    clearTwitterProfile: (state) => {
      state.profile.id = '';
      state.profile.name = '';
      state.profile.screenName = '';
      state.profile.imageUrl = '';
      state.profile.backgroundImageUrl = '';
      state.profile.bio = '';
      state.profile.location = '';
      state.profile.website = '';
      state.profile.birthdate = '';
      state.profile.createdAt = '';
      state.profile.followersCount = '';
      state.profile.followingCount = '';
      state.profile.tweetsCount = '';
      state.profile.likesCounts = '';
      state.tweets.tweets = [];
      state.tweets.nextToken = '';
    }
  }
});

export default twitterProfile.reducer;
export const {
  setTwitterProfile,
  clearTwitterProfile,
  setTweets,
  createTweet
} = twitterProfile.actions;
