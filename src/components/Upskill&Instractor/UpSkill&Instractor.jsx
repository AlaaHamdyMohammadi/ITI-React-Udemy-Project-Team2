/* eslint-disable no-unused-vars */
import React from 'react';

// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Typography,
//     Button,
//   } from "@material-tailwind/react";

export default function UpSkillInstractor() {
  return (
    <>
      <div className="skills m-5 flex items-center  ">
        <div className="col-lg-6 col-md-12">
          <a className="navbar-brand fs-3 mt-3" href="./index.html">
            <img
              src="./../../../public/images/homePage/udemy-logo.png"
              alt=""
              width="110"
              height="50"
            />
            <span className="icon">business</span>
          </a>
          <h2>Upskill your team with Udemy Business</h2>
          <ul>
            <li>
              Unlimited access to 22,000+ top Udemy courses, anytime, anywhere
            </li>
            <li>International course collection in 14 languages</li>
            <li>Top certifications in tech and business</li>
          </ul>
          <button className="bg-dark fw-bold p-2 text-white">
            Get Udemy Business
          </button>
          <button className="text-dark fw-bold bg-white p-2">Learn more</button>
        </div>
        <div className="col-lg-6 col-md-12 mt-md-4">
          <img
            className="w-75"
            src="./../../../public/images/homePage/student.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="instructor row align-items-center  m-5">
        <div className="col-lg-6 col-md-12">
          <img
            style={{ width: '400px' }}
            src="./../../../public/images/homePage/person.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-12 mt-md-4">
          <h2 className="text-dark">Become an instructor</h2>
          <p className="fs-4 w-75">
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button className="bg-dark fw-bold p-2 text-white">
            Start teaching today
          </button>
        </div>
      </div>
    </>
  );
}
