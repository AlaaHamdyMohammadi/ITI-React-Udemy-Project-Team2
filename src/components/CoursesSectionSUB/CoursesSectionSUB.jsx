/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ShowCourses from './ShowCourses/ShowCourses';
import SideBar from './SideBar/SideBar';
import StaticSection from './ShowCourses/staticSection/staticSection';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';


export default function CoursesSectionSUB({coursesSUB,id}) {
    const Filtered = useSelector(
      (state) => state.SubRatingFilteredCourses.SubRatingFilteredCourses,
    );


  // console.log(coursesSUB);
  return (
    <>
      <div className="border-1 m-3 border-gray-300 p-3">
        <AiFillExclamationCircle className="inline text-4xl" />
        <span className="text-md pl-3 font-bold">
          Your learning languages are set to English and Arabic.
        </span>
      </div>
      <div className="m-3 grid grid-cols-8 ">
        {/* side Bar */}
        <div className="col-span-2">
          <SideBar coursesSUB={coursesSUB} id={id} />
        </div>
        {/* show courses */}

        <div className="col-span-6">
          <ShowCourses
            coursesSUB={Filtered.length != 0 ? Filtered : coursesSUB}
          />
          <StaticSection />
          <ShowCourses
            coursesSUB={Filtered.length != 0 ? Filtered : coursesSUB}
          />
        </div>
      </div>
    </>
  );
}
