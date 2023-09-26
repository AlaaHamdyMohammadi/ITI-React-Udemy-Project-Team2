/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function ShowCourses({ coursesSUB }) {
  console.log(coursesSUB);

  return (
    <>
      <div className="flex flex-col">
        {coursesSUB.map((item) => (
          <div key={item._id}>
            <div className="grid grid-cols-8 p-1">
              <div className=" mb-lg-0 col-span-2 mb-4">
                {/* <!-- Image --> */}
                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  {/* <div className='bg-[url(./../../public/images/cart/php.jpeg)]'></div> */}
                  <img
                    src={`http://localhost:4000/img/courses/${item.photo}`}
                    // src={`${item.photo}`}
                    className="h-50 w-full object-cover"
                    alt="Blue Jeans Jacket"
                  />
                  {/* <a href="#!">
                                            <div className="mask color" ></div>
                                        </a> */}
                </div>
              </div>

              <div className=" mb-lg-0 col-span-4 mb-4 pl-3">
                {/* <!-- Data --> */}
                <p className="mb-1">
                  <strong>{item.title}</strong>
                </p>
                <p className="mb-0 pb-1 text-sm/[17px]">{item.instructor}</p>

                <span className="star">
                  {' '}
                  <span className="flex flex-row ">
                    <span>{item.rating}</span>
                    <span className="mt-1 flex flex-row">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </span>
                  </span>
                </span>
                <span className="text-sm/[17px]">(23.558.650 ratings)</span>

                <div className="update mt-0">
                  <span className="bestseller">{item.BestSeller}</span>
                </div>
              </div>
              <div className="col-span-2 text-end font-bold">E{item.price}</div>
            </div>

            <div>
              <hr className=" w-100 text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
