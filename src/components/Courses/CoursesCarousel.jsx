/* eslint-disable no-unused-vars */
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import ModalCard from './ModalCard';

function CoursesCarousel() {
  return (
    <Carousel className="mt-2 mb-2">
      <Carousel.Item>
        <div className="flex justify-between">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="flex justify-between">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

function CardItem() {
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
        src="./../../public/images/homePage/carImg9.jfif"
        onMouseOver={handleShow}
        onMouseLeave={handleClose}
      />
      <h6 className="mt-2 w-64 font-bold">
        The Complete Python Bootcamp From Zero to Hero in Python
      </h6>
      <div>
        <p className="text-sm text-slate-500">Jose Portilla</p>
        <p className="font-bold">5 ⭐⭐⭐⭐⭐</p>
        <p className="font-bold">E1,599.99</p>
        <p className="w-fit bg-lime-200 p-1.5 text-xs text-lime-950">
          Best Seller
        </p>
      </div>
      {showModal && (
        <ModalCard handleShow={handleShow} handleClose={handleClose} />
      )}
    </div>
  );
}

export default CoursesCarousel;
