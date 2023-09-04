/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import Button from './../components/Button';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

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
        <input
          type="text"
          placeholder="Full name"
          className="border-1 my-1 w-80 border-solid border-black p-3 placeholder:font-bold placeholder:text-stone-950"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-1 my-1 w-80 border-solid border-black p-3 placeholder:font-bold placeholder:text-stone-950"
        />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="border-1 my-1 w-80 border-solid border-black p-3 placeholder:font-bold placeholder:text-stone-950"
        />
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
        <input
          type={showPasswordConfirm ? 'text' : 'password'}
          placeholder="Confirm Password"
          className="border-1 my-1 w-80 border-solid border-black p-3 placeholder:font-bold placeholder:text-stone-950"
        />
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
