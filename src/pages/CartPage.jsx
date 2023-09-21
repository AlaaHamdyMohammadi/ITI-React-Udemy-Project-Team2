/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import './CartPage.css';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { CiShoppingTag } from 'react-icons/ci';
import CoursesCarousel from '../components/Courses/CoursesCarousel';
import axiosInstance from '../axiosConfig/instance';
import { authentication } from '../contextConfig/authentication';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function CartPage() {
      return (
      <>
      <Helmet>
          <title>
            Online Courses - Learn Anything, On Your Schedule | Udemy
          </title>
        </Helmet>
        <div className="container py-5">
          <h1 className='font-bold'>Shopping Cart</h1>
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className=" mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">1 course in cart</h5>
                  <hr className="my-1" />
                </div>
                <div className="card-body">
                  {/* <!-- Single item --> */}
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-lg-0 mb-4">
                      {/* <!-- Image --> */}
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        {/* <div className='bg-[url(./../../public/images/cart/php.jpeg)]'></div> */}
                        <img
                          src="./../../public/images/cart/php.jpeg"
                          className="h-50 w-full object-cover"
                          alt="Blue Jeans Jacket"
                        />
                        {/* <a href="#!">
                                            <div className="mask color" ></div>
                                        </a> */}
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6  mb-lg-0 mb-4">
                      {/* <!-- Data --> */}
                      <p className="mb-1">
                        <strong>
                          The Complete JavaScript Course 2023: From Zero to
                          Expert!
                        </strong>
                      </p>
                      <p className="mb-0 pb-1 text-sm/[17px]">
                        {' '}
                        By Josenph Delgadillo
                      </p>
                      <div className="update mt-0">
                        <span className="bestseller">Best Seller</span>
                        <span className="recently mx-2">Updated Recently</span>
                      </div>

                      <span className="star">
                        {' '}
                        <span className="flex flex-row ">
                          <span>4.1</span>
                          <span className="mt-1 flex flex-row">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </span>
                        </span>
                      </span>
                      <span className="text-sm/[17px]">
                        (23.558.650 ratings)
                      </span>
                    </div>

                    <div className=" col-lg-4 col-md-6 mb-lg-0 relative  mb-4 flex flex-row ">
                      <div className="absolute inset-y-0 	left-6   flex flex-col text-sm">
                        <a href="#" className="text-violet-600">
                          Remove
                        </a>
                        <a href="#" className="text-violet-600">
                          May be later
                        </a>
                        <a href="#" className="text-violet-600">
                          Add to wishlist
                        </a>
                      </div>

                      <div className="price  absolute inset-y-0 right-4 ">
                        <div className="absolute inset-x-0 top-0 mb-4 rotate-180 transform text-violet-500 ">
                          <CiShoppingTag className='ShoppingTag'/>
                        </div>
                        <strong className="my-4 text-sm text-violet-400">
                          E$319.99{' '}
                        </strong>
                        <div className="px-2 text-sm text-gray-400 line-through">
                          E$400.50
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single item --> */}

                  <hr className="my-2" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" mb-4">
                <div className="card-header  total py-3">
                  <h5 className="mb-0">Total:</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center mb-3 border-0 px-0">
                      <div className="price">
                        <strong>E$319.99</strong>
                        <div className="text-sm text-gray-400 line-through">
                          E$400.50
                        </div>
                      </div>
                    </li>
                  </ul>

                  <button 
                    
                    type="button"
                    className=" checkout border bg-violet-600 px-4 py-2 font-bold text-white hover:bg-violet-800  "
                  >
                    checkout
                  </button>
                  <hr className="my-4" />
                </div>
              </div>

              <div>
                <div className="container">
                  <p className="promotion">promotions</p>
                  <div>
                    <span className="flex flex-row">
                      <span className="mx-1 mt-1">
                        <AiOutlineClose />
                      </span>
                      {/* <i className="fa-solid  close fa-xmark"></i> */}
                      <span className="keeping">KEEPLEARNING </span>
                      <span className="isapplied">is applied</span>
                    </span>
                  </div>
                  <div>
                    <div className="input-group  mb-3">
                      <input
                        type="text"
                        className="form-control input1"
                        placeholder="Enter Coupon"
                        aria-label="Enter Coupon"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className=" border bg-violet-600 px-4 py-2 font-bold text-white hover:bg-violet-800"
                        type="button"
                        id="button-addon2"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-4 p-4">
          <h3 className="pb-3">You might also like</h3>
          <CoursesCarousel />
        </div>
        <div>
            
        </div>
      </>
    );
}

export default CartPage

