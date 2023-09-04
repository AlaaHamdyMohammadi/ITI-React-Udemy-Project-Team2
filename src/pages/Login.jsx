/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from './../components/Button';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsApple } from 'react-icons/bs';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  function handleSubmit(e){
    e.preventDefault();
    navigate('/');
  }
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex h-screen flex-col items-center justify-center"
      >
        <label className="mr-40 font-bold">Log in to your Udemy account</label>
        <h5 className="border-1 my-1 w-96 border-solid border-black p-1 text-lg font-bold">
          <FcGoogle className="inline p-1 text-4xl" />
          <a
            className="pointer text-black no-underline"
            href="https://www.google.com/"
          >
            Continue with Google
          </a>
        </h5>
        <h5 className="border-1 my-1 w-96 border-solid border-black p-1 text-lg font-bold">
          <BsFacebook className="inline p-1 text-4xl text-sky-600" />
          <a
            className="pointer text-black no-underline"
            href="https://www.facebook.com/"
          >
            Continue with Facebook
          </a>
        </h5>
        <h5 className="border-1 my-1 w-96 border-solid border-black p-1 text-lg font-bold">
          <BsApple className="inline p-1 text-4xl" />
          <a
            className="pointer text-black no-underline"
            href="https://www.icloud.com/"
          >
            Continue with Apple
          </a>
        </h5>
        <input
          type="email"
          placeholder="Email"
          className="border-1 my-1 w-96 border-solid border-black p-3 placeholder:font-bold placeholder:text-stone-950"
        />
        <input
          type={show ? 'text' : 'password'}
          placeholder="Password"
          className="border-1 my-1 w-96 border-solid border-black p-3 placeholder:font-bold placeholder:text-stone-950"
        />
        {show ? (
          <AiFillEye
            onClick={() => setShow(!show)}
            className="relative bottom-10 left-44 text-xl"
          />
        ) : (
          <AiFillEyeInvisible
            onClick={() => setShow(!show)}
            className="relative bottom-10 left-44 text-xl"
          />
        )}

        <Button width="w-96" backgroundColor="bg-violet-600" text="text-white">
          Log in
        </Button>
        <p className="w-96 border-b-2 p-2.5 text-center text-lg">
          or
          <a href="" className="font-bold text-violet-600">
            Forget Password
          </a>
        </p>
        <p className="text-sm">
          Don't have an account?
          <a
            href=""
            onClick={() => navigate('/signup')}
            className="font-bold text-violet-600"
          >
            Sign up
          </a>
        </p>
      </form>
    </>
  );
}

export default Login;
