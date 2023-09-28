import React from 'react';
import { BiSquare, BiCircle } from 'react-icons/bi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { BsStarHalf } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../../../axiosConfig/instance';

export default function SideBar({ subCategories, coursesSUB, id }) {
  // const [subCategories, setSubCategories] = useState([]);

  // //`/subCategories/${currentId}/subCategories`
  // useEffect(() => {
  //   axiosInstance
  //     .get(`/categories/${id}/subCategories`)
  //     .then((res) => {
  //       //console.log(res.data.data.subCategories);
  //       setSubCategories(res.data.data.subCategories);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  // var es='kk';
  // const sideBar=[{title:"Rating",inside:`${es}`},{title:"Video Duration"},{title:"Topics"},{title:"SubCategory"},{title:"Level"},
  // {title:"Language"},{title:"Price"},{title:"Subtitle"}]
  return (
    <>
      <div className="pr-5">
        {/* {sideBar.map((item) => ( */}
        {/* <div key={item.title}> */}
        <details className="group mb-3">
          <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-extrabold">
            {/* <span className='col-span-10'> {item.title}</span> */}
            <span className="col-span-10">Rating </span>

            <span className=" transition  group-open:rotate-180">
              <svg
                fill="none"
                height="24"
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
          </summary>
          {/* {item.inside} */}
          <div className="group-open:animate-fadeIn mt-3 pr-3 text-neutral-600">
            <ul className="list-disc">
              <li>
                <span className=" flex flex-row">
                  <BiCircle />
                  <span className="mb-2 flex flex-row text-yellow-600 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </span>
                  <span className="pl-1 text-sm">4.5 & up</span>
                </span>
              </li>
              <li>
                <span className=" flex flex-row">
                  <BiCircle />
                  <span className="mb-2 flex flex-row text-yellow-600 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </span>
                  <span className="pl-1 text-sm">4 & up</span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row">
                  <BiCircle />
                  <span className="flex flex-row text-yellow-600 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                    <AiOutlineStar />
                  </span>
                  <span className="pl-1 text-sm">3.5 & up</span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row">
                  <BiCircle />
                  <span className="flex flex-row text-yellow-600 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                  <span className="pl-1 text-sm">3 & up</span>
                </span>
              </li>
            </ul>
          </div>
        </details>
        <div className="pr-5">
          <hr className=" w-100 text-gray-500" />
        </div>
        {/* </div> */}

        {/* ))} */}
      </div>

      <div className="pr-5">
        {/* {sideBar.map((item) => ( */}
        {/* <div key={item.title}> */}
        <details className="group mb-3">
          <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-extrabold">
            {/* <span className='col-span-10'> {item.title}</span> */}
            <span className="col-span-10">Video Duration </span>

            <span className=" transition  group-open:rotate-180">
              <svg
                fill="none"
                height="24"
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
          </summary>
          {/* {item.inside} */}
          <div className="group-open:animate-fadeIn mt-3 pr-3 text-neutral-600">
            <ul className="list-disc">
              <li>
                <span className="mb-2 flex flex-row p-2 text-black">
                  <BiSquare className="mr-2 mt-1" />

                  <span className=" flex flex-row pt-1 text-sm">0-1 Hours</span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row p-2 pt-1 text-black">
                  <BiSquare className="mr-2 mt-1" />
                  <span className="  flex flex-row text-sm">3-6 Hours</span>
                </span>
              </li>

              <li>
                <span className=" mb-2 flex flex-row  p-2 text-black">
                  <BiSquare className="mr-2 mt-1" />
                  <span className=" flex flex-row pt-1 text-sm">
                    7-16 Hours
                  </span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row  p-2 text-black">
                  <BiSquare className="mr-2 mt-1" />
                  <span className=" flex flex-row pt-1 text-sm">17+ Hours</span>
                </span>
              </li>
            </ul>
          </div>
        </details>
        <div className="pr-5">
          <hr className=" w-100 text-gray-500" />
        </div>
        {/* </div> */}

        {/* ))} */}
      </div>

      <div className="pr-5">
        {/* {sideBar.map((item) => ( */}
        {/* <div key={item.title}> */}
        <details className="group mb-3">
          <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-extrabold">
            {/* <span className='col-span-10'> {item.title}</span> */}
            <span className="col-span-10">Topics </span>

            <span className=" transition  group-open:rotate-180">
              <svg
                fill="none"
                height="24"
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
          </summary>
          {/* {item.inside} */}
          <div className="group-open:animate-fadeIn mt-3 pr-3 text-neutral-600">
            <ul className="list-disc">
              {coursesSUB.map((item) => (
                <li key={item._id}>
                  <span className=" flex flex-row">
                    <BiSquare className="mr-2 mt-1" />
                    <span className="mb-2 flex flex-row">{item.title}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </details>
        <div className="pr-5">
          <hr className=" w-100 text-gray-500" />
        </div>
        {/* </div> */}

        {/* ))} */}
      </div>

      <div className="pr-5">
        {/* <div key={item.title}> */}
        <details className="group mb-3">
          <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-extrabold">
            {/* <span className='col-span-10'> {item.title}</span> */}
            <span className="col-span-10">SubCategory </span>

            <span className=" transition  group-open:rotate-180">
              <svg
                fill="none"
                height="24"
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
          </summary>
          {/* {item.inside} */}
          <div className="group-open:animate-fadeIn  mt-3 pr-3 text-black">
            <ul className="list-disc">
              {subCategories.map((item) => (
                <li key={item._id}>
                  <span className="mb-1 flex flex-row p-2 text-sm text-black">
                    <BiSquare className="mr-2 mt-1" />

                    <span className=" flex flex-row">{item.name}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </details>
        <div className="pr-5">
          <hr className=" w-100 text-gray-500" />
        </div>
        {/* </div> */}

        {/* ))} */}
      </div>

      <div className="pr-5">
        {/* {sideBar.map((item) => ( */}
        {/* <div key={item.title}> */}
        <details className="group mb-3">
          <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-extrabold">
            {/* <span className='col-span-10'> {item.title}</span> */}
            <span className="col-span-10 font-extrabold">Level </span>

            <span className=" transition  group-open:rotate-180">
              <svg
                fill="none"
                height="24"
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
          </summary>
          {/* {item.inside} */}
          <div className="group-open:animate-fadeIn mt-3 pr-3 text-neutral-600">
            <ul className="list-disc">
              <li>
                <span className="mb-2 flex flex-row p-2 text-black">
                  <BiSquare className="mr-2 mt-1" />

                  <span className=" flex flex-row pt-1 text-sm">Beginners</span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row p-2 pt-1 text-black">
                  <BiSquare className="mr-2 mt-1" />
                  <span className="  flex flex-row text-sm">All levels</span>
                </span>
              </li>

              <li>
                <span className=" mb-2 flex flex-row  p-2 text-black">
                  <BiSquare className="mr-2 mt-1" />
                  <span className=" flex flex-row pt-1 text-sm">
                    Intermediate
                  </span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row  p-2 text-black">
                  <BiSquare className="mr-2 mt-1" />
                  <span className=" flex flex-row pt-1 text-sm">Expert</span>
                </span>
              </li>
            </ul>
          </div>
        </details>
        <div className="pr-5">
          <hr className=" w-100 text-gray-500" />
        </div>
        {/* </div> */}

        {/* ))} */}
      </div>

      <div className="pr-5">
        {/* {sideBar.map((item) => ( */}
        {/* <div key={item.title}> */}
        <details className="group mb-3">
          <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-extrabold">
            {/* <span className='col-span-10'> {item.title}</span> */}
            <span className="col-span-10 font-extrabold">Price </span>

            <span className=" transition  group-open:rotate-180">
              <svg
                fill="none"
                height="24"
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
          </summary>
          {/* {item.inside} */}
          <div className="group-open:animate-fadeIn mt-3 pr-3 text-neutral-600">
            <ul className="list-disc">
              <li>
                <span className="mb-2 flex flex-row p-2 text-black">
                  <BiSquare className="mr-2 mt-1" />

                  <span className=" flex flex-row pt-1 text-sm">Free</span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row p-2 pt-1 text-black">
                  <BiSquare className="mr-2 mt-1" />
                  <span className="  flex flex-row text-sm">Paid</span>
                </span>
              </li>
            </ul>
          </div>
        </details>
        <div className="pr-5">
          <hr className=" w-100 text-gray-500" />
        </div>
        {/* </div> */}

        {/* ))} */}
      </div>
    </>
  );
}
