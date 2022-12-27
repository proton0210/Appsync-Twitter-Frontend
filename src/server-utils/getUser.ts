import { Auth } from 'aws-amplify';
export const getUser = async () => {
  const user = await Auth.currentUserInfo();
  console.log(user);
  return user;
};
