import React from 'react';
import { useNavigate } from 'react-router';
import { SocialIcon } from 'react-social-icons';
import SignUpModal from '../components/SignUpModal';
import { useDispatch } from 'react-redux';
import { setSignUpStep } from '../store';
import { useSelector } from 'react-redux';
import { Auth } from 'aws-amplify';
const Root = () => {
  const [showSignUpModal, setShowSignUpModal] = React.useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSignUpClick = () => {
    setShowSignUpModal(true);
    dispatch(setSignUpStep(1));
  };
  const onSignUpClose = () => {
    setShowSignUpModal(false);
    dispatch(setSignUpStep(0));
  };

 

  return (
    <div className="flex w-full h-screen">
      {/* Left Side */}
      <div className="flex w-1/2 h-full bg-blue">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col">
            <div className="flex items-center align-baseline  mt-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-3 text-white text-2xl inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <p className="text-white font-bold text-xl inline">
                Follow your interests
              </p>
            </div>
            <div className="flex items-center align-baseline mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white text-2xl inline-block mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <p className="text-white font-bold text-xl">
                Hear What people are talking about
              </p>
            </div>
            <div className="flex items-center align-baseline mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-3 text-white text-2xl inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <p className="text-white font-bold text-xl">
                Join the conversation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 h-full bg-white">
        <div className="flex w-1/2 h-full mx-auto">
          <div className="flex flex-col w-1/2 font-bold justify-center">
            <SocialIcon network="twitter" />
            <p className="text-3xl mt-2 mb-9">
              See what's happening around the world right now
            </p>
            <p> Join Twitter Today</p>
            <button
              className="bg-blue text-white font-bold py-2 px-4 text-xl hover:bg-darkblue mt-5 rounded-full"
              onClick={onSignUpClick}
            >
              Sign Up
            </button>
            <button
              className="rounded-full border border-blue py-2 px-4 bg-white font-bold text-lg text-blue mt-4 p-3 hover:bg-lightblue"
              onClick={() => {
                navigate('/login');
              }}
            >
              Log In
            </button>
          </div>
        </div>
      </div>

      {showSignUpModal && <SignUpModal onSignUpClose={onSignUpClose} />}
    </div>
  );
};

export default Root;
