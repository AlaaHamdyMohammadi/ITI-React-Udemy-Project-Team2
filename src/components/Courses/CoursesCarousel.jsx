/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Carousel } from 'react-bootstrap';
import ModalCard from './ModalCard';
import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

function CoursesCarousel(props) {
  const dispatch = useDispatch();
  const courses = useSelector(
    (state) => state.categoryCourses.categoryCourse.courses,
  );

  if (courses) {
    return (
      <>
        <Carousel className="mb-2 mt-2">
          <Carousel.Item>
            <div className="flex justify-between">
              {courses.map((course) => {
                return <CardItem key={course._id} course={course} />;
              })}
              {courses.map((course) => {
                return <CardItem key={course._id} course={course} />;
              })}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="flex justify-between">
              {courses.map((course) => {
                return <CardItem key={course._id} course={course} />;
              })}
              {courses.map((course) => {
                return <CardItem key={course._id} course={course} />;
              })}
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    );
  } else {
    return (
      <>
        <h1>The Server Is Loading</h1>
      </>
    );
  }
}

function CardItem(props) {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="relative">
      <NavLink
        className="text-white no-underline"
        to={`/CourseDetials/${props.course._id}`}
      >
        <img
          className="h-40 w-60"
          src={`http://localhost:4000/img/courses/${props.course.photo}`}
          onMouseOver={handleShow}
          onMouseLeave={handleClose}
        />
              <div className="w-64 pt-2 text-black font-bold">{props.course.title}</div>
              <div>
        <div className="text-sm text-gray-500">
          by:{props.course.instructor}
        </div>
        <span className=" flex flex-row">
          <span className='text-black'>{props.course.rating}</span>

          <span className="flex flex-row pt-1 text-yellow-500 ">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
          </span>
        </span>
        {/* <p className="font-bold">E{props.course.price}</p> */}
        <div className="flex flex-row gap-2">
          <span className=" font-semibold text-black">
            E${props.course.price}
          </span>

          <span className=" text-sm	text-gray-500 line-through">
            E$ {props.course.DiscountPrice}
          </span>

          <span className="  text-right text-sm	text-gray-900 ">
            ({props.course.NumRating})
          </span>
        </div>
        <p className="w-fit bg-lime-200 p-1.5 text-xs text-lime-950">
          {props.course.NumStd > 1000 ? 'Best Seller' : ''}
        </p>
      </div>
      </NavLink>

     
      {showModal && (
        <ModalCard handleShow={handleShow} handleClose={handleClose} />
      )}
    </div>
  );
}

export default CoursesCarousel;
