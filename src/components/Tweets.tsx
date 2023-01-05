import React from 'react';
import { useSelector } from 'react-redux';
import Retweet from './Retweet';
import Tweet from './Tweet';

function Tweets() {
  const { tweets } = useSelector((state: any) => state.timeLine);
  return (
    <div>
      {tweets.map((tweet: any) => {
        if (!tweet.retweetOf) return <Tweet tweet={tweet} key={tweet.id} />;
        if (tweet.retweetOf) return <Retweet tweet={tweet} key={tweet.id} />;
      })}
    </div>
  );
}

export default Tweets;
