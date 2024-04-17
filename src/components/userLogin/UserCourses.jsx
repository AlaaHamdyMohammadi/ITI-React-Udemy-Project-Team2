/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom"
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { authentication } from "../../contextConfig/authentication";
import { getMe } from "../../services/authentication";

function UserCourses() {
    const [isActive, setIsActive] = useState(true);
    const { user, setUser } = useContext(authentication);
    useEffect(() => {
      getMe()
        .then((res) => {
          const user = res.data.data.document.username.split(' ');
          setUser(user);
        })
        .catch((err) => {
          console.error('Error fetching user data:', err);
          throw err;
        });
    }, [setUser]);
    return (
      <>
        <div className="m-5 flex justify-between">
          <h1>Let's start learning, {user}</h1>
          <NavLink
            to="/my-learning"
            className="font-bold text-violet-800 hover:text-violet-900"
          >
            My learning
          </NavLink>
        </div>
        {isActive && (
          <div
            style={{ backgroundColor: '#2d2f31' }}
            className="m-5 flex flex-col items-center  justify-between p-3 text-white lg:flex-row"
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
              <button
                onClick={() => setIsActive(false)}
                className="border-1 m-1.5 border-white p-2 text-sm font-bold hover:bg-gray-700"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
      </>
    );
}

export default UserCourses
