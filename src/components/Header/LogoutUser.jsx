/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { BsSearch, BsCart3, BsGlobe, BsBell } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import LanguageOption from "../language-dropdown";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function LogoutUser({ setTON, onTeachOnUdemy }) {
  const [onCart, setUB] = useState(false);
   const cartItems = useSelector((state) => state.cartItems.cartItems);
     const counter = useSelector((state) =>
       state.cartItems.cartItems ? state.cartItems.cartItems.length : 0,
     );

   const TotalPrice = useSelector((state) => state.TotalCost.TotalCost);

   const { t } = useTranslation();

   const handleClick = (e) => {
     i18next.changeLanguage(e.target.value);
   };

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

      <div
        className="mr-3 ms-3 mt-3"
        onMouseOver={() => {
          setUB(true);
        }}
        onMouseLeave={() => {
          setUB(false);
        }}
      >
        <div className="base text-decoration-none text-dark">
          <NavLink
            className="text-xl font-bold text-gray-950 hover:text-violet-600"
            to="/cart"
          >
            <div className="relative">
              {counter > 0 ? (
                <span className="absolute bottom-3 left-3 z-10 h-4 w-5 rounded-full bg-violet-600 pl-1.5 text-sm text-white">
                  {counter}
                </span>
              ) : (
                ''
              )}
              <BsCart3 />
            </div>
          </NavLink>
          {onCart ? (
            <div
              onMouseOver={() => {
                setUB(true);
              }}
              onMouseLeave={() => {
                setUB(false);
              }}
              className="subDiv fw-bold bg-white  p-3 text-center shadow-md "
            >
              {cartItems.map((item) => {
                return (
                  <>
                    <NavLink
                      key={item._id}
                      to={'/CourseDetials/' + item._id}
                      className="text-decoration-none text-reset"
                    >
                      <li className="mb-2">
                        <div className="d-flex justify-between">
                          <div className="me-2">
                            <img
                              className=""
                              style={{ width: '200px', height: '70px' }}
                              src={`http://localhost:4000/img/courses/${item.photo}`}
                            />
                          </div>

                          <div className="text-start">
                            <p className="mb-0 text-sm">{item.title}</p>
                            <span className="fw-light text-sm">
                              Course By: {item.instructor}
                            </span>
                            <p className="mb-0 text-sm">
                              E$
                              {item.DiscountPrice
                                ? item.DiscountPrice
                                : item.price}
                            </p>
                          </div>
                        </div>
                      </li>
                    </NavLink>
                    <hr />
                  </>
                );
              })}
              <h4 className="text-sm">Total E$:{Math.round(TotalPrice)}</h4>
              <NavLink
                className="btn rounded-0 m-lg-3 col-8 text-decoration-none m-1 w-full bg-black p-2 text-sm text-white"
                to="/cart"
              >
                Go to Cart
              </NavLink>
            </div>
          ) : (
            ''
          )}
        </div>
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
          <LanguageOption onChange={(e) => handleClick(e)} />
        </h1>
      </div>
    </div>
  );
}



export default LogoutUser
