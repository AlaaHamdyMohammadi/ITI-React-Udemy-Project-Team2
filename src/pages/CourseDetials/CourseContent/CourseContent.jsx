/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './CourseContent.css';
export default function CourseContent({ course }) {
  const ContentSection = course.ContentSection;
  return (
    <>
      <div className="">
        <div className="text-2xl font-extrabold">Course content</div>
        <div
          htmlFor="countries"
          className=" m-2  grid grid-cols-3  text-sm font-medium text-gray-600 dark:text-white"
        >
          <span className="col-span-2">
            <span className="p-1">{course.sections} sections</span>
            <span className="p-1">{course.lectures} lectures</span>
            <span className="p-1">{course.duration} total length</span>
          </span>

          <span className="col-span-1 text-end" href="#">
            <a href="#" className="font-bold text-violet-800 no-underline 	">
              Expand all sections
            </a>
          </span>
        </div>

        {ContentSection.map((item) => (
          <div
            key={item.header}
            className="  border border-gray-400 bg-gray-100 p-3"
          >
            <details className="group">
              <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-bold">
                <span className=" transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
                <span className="col-span-7"> {item.header}</span>
                <span className=" col-span-4 pr-0 text-end  text-sm font-thin text-gray-500">
                  <span>
                    <span className="p-1">{item.lecturesNum} lectures</span>
                    <span className="p-1">{item.time} h</span>
                  </span>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                We offers a 30-day money-back guarantee for most of its
                subscription plans. If you are not satisfied with your
                subscription within the first 30 days, you can request a full
                refund. Refunds for subscriptions that have been active for
                longer than 30 days may be considered on a case-by-case basis.
              </p>
            </details>
          </div>
        ))}

        <div className="my-2">
          <button
            type="button"
            className=" checkout11 w-100 mb-3 border border-black  bg-white py-2 font-bold text-gray-700 hover:bg-gray-700  "
          >
            more sections
          </button>
        </div>
      </div>
    </>
  );
}
