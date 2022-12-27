import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { getUser } from '../server-utils/getUser';

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <p>Home</p>
    </>
  );
};

export default Home;
