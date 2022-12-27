import { Auth } from 'aws-amplify';

export default async function signIn(email: string, password: string) {
  let user;
  try {
    user = await Auth.signIn(email, password);
  } catch (error) {
    console.log('error signing in', error);
  }
  return user;
}
