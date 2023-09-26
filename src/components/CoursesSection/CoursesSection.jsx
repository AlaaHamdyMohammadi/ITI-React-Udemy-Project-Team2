import React from 'react';
import ShowCourses from './ShowCourses/ShowCourses';
import SideBar from './SideBar/SideBar';


export default function CoursesSection({coursesSUB,id}) {
  console.log(coursesSUB);
  return (
    <>
    <div className="m-3 grid grid-cols-8 ">
        {/* side Bar */}
        <div className='col-span-2'>
        <SideBar coursesSUB={coursesSUB} id={id}/>

        </div>
        {/* show courses */}
        <div className='col-span-6'>
       
   <ShowCourses coursesSUB={coursesSUB}/>
        </div>
                 
                    </div>
    </>
  );
}
