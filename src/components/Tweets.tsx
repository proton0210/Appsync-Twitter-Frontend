import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from './Tweet';

function Tweets() {
  const { tweets } = useSelector((state: any) => state.timeLine);
  return (
    <div>
      {tweets.map((tweet: any) => (
        <Tweet tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
}

export default Tweets;
