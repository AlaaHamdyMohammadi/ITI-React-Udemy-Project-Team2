import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import './../CourseDetials.css'
export default function Requirements({ course }) {
  var requirementArray = course.requirements;
  console.log(requirementArray);
  return (
    <>
      {/* <div>
      
<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Requirements</h2>
<ul className="max-w-md  list-disc space-y-1 text-gray-500 l list-inside dark:text-gray-400">
    <li>
        At least 10 characters (and up to 100 characters)
    </li>
  
</ul>
  
    </div> */}

      <div className="m-10 ml-0 p-3 ">
        <div className="text-2xl font-extrabold">Requirements</div>
       
          <ul className=" list1 grid grid-cols-2   text-left text-black-200 dark:text-black-100">
            {requirementArray.map((item) => (
              <li key={item.id} className="flex items-center space-x-3 ">
                {/* <BsCircleFill className='text-sm'/> */}
                {item.state}
                {/* <div className="p-1"> {item.state}</div> */}
              </li>
            ))}
          </ul>
     
      </div>
    </>
  );
}
