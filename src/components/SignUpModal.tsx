import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { login, setSignUpStep } from '../store';
import SignIn from '../server-utils/SignIn';
import { SocialIcon } from 'react-social-icons';

interface Props {
  onSignUpClose: () => void;
}
export default function SignUpModal({ onSignUpClose }: Props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');
  const { signUpStep } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEscape = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e);
    if (e.code === 'Escape') {
      onSignUpClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = SignIn(email, password);
      dispatch(login(user));
      navigate('/home');
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center ">
        <div
          className="absolute w-full h-full bg-gray-900 opacity-50"
          onClick={onSignUpClose}
          onKeyDown={handleEscape}
        ></div>
        <div className="modal-main bg-white w-11/12 max-w-md mx-auto rounded-lg z-50 overflow-y-auto place-self-center max-h-full">
          {signUpStep === 1 && (
            <>
              <div className="pl-1 pr-4 py-1 h-12">
                <button
                  className={`rounded-full bg-blue font-bold text-white mt-2 p-1 pl-3 pr-3 relative right-0 float-right hover:bg-darkblue  + ${
                    !name || !email || !birthdate
                      ? 'opacity-50 cursor-not-allowed'
                      : 'opacity-100 cursor-pointer'
                  }`}
                  disabled={!name || !email || !birthdate}
                  onClick={() => dispatch(setSignUpStep(2))}
                >
                  Next
                </button>

                <SocialIcon
                  network="twitter"
                  className=" fab fa-twitter text-blue text-2xl "
                />
              </div>
              <div className="pt-5 px-8">
                <form>
                  <div className="flex justify-between items-center pb-8">
                    <p className="text-2xl font-bold">Create your account</p>
                  </div>
                  <div className="w-full bg-lightblue border-b-2 border-dark mb-8 p-2">
                    <label className="text-dark">Name</label>
                    <input
                      className="w-full bg-lightblue text-lg"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="w-full bg-lightblue border-b-2 border-dark mb-8 p-2">
                    <p className="text-dark">Email</p>
                    <input
                      className="w-full bg-lightblue text-lg"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <p className="font-bold">Date of birth</p>
                  <p className="text-dark">
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                  </p>
                  <div className="w-full bg-lightblue border-b-2 border-dark mb-8 p-2">
                    <input
                      className="w-full bg-lightblue text-lg"
                      type="text"
                      value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
