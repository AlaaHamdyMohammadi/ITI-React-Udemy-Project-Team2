/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import ShowCourses from './ShowCourses/ShowCourses';
import SideBar from './SideBar/SideBar';
import StaticSection from '../CoursesSectionSUB/ShowCourses/staticSection/staticSection';
import { useSelector } from 'react-redux';

export default function CoursesSection({subCategories,coursesSUB,id}) {
    const Filtered = useSelector(
      (state) => state.CatRatingFilteredCourses.CatRatingFilteredCourses,
    );
  return (
    <>
      <div className="d-flex m-3">
        {/* side Bar */}
        <div className="">
          <SideBar
            subCategories={subCategories}
            coursesSUB={coursesSUB}
            id={id}
          />
        </div>
        {/* show courses */}
        <div className="">
          <ShowCourses
            coursesSUB={Filtered.length != 0 ? Filtered : coursesSUB}
            id={id}
          />

          <StaticSection />
          <ShowCourses coursesSUB={(Filtered.length!=0)?Filtered:coursesSUB} id={id}/>
        </div>
      </div>
    </>
  );
}
