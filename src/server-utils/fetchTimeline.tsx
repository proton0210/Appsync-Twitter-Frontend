import { getMyTimeline } from '../lib/backend';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setTimeLine } from '../store';
const fetchTimeline = async (limit: number = 5) => {
  return await getMyTimeline(limit);
};

export const useTimeline = (limit: number = 5) => {
  const dispatch = useDispatch();
  return useQuery('fetchTimeline', () => fetchTimeline(limit), {
    onSuccess: (data) => {
      dispatch(setTimeLine(data));
    }
  });
};
