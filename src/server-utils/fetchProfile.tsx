import { getMyProfile } from '../lib/backend';
import { useQuery } from 'react-query';

const fetchProfile = async () => {
  return await getMyProfile();
};

export const useProfile = () => {
  return useQuery('fetchProfile', () => fetchProfile());
};
