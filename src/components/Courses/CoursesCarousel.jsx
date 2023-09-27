/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Carousel } from 'react-bootstrap';
import ModalCard from './ModalCard';
import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import { useDispatch, useSelector } from 'react-redux';

function CoursesCarousel() {
  const courses = useSelector(
    (state) => state.categoryCourses.categoryCourse.courses,
  );
  
  //console.log('sssss', courses);

  //const [courseArr, setCourseArr] = useState([]);

  // setCourseArr(courses.courses)
  return (
    <>
      <Carousel className="mb-2 mt-2">
        <Carousel.Item>
          
        </Carousel.Item>
      </Carousel>
    </>
  );
}

function CardItem(props) {
  console.log(props);
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="relative">
      <img
        className="h-40 w-60"
        src={props.course.photo}
        onMouseOver={handleShow}
        onMouseLeave={handleClose}
      />
      <h6 className="mt-2 w-64 font-bold">{props.course.title}</h6>
      <div>
        <p className="text-sm text-slate-500">{props.course.instructor}</p>
        <p className="font-bold">{props.course.rating} ⭐</p>
        <p className="font-bold">E{props.course.price}</p>
        <p className="w-fit bg-lime-200 p-1.5 text-xs text-lime-950">
          {props.course.NumStd > 1000 ? 'Best Seller' : ''}
        </p>
      </div>
      {showModal && (
        <ModalCard handleShow={handleShow} handleClose={handleClose} />
      )}
    </div>
  );
}

export default CoursesCarousel;


// 