import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { createTweetUtil } from '../server-utils/createTweetUtil';
import SideNav from '../components/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faFilm,
  faChartBar,
  faSmile,
  faRetweet,
  faHeart,
  faShareSquare,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import RightNav from '../components/RightNav';
import { createTweet, setTweets } from '../store';
import { useSelector, useDispatch } from 'react-redux';
type Tweet = {
  text: string;
};

type Profile = {
  id: 'string';
  createdAt: 'string';
  imageUrl: 'string';
  tweets: {
    tweets: string[];
    nextToken?: string;
  };
};

const Home = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [tweet, setTweet] = React.useState<string>('');
  const [refresh, toggleRefresh] = React.useState<boolean>(false);
  const { user } = useSelector((state: any) => state.auth);
  const twitterProfile = useSelector((state: any) => state.profile);
  const tweets = twitterProfile.tweets.tweets;
  const onTweetSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const data = await createTweetUtil(tweet);
      dispatch(createTweet(data));
      setTweet('');
      toggleRefresh(!refresh);
    } catch (error) {
      console.log('error', error);
    }
  };

  React.useEffect(() => {}, [refresh]);

  return (
    <>
      <div id="app" className="flex container h-screen w-full">
        {/* <!-- side navigation --> */}
        <SideNav
          name={twitterProfile.profile.name}
          screenName={twitterProfile.profile.screenName}
          imageUrl={twitterProfile.profile.imageUrl}
        />

        {/* <!-- tweets --> */}
        <div className="w-full h-full overflow-y-scroll ">
          <div className="w-full h-full overflow-y-scroll">
            <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
              <h1 className="text-xl font-bold">Home</h1>
              <i className="far fa-star text-xl text-blue"></i>
            </div>
            <div className="px-5 py-3 border-b-8 border-lighter flex">
              <div className="flex-none mr-4">
                <img
                  src={
                    user.attributes.imageUrl
                      ? user.attributes.imageUrl
                      : require('../assets/default.png')
                  }
                  className="flex-none w-12 h-12 rounded-full"
                />
              </div>
              <form className="w-full relative" onSubmit={onTweetSubmitHandler}>
                <textarea
                  value={tweet}
                  onChange={(e) => setTweet(e.target.value)}
                  placeholder="What's happening?"
                  className="w-full focus:outline-none mt-3 pb-3"
                ></textarea>
                <div>
                  <FontAwesomeIcon
                    icon={faImage}
                    className="text-blue mr-4 text-lg"
                  />
                  <FontAwesomeIcon
                    icon={faFilm}
                    className="text-blue mr-4 text-lg"
                  />
                  <FontAwesomeIcon
                    icon={faChartBar}
                    className="text-blue mr-4 text-lg"
                  />
                  <FontAwesomeIcon
                    icon={faSmile}
                    className="text-blue mr-4 text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className={`h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue rounded-full absolute bottom-0 right-0 " +
            ${tweet ? '' : ' opacity-50 cursor-not-allowed'}`}
                >
                  Tweet
                </button>
              </form>
            </div>
            {/* Time Line */}
            {tweets.length === 0 && (
              <div className="flex flex-col items-center justify-center w-full pt-10 px-6">
                <p className="font-bold text-lg">Welcome to Twitter!</p>
                <p className="text-sm text-dark text-center">
                  This is the best place to see what’s happening in your world.
                  Find some people and topics to follow now.
                </p>
                <button className="text-white bg-blue rounded-full font-semibold mt-4 px-4 py-2 hover:bg-darkblue">
                  <p className="hidden lg:block">Let's go!</p>
                  <i className="fas fa-plus lg:hidden"></i>
                </button>
              </div>
            )}

            {tweets.map((tweet: any, index: number) => (
              <div className="w-full p-4 border-b hover:bg-lightest flex">
                <div className="flex-none mr-4">
                  <img
                    src={
                      tweet.profile.imageUrl
                        ? tweet.profile.imageUrl
                        : require('../assets/default.png')
                    }
                    className="h-12 w-12 rounded-full flex-none"
                  />
                </div>
                <div className="w-full">
                  <div className="flex items-center w-full">
                    <p className="font-semibold">{tweet.profile.name}</p>
                    <p className="text-sm text-dark ml-2">
                      @{tweet.profile.screenName}
                    </p>
                    <p className="text-sm text-dark ml-2">{tweet.time}</p>
                    <i className="fas fa-angle-down text-sm ml-auto"></i>
                  </div>
                  {tweet.inReplyToUser && (
                    <p className="text-dark">
                      Replying to @{tweet.inReplyToUser.screenName}
                    </p>
                  )}
                  <p className="pb-2">{tweet.text}</p>
                  <div className="flex w-full">
                    <div className="flex items-center text-sm text-dark w-1/4">
                      <button className="mr-2 rounded-full hover:bg-lighter">
                        <FontAwesomeIcon 
                          icon={faComment}
                        ></FontAwesomeIcon>
                      </button>
                      {tweet.replies > 0 && <p> {tweet.replies} </p>}
                    </div>
                    <div className="flex items-center text-sm text-dark w-1/4">
                      <button className="mr-2 rounded-full hover:bg-lighter">
                        <FontAwesomeIcon
                          icon={faRetweet}
                          className={`${
                            tweet.retweeted ? 'text-green-500' : ''
                          }`}
                        ></FontAwesomeIcon>
                      </button>
                      {tweet.retweets > 0 && <p> {tweet.retweets} </p>}
                    </div>
                    <div className="flex items-center text-sm text-dark w-1/4">
                      <button className="mr-2 rounded-full hover:bg-lighter">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="{`${ tweet.liked ? 'text-red-600' : '' }`}"
                        ></FontAwesomeIcon>
                      </button>
                      {tweet.likes > 0 && <p> {tweet.likes} </p>}
                    </div>
                    <div className="flex items-center text-sm text-dark w-1/4">
                      <FontAwesomeIcon
                        icon={faShareSquare}
                        className="mr-3"
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <!-- default right bar --> */}
        <RightNav />
      </div>
    </>
  );
};

export default Home;
