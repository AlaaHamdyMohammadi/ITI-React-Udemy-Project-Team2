/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsCart3, BsGlobe } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';

const BASE_URL = 'https://udemy-clone-uief.onrender.com';

function LogoutUser({ setTON, onTeachOnUdemy }) {
  const [onCart, setUB] = useState(false);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const counter = useSelector((state) =>
    state.cartItems.cartItems ? state.cartItems.cartItems.length : 0,
  );

  const TotalPrice = useSelector((state) => state.TotalCost.TotalCost);

  const { t, i18n } = useTranslation();

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);

    if (newLanguage === 'ar') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }

    handleCloseModal();
  };

  return (
    <div className="d-flex ms-3">
      <div
        className="ms-3 mt-3"
        onMouseOver={() => {
          setTON(true);
        }}
        onMouseLeave={() => {
          setTON(false);
        }}
      >
        <div className="base text-decoration-none">
          <NavLink
            className="text-sm text-gray-950 no-underline hover:text-violet-600"
            to="/teach-on-udemy"
          >
            {t('Teach On Udemy')}
          </NavLink>
          {onTeachOnUdemy ? (
            <div
              onMouseOver={() => {
                setTON(true);
              }}
              onMouseLeave={() => {
                setTON(false);
              }}
              className="subDiv fw-bold w-72 bg-white p-3 text-center text-sm"
            >
              {t(
                'Get your team access to over 22,000 top Udemy courses, anytime, anywhere.',
              )}
              <NavLink
                className="btn rounded-0 m-lg-3 col-8 text-decoration-none m-1 w-96 bg-black p-2 text-sm text-white"
                to="/teach-on-udemy"
              >
                {t('Learn More')}
              </NavLink>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      <div
        className="mr-3 ms-3 mt-3"
        onMouseOver={() => {
          setUB(true);
        }}
        onMouseLeave={() => {
          setUB(false);
        }}
      >
        <div className="base text-decoration-none text-dark">
          <NavLink
            className="text-xl font-bold text-gray-950 hover:text-violet-600"
            to="/cart"
          >
            <div className="relative">
              {counter > 0 ? (
                <span className="absolute bottom-3 left-3 z-10 h-4 w-5 rounded-full bg-violet-600 pl-1.5 text-sm text-white">
                  {counter}
                </span>
              ) : (
                ''
              )}
              <BsCart3 />
            </div>
          </NavLink>
          {onCart ? (
            <div
              onMouseOver={() => {
                setUB(true);
              }}
              onMouseLeave={() => {
                setUB(false);
              }}
              className="subDiv fw-bold bg-white  p-3 text-center shadow-md"
            >
              {cartItems.map((item) => {
                return (
                  <div key={item._id}>
                    <NavLink
                      to={'/CourseDetials/' + item._id}
                      className="text-decoration-none text-reset"
                    >
                      <li className="mb-2">
                        <div className="d-flex justify-between">
                          <div className="me-2">
                            <img
                              className=""
                              style={{ width: '200px', height: '70px' }}
                              src={`${BASE_URL}/img/courses/${item.photo}`}
                              alt={item.title}
                            />
                          </div>
                          <div className="text-start">
                            <p className="mb-0 text-sm">{item.title}</p>
                            <span className="fw-light text-sm">
                              Course By: {item.instructor}
                            </span>
                            <p className="mb-0 text-sm">
                              E$
                              {item.price}
                            </p>
                          </div>
                        </div>
                      </li>
                    </NavLink>
                    <hr />
                  </div>
                );
              })}
              <h4 className="text-sm">Total E$: {Math.round(TotalPrice)}</h4>
              <NavLink
                className="btn rounded-0 m-lg-3 col-8 text-decoration-none m-1 w-full bg-black p-2 text-sm text-white"
                to="/cart"
              >
                {t('Go to Cart')}
              </NavLink>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      <div className="ms-2 mt-3">
        <NavLink
          className="border-1 rounded-none border-black p-2 text-sm font-bold text-gray-950 no-underline hover:bg-gray-200"
          to="/login"
        >
          {t('Log In')}
        </NavLink>
      </div>

      <div className="ms-2 mt-3">
        <NavLink
          className="border-1 rounded-none border-black bg-gray-950 p-2 text-sm font-bold text-white no-underline hover:bg-gray-700"
          to="/signup"
        >
          {t('Sign Up')}
        </NavLink>
      </div>

      <div className="ms-2">
        <Button
          variant=" outline-none border-dark rounded-0 "
          style={{ padding: '7px 10px', marginTop: '0.8rem' }}
          onClick={handleShowModal}
        >
          <BsGlobe className="text-dark border-dark" />
        </Button>
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header >
          <Modal.Title className=''>{t('Choose a language')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul className="">
              <li className="list-group-item border-0">
                <a
                  className="nav-link text-dark"
                  aria-current="page"
                  href="#"
                  onClick={() => changeLanguage('en')}
                >
                  English
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  className="nav-link text-dark"
                  aria-current="page"
                  href="#"
                  onClick={() => changeLanguage('ar')}
                >
                  {t('Arabic')}
                </a>
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default LogoutUser;
