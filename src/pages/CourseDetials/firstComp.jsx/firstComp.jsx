import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getCourse } from '../../../services/Detials';
import { BiSolidCalendarExclamation } from 'react-icons/bi';
import './firstComp.css';
import AboveList from './aboveComp/aboveComp';
// export  const loadercourse= async()=>{
//     var res=await getCourse()
//     return res.data.data.document
//     // console.log(res.data.data.document);
//    }
export default function FirstComp({ course }) {
  // const Course=useLoaderData()

  return (
    <>
      <div className=" relative bg-zinc-700  p-12 text-white ">
        <div className="grid grid-cols-3 container  ">
          <div className="col-span-2 ">
            <div className=" styling ">
              <div>{course.title}</div>
            </div>

            <div className="text-xl">{course.subTitle}</div>
            <div className="text-sm	">
              <span className="flex  ">
                <span className="custom flex items-center font-bold text-yellow-500">
                <div className="update mt-0 pr-1">
                        <span className="bestseller p-1">Best Seller</span>
                      </div>
                  {course.rating}

                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>

                <span className="p-2 ">
                  
                  <a className="text-slate-300" href="#">
                    ({course.NumRating} ratings)
                  </a>
                </span>
                <span className="p-2">{course.NumStd} students</span>
              </span>
              <span>
                Created by
                <a className="text-slate-300 pr-1" href="#">
                  {course.instructor}
                </a>
              </span>
              <div>
                <span className="flex p-2">
                
                  <span className="pr-2 ">
                    <BiSolidCalendarExclamation />
                  </span>
                  Last updated {course.updated}
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-1 absolute  right-20 top-20">
          <AboveList   course={course} />

          </div>
        </div>
      </div>
    </>
  );
}
