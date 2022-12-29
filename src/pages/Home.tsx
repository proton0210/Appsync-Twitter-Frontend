import React from 'react';
import { useNavigate } from 'react-router-dom';

import SideNav from '../components/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faFilm,
  faChartBar,
  faSmile
} from '@fortawesome/free-solid-svg-icons';
type Tweet = {
  text: string;
};
const Home = () => {
  let navigate = useNavigate();
  const [tweet, setTweet] = React.useState<Tweet>({ text: '' });
  const [tweets, setTweets] = React.useState<Tweet[]>([]);

  return (
    <>
      <div id="app" className="flex container h-screen w-full">
        {/* <!-- side navigation --> */}
        <SideNav />

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
                  src={require('../assets/default.png')}
                  className="flex-none w-12 h-12 rounded-full"
                />
              </div>
              <form className="w-full relative">
                <textarea
                  value={tweet.text}
                  onChange={(e) => setTweet({ text: e.target.value })}
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
                  type="button"
                  className={`h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue rounded-full absolute bottom-0 right-0 " +
            ${tweet.text ? '' : ' opacity-50 cursor-not-allowed'}`}
                >
                  Tweet
                </button>
              </form>
            </div>
            {/* Time Line */}
            {tweets.length === 0 && (
              <div
                v-if="tweets.length === 0"
                className="flex flex-col items-center justify-center w-full pt-10 px-6"
              >
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
          </div>
        </div>

        {/* <!-- default right bar --> */}
        <div className="hidden md:block w-1/3 h-full border-l border-lighter px-6 py-2 overflow-y-scroll relative">
          Right Bar
        </div>
      </div>
    </>
  );
};

export default Home;
