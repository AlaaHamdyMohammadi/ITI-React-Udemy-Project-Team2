import React, { useEffect, useState } from 'react';
import ShowCourses from './ShowCourses/ShowCourses';
import SideBar from './SideBar/SideBar';
import axiosInstance from '../../axiosConfig/instance';
import StaticSection from '../CoursesSectionSUB/ShowCourses/staticSection/staticSection';


export default function CoursesSection({subCategories,coursesSUB,id}) {


  // console.log(coursesSUB);
  return (
    <>
    <div className="m-3 grid grid-cols-8 ">
        {/* side Bar */}
        <div className='col-span-2'>
        <SideBar subCategories={subCategories} coursesSUB={coursesSUB} id={id}/>

        </div>
        {/* show courses */}
        <div className='col-span-6'>
       
   <ShowCourses coursesSUB={coursesSUB} id={id}/>
   <StaticSection/>
   <ShowCourses coursesSUB={coursesSUB} id={id}/>

        </div>
                 
                    </div>
    </>
  );
}
