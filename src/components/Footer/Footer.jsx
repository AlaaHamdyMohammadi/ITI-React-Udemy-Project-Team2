/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import './Footer.css'; // Make sure to import your CSS file
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export default function Footer() {
  const { t, i18n } = useTranslation(); // Get the t and i18n functions

  // Step 1: Set up state to control the modal
  const [showModal, setShowModal] = useState(false);

  // Step 2: Function to show the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Step 3: Function to hide the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Step 4: Function to change the language
  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage); // Change the language using i18n function
    handleCloseModal(); // Close the modal after changing the language
  };

  return (
    <>
      <footer className="footer mt-5 p-4">
        {/* social footer */}
        <div id="socialFooter" className="d-flex justify-content-end">
          <div>
            <span className="text-light fw-bold m-3">{t('Follow us')}</span>
          </div>
          <div className="mx-3">
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-light" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className="text-light" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className="text-light" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="text-light" />
            </a>
          </div>
        </div>

        <hr className="text-light" />

        {/* main footer */}
        <div id="mainFooter" className="row">
          <div className="col-3">
            <ul className="mb-lg-0 mb-2 me-auto">
              <li>
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="./business.html"
                >
                  {t('Udemy Business')}
                </a>
              </li>
              <li>
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="./teach-on-udemy.html"
                >
                  {t('Teach on Udemy')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Get the app')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('About us')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Contact us')}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 ps-4">
            <ul className="mb-lg-0 mb-2 me-auto">
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Careers')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Blog')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Help and Support')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Affiliate')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Investors')}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 ps-4">
            <ul className="mb-lg-0 mb-2 me-auto">
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Terms')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Privacy policy')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Cookie settings')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Sitemap')}
                </a>
              </li>
              <li>
                <a className="nav-link text-light" aria-current="page" href="#">
                  {t('Accessibility statement')}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 pe-4 text-end">
            {/* Button trigger modal */}
            <Button variant="outline-light" onClick={handleShowModal}>
              <i className="bi bi-globe2"></i> {t('English')}
            </Button>
          </div>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{t('Choose a language')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul className="mb-lg-0 mb-2 me-auto">
              <li className="list-group-item border-0">
                <a
                  className="nav-link text-dark"
                  aria-current="page"
                  href="#"
                  onClick={() => changeLanguage('en')} // Change to English
                >
                  English
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  className="nav-link text-dark"
                  aria-current="page"
                  href="#"
                  onClick={() => changeLanguage('ar')} // Change to Arabic
                >
                  {t('Arabic')}
                </a>
              </li>
            </ul>
          </Modal.Body>
        </Modal>

        {/* LOGO */}
        <div className="container-fluid d-flex justify-content-between mt-4">
          <img
            src="./../../../public/images/homePage/udemy.png"
            className="ms-1"
            width="100"
            alt="Udemy-symbol"
          />
          <p className="text-light">© 2023 Udemy, Inc.</p>
        </div>
      </footer>
    </>
  );
}
