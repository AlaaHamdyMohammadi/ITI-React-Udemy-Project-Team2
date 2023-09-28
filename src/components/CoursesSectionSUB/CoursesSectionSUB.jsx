import React, { useEffect, useState } from 'react';
import ShowCourses from './ShowCourses/ShowCourses';
import SideBar from './SideBar/SideBar';
import axiosInstance from '../../axiosConfig/instance';
import StaticSection from './ShowCourses/staticSection/staticSection';
import { AiFillExclamationCircle } from 'react-icons/ai';


export default function CoursesSectionSUB({coursesSUB,id}) {


  // console.log(coursesSUB);
  return (
    <>

<div className="border-1 border-gray-300 m-3 p-3">
          <AiFillExclamationCircle className="inline text-4xl" />
          <span className="text-md pl-3 font-bold">
          Your learning languages are set to English and Arabic.
          </span>
        </div>
    <div className="m-3 grid grid-cols-8 ">


      
        {/* side Bar */}
        <div className='col-span-2'>
        <SideBar coursesSUB={coursesSUB} id={id}/>

        </div>
        {/* show courses */}
    
        <div className='col-span-6'>
       
   <ShowCourses coursesSUB={coursesSUB} />
   <StaticSection/>
   <ShowCourses coursesSUB={coursesSUB} />

        </div>
                 
                    </div>
    </>
  );
}
