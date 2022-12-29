import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login, logout } from '../store';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // create a ref for email input
  const emailRef = React.useRef<HTMLInputElement>(null);
  // Create a useEffect hook to focus on the email input
  React.useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const user = await Auth.signIn(email, password);
      console.log(user);
      dispatch(login(user));
      navigate('/home');
    } catch (error: any) {
      dispatch(logout());
      alert(error.message);
    }
  };
  return (
    <>
      <div className="w-full mt-5 flex justify-center items-center flex-col p-5 md:p-0">
        <SocialIcon
          network="twitter"
          className="fab fa-twitter text-blue text-4xl mb-8"
        />
        <p className="font-bold text-2xl mb-4">Log in to Twitter</p>
        <div className="w-full md:w-1/3 bg-lightblue border-b-2 border-dark mb-4 p-2">
          <p className="text-dark">Enter Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-lightblue text-lg"
            type="text"
            ref={emailRef}
          />
        </div>
        <div className="w-full md:w-1/3 bg-lightblue border-b-2 border-dark mb-4 p-2">
          <p className="text-dark">Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-lightblue text-lg"
            type="password"
          />
        </div>
        <button
          className="w-full md:w-1/3 font-bold rounded-full bg-blue text-white p-3 pl-3 pr-3 hover:bg-darkblue"
          disabled={email.length === 0 || password.length === 0}
          onClick={handleSignIn}
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default Login;
