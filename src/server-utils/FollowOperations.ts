import { follow, unfollow } from '../lib/backend';

export const followUser = async (userId: string) => {
  try {
    const response = await follow(userId);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const unfollowUser = async (userId: string) => {
  const response = await unfollow(userId);
  return response;
};
