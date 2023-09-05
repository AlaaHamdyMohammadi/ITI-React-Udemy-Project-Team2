/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Modal, Card } from 'react-bootstrap';
import { useState } from 'react';

// show={() => setShowModal(true)}
// onHide={showModal}

function Test({ title, content }) {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="h-40 w-60"
          src="./../../public/images/homePage/carImg6.jfif"
        />
        <h6 className="mt-2 w-64 font-bold">
          The Complete Python Bootcamp From Zero to Hero in Python
        </h6>
        <div>
          <p className="text-sm text-slate-500">Jose Portilla</p>
          <p className="font-bold">4 ⭐⭐⭐⭐</p>
          <p className="font-bold">E1,599.99</p>
        </div>
      </div>
      {isHovered && (
        <Modal
          show={() => setShowModal(true)}
          onHide={() => setShowModal(false)}
          centered
          size="lg"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{content}</Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary">Add To Cart</button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Test;
