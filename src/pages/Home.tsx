import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const getUser = async () => {
  const user = await Auth.currentUserInfo();
  return user;
};

const Home = () => {
  let navigate = useNavigate();
  let user = null;

  React.useEffect(() => {
    console.log('running');
    user = getUser();
    console.log(user);
  }, [user]);
  return (
    <>
      {!user && navigate('/login')}
      <p>Home</p>
    </>
  );
};

export default Home;
