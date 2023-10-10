/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import ShowCourses from './ShowCourses/ShowCourses';
import SideBar from './SideBar/SideBar';
import axiosInstance from '../../axiosConfig/instance';
import StaticSection from '../CoursesSectionSUB/ShowCourses/staticSection/staticSection';

//grid grid-cols-8 
//<div className='col-span-2'>
//<div className='col-span-6'>

export default function CoursesSection({subCategories,coursesSUB,id}) {
  // console.log(coursesSUB);
  return (
    <>
    <div className="m-3 d-flex">
        {/* side Bar */}
        <div className=''>
        <SideBar subCategories={subCategories} coursesSUB={coursesSUB} id={id}/>

        </div>
        {/* show courses */}
        <div className=''>
       
   <ShowCourses coursesSUB={coursesSUB} id={id}/>
   <StaticSection/>
   <ShowCourses coursesSUB={coursesSUB} id={id}/>

        </div>
                 
                    </div>
    </>
  );
}
