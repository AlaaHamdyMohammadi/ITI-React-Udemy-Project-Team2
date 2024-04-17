/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Description({ course }) {
  const [showMore, setShowMore] = useState(false);
  const text = course.description;
  //console.log(course.description);
  return (
    <>
      <div className=" ml-0  ">
        <div className="text-2xl font-extrabold">Description</div>
        <div>
          {showMore ? text : `${text.substring(0, 500)}`}
          <button
            className=" font-bold text-violet-800"
            onClick={() => setShowMore(!showMore)}
          >
            <span className="flex flex-row font-bold">
              <span>{showMore ? 'Show less' : 'Show more'}</span>
              <span className=" pt-1 transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="20"
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
            </span>
          </button>
        </div>
        <h6></h6>
      </div>
    </>
  );
}
