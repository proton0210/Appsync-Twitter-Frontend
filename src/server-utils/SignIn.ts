import { Auth } from 'aws-amplify';

import { getMyProfile, getMyTimeline, tweet } from '../lib/backend';

export const handleSignIn = async (
  email: string,
  password: string,
  limit: number = 10
) => {
  try {
    const user = await Auth.signIn(email, password);
    const profile = await getMyProfile();
    const timeline = await getMyTimeline(limit);

    return { user, profile, timeline };
  } catch (error: any) {
    return error.message;
  }
};
