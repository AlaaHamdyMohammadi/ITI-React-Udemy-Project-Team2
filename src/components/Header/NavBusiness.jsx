/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function NavBusiness({ setUB, onUdemyBusiness }) {
  return (
    <div
      className="ms-2 mt-3"
      onMouseOver={() => {
        setUB(true);
      }}
      onMouseLeave={() => {
        setUB(false);
      }}
    >
      <div className="base ms-3 text-decoration-none text-dark">
        <NavLink
          className="text-sm text-gray-950 no-underline hover:text-violet-600 "
          to="/udemy-business"
        >
          Udemy Business
        </NavLink>
        {onUdemyBusiness ? (
          <div
            onMouseOver={() => {
              setUB(true);
            }}
            onMouseLeave={() => {
              setUB(false);
            }}
            className="subDiv fw-bold w-72 bg-white p-3  text-center text-sm "
          >
            Get your team access to over 22,000 top Udemy courses, anytime,
            anywhere.
            <NavLink
              className="btn rounded-0 m-lg-3 col-8 text-decoration-none m-1 w-96 bg-black p-2 text-sm text-white"
              to="/udemy-business"
            >
              Try Udemy Business
            </NavLink>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default NavBusiness
