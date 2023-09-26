/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
// import './CartPage.css';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { CiShoppingTag } from 'react-icons/ci';
import axiosInstance from '../../../axiosConfig/instance';
import { BsPersonHeart } from 'react-icons/bs';

import {GrFavorite  } from 'react-icons/gr';

export default function ShowCoursesD() {
  const [courses, setCourses] = useState([]);

  useEffect(function () {
    axiosInstance
      .get('courses/')
      .then((res) => {
        console.log(res.data.data);
        //   console.log(res.data.data.courses);

        const courses = res.data.data.courses.slice(0,6);

        setCourses(courses);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className='my-2'>
    <div className="text-2xl my-2 font-extrabold">     Students also bought</div>
      <div className=" ml-0 ">
   
        <div className="container py-2">
          <div className="row d-flex justify-content-center ">
            {courses.map((item) => (
              <div key={item._id} className="card-body p-2">
                {/* <!-- Single item --> */}
                <div className="grid grid-cols-10">
                  <div className=" col-span-1 ">
                    {/* <!-- Image --> */}
                    <div
                      className="bg-image hover-overlay hover-zoom ripple rounded"
                      data-mdb-ripple-color="light"
                    >
                      {/* <div className='bg-[url(./../../public/images/cart/php.jpeg)]'></div> */}
                      <img
                        src={`http://localhost:4000/img/courses/${item.photo}`}
                        className=" w-full"
                        alt="Blue Jeans Jacket"
                      />
                      {/* <a href="#!">
                                            <div className="mask color" ></div>
                                        </a> */}
                    </div>
                  </div>

                  <div className=" col-span-4 pl-2">
                    {/* <!-- Data --> */}
                    <div className="mb-1">
                      <strong>{item.title}</strong>
                    </div>
                    <span className="update mt-0">
                      <span className="bestseller">{item.BestSeller}</span>
                    </span>
                    <span className="mb-0 pb-1 text-sm/[17px] font-bold text-green-700">
                      {item.duration} total hours
                    </span>
                  </div>

                  <span className="star ">
                    <span className="flex flex-row ">
                      <span>{item.rating}</span>
                      <span className="mt-1 flex flex-row">
                        <AiFillStar />
                      </span>
                    </span>
                  </span>

                  <div className="flex flex-row text-sm text-gray-700">
                    <span className="p-1">
                      <BsPersonHeart />
                    </span>
                    <span> {item.NumStd}</span>
                  </div>
                  <div className="text-end pl-5 font-bold ">E{item.price}</div>
                  <div className="col-span-2  pl-10">
                  <GrFavorite/>
                    </div>



                  {/* <span className="text-sm/[17px]">
                        (23.558.650 ratings)
                      </span> */}
                </div>
                {/* <!-- Single item --> */}

                <hr className="my-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
       
    </>
  );
}
