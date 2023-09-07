/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import Button from './../components/Button';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import './LoginAndSignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [showPasswordConfirm, setshowPasswordConfirm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/');
  }
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex h-screen flex-col items-center justify-center"
      >
        <label className="mr-32 font-bold">Sign up and start learning</label>
        <div className="relative mb-3">
          <input
            type="text"
            placeholder=""
            id="username"
            className="textbox border-1 my-1 w-80 border-solid border-black p-3 "
          />
          <label
            htmlFor="username"
            className="form-label absolute left-4 top-5 cursor-text font-bold transition-all"
          >
            Full name
          </label>
        </div>
        <div className="relative mb-3">
          <input
            type="email"
            id="email"
            placeholder=""
            className="textbox border-1 my-1 w-80 border-solid border-black p-3 "
          />
          <label
            htmlFor="email"
            className="form-label absolute left-4 top-5 cursor-text font-bold transition-all"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder=""
            className="textbox border-1 my-1 w-80 border-solid border-black p-3 "
          />
          <label
            htmlFor="password"
            className="form-label absolute left-4 top-5 cursor-text font-bold transition-all"
          >
            Password
          </label>
        </div>
        {showPassword ? (
          <AiFillEye
            onClick={() => setshowPassword(!showPassword)}
            className="relative bottom-10 left-36 text-xl"
          />
        ) : (
          <AiFillEyeInvisible
            onClick={() => setshowPassword(!showPassword)}
            className="relative bottom-10 left-36 text-xl"
          />
        )}
        <div className="relative">
          <input
            type={showPasswordConfirm ? 'text' : 'password'}
            placeholder=""
            id="confirmPassword"
            className="textbox border-1 my-1 w-80 border-solid border-black p-3"
          />
          <label
            htmlFor="confirmPassword"
            className="form-label absolute left-4 top-5 cursor-text font-bold transition-all"
          >
            Confirm Password
          </label>
        </div>
        {showPasswordConfirm ? (
          <AiFillEye
            onClick={() => setshowPasswordConfirm(!showPasswordConfirm)}
            className="relative bottom-10 left-36 text-xl"
          />
        ) : (
          <AiFillEyeInvisible
            onClick={() => setshowPasswordConfirm(!showPasswordConfirm)}
            className="relative bottom-10 left-36 text-xl"
          />
        )}
        <div className="w-80 text-left">
          <input type="checkbox" className="border-none" />
          <span className="w-80 pl-2">
            Send me special offers, personalized recommendations, and learning
            tips.
          </span>
        </div>
        <Button width="w-80" backgroundColor="bg-violet-600" text="text-white">
          Sign Up
        </Button>
        <p className="border-b-2 p-2.5 text-xs">
          By signing up, you agree to our <u>Terms of Use</u> and
          <u>Privacy Policy.</u>
        </p>
        <p className="text-sm">
          Already have an account?
          <a
            href=""
            onClick={() => navigate('/login')}
            className="font-bold text-violet-600"
          >
            Log in
          </a>
        </p>
      </form>
    </>
  );
}

export default SignUp;
