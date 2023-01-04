import { getMyTimeline } from '../lib/backend';
import { useQuery } from 'react-query';

const fetchTimeline = async (limit: number = 10) => {
  return await getMyTimeline(limit);
};

export const useTimeline = (limit: number = 10) => {
  return useQuery('fetchTimeline', () => fetchTimeline(limit));
};
