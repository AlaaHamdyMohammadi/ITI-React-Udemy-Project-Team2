/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom"
import Button from "../Button";
import { useState } from "react";

//sm:flex-col  md:flex-col

/* eslint-disable react/no-unescaped-entities */
function UserCourses() {
    const [isActive, setIsActive] = useState(true);
    return (
      <>
        <div className="m-5 flex justify-between">
          <h1>Let's start learning, ..UserName..</h1>
          <NavLink
            to="/my-learning"
            className="font-bold text-violet-800 hover:text-violet-900"
          >
            My learning
          </NavLink>
        </div>
        {isActive && <div
          style={{ backgroundColor: '#2d2f31' }}
          className="m-5 flex flex-col lg:flex-row  items-center justify-between p-3 text-white"
        >
          <h6>
            <strong>Training 5 or more people?</strong>Get your team access to
            Udemy's top 22,000+ courses
          </h6>
          <div>
            <NavLink
              to="/udemy-business"
              className="bg-gray-100 p-2.5 text-sm font-bold text-gray-950 no-underline hover:bg-gray-300"
            >
              Get Udemy Business
            </NavLink>
            <button onClick={() => setIsActive(false)} className="border-white font-bold border-1 m-1.5 p-2 text-sm hover:bg-gray-700">
              Dismiss
            </button>
          </div>
        </div>}
      </>
    );
}

export default UserCourses
