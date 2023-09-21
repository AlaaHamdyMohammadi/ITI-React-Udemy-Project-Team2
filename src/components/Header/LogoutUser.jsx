/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { BsSearch, BsCart3, BsGlobe, BsBell } from 'react-icons/bs';

function LogoutUser({ setTON, onTeachOnUdemy }) {
  return (
    <div className="d-flex ms-3 ">
      <div
        className="ms-3 mt-3"
        onMouseOver={() => {
          setTON(true);
        }}
        onMouseLeave={() => {
          setTON(false);
        }}
      >
        <div className="base text-decoration-none ">
          <NavLink
            className="text-sm text-gray-950 no-underline hover:text-violet-600"
            to="/teach-on-udemy"
          >
            Teach On Udemy
          </NavLink>
          {onTeachOnUdemy ? (
            <div
              onMouseOver={() => {
                setTON(true);
              }}
              onMouseLeave={() => {
                setTON(false);
              }}
              className="subDiv fw-bold w-72 bg-white p-3 text-center text-sm"
            >
              Get your team access to over 22,000 top Udemy courses, anytime,
              anywhere.
              <NavLink
                className="btn rounded-0 m-lg-3 col-8 text-decoration-none m-1 w-96 bg-black p-2 text-sm text-white"
                to="/teach-on-udemy"
              >
                Learn More
              </NavLink>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="align-self-center mb-1 ms-2">
        <NavLink
          className="text-xl font-bold text-gray-950 hover:text-violet-600"
          to="/cart"
        >
          <BsCart3  />
        </NavLink>
      </div>

      <div className="ms-2 mt-3">
        <NavLink
          className="border-1 rounded-none border-black p-2 text-sm font-bold text-gray-950 no-underline hover:bg-gray-200"
          to="/login"
        >
          Log In
        </NavLink>
      </div>

      <div className="ms-2 mt-3">
        <NavLink
          className="border-1 rounded-none border-black bg-gray-950 p-2 text-sm font-bold text-white no-underline hover:bg-gray-700"
          to="/signup"
        >
          Sign Up
        </NavLink>
      </div>

      <div className="ms-2 mt-2.5 ">
        <h1 className="border-1 rounded-none border-black p-2 text-sm font-bold text-gray-950 no-underline hover:bg-gray-200">
          <BsGlobe className="text-lg" />
        </h1>
      </div>
    </div>
  );
}

export default LogoutUser
