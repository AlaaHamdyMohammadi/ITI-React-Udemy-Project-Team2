import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import './Footer.css'; // Make sure to import your CSS file

export default function Footer() {
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
    return (

        <>
            <footer className="mt-5 p-4 footer">
                {/* social footer */}
                <div id="socialFooter" className="d-flex justify-content-end">
                    <div>
                        <span className="text-light fw-bold m-3">Follow us</span>
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
                        <ul className="me-auto mb-2 mb-lg-0">
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="./business.html">
                                    Udemy Business
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="./teach-on-udemy.html">
                                    Teach on Udemy
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Get the app
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 ps-4">
                        <ul className="me-auto mb-2 mb-lg-0">
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Help and Support
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Affiliate
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Investors
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 ps-4">
                        <ul className="me-auto mb-2 mb-lg-0">
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Cookie settings
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Sitemap
                                </a>
                            </li>
                            <li>
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    Accessibility statement
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 pe-4 text-end">
                        {/* Button trigger modal */}
                        <Button variant="outline-light" onClick={handleShowModal}>
                            <i className="bi bi-globe2"></i> English
                        </Button>
                    </div>
                </div>

                {/* Modal */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Choose a language</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul className="me-auto mb-2 mb-lg-0">
                            <li className="list-group-item border-0">
                                <a className="nav-link text-dark" aria-current="page" href="#">
                                    English
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="nav-link text-dark" aria-current="page" href="#">
                                    Arabic
                                </a>
                            </li>
                        </ul>
                    </Modal.Body>
                </Modal>
                {/* LOGO */}
                <div className="container-fluid d-flex justify-content-between mt-4">
                    {/* <a href="./index.html" className="ms-3 ps-3" /> */}
                    <img src="../src/assets/udemy.png" className="ms-1" width="100" alt="Udemy-symbol" />
                    <p className="text-light">© 2023 Udemy, Inc.</p>
                </div>
            </footer>
        </>
    );
}
