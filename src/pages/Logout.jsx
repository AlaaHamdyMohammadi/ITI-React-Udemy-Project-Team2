/* eslint-disable no-unused-vars */
import { BsCheckCircleFill } from 'react-icons/bs';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

function Logout() {

  return (
    <>
      <div className="m-4">
        <div style={{ backgroundColor: '#acd2cc' }} className=" p-3">
          <BsCheckCircleFill className="inline text-2xl" />
          <span className="ml-3 font-bold">
            You’ve successfully logged out of Udemy. Come back soon!
          </span>
        </div>
        <div className="relative mt-4">
          <img className="w-100" src="./../../public/images/logoutImg.jpg" />
          <div className="absolute left-16 top-44">
            <div className="flex items-center">
              <img
                className="w-32"
                src="./../../public/images/homePage/udemy-logo.png"
              />
              <span className=" text-4xl text-purple-500">business</span>
            </div>
            <p className="mb-4 w-96 text-xl">
              Your company can give you access to our top 22,000+ business and
              tech courses.
            </p>
            <NavLink
              to="/udemy-business"
              className="border-1 bg-slate-900 p-3  font-bold text-white  no-underline hover:bg-slate-800"
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
