/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSearch, BsCart3 } from 'react-icons/bs';
import './Header.css';
import { useContext, useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { authentication } from '../../contextConfig/authentication';
import axiosInstance from '../../axiosConfig/instance';
import NavLogo from './NavLogo';
import NavCategories from './NavCategories';
import NavForm from './NavForm';
import NavBusiness from './NavBusiness';
import LoginUser from './LoginUser';
import LogoutUser from './LogoutUser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
  const [onUdemyBusiness, setUB] = useState(false);
  const [onTeachOnUdemy, setTON] = useState(false);
  const [myLearning, setMyLearning] = useState(false);
  const [onCategories, setCAT] = useState(false);
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [wishList, setWishList] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const [categories, setCategories] = useState([]);
  const { isLogin, setIsLogin } = useContext(authentication);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(function () {
    axiosInstance
      .get('/categories')
      .then((res) => {
        //console.log(res.data.data.documents);
        const numOfCategories = res.data.data.documents.slice(0, 10);
        setCategories(numOfCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    setIsLogin(false);
    toast.success('Successfully logged out');
  }

  return (
    <>
      <Navbar expand="xl" className="bg-white px-3 shadow-md shadow-gray-300 ">
        <div className="d-none d-xl-flex m-auto">
          <NavLogo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavCategories
            setCAT={setCAT}
            onCategories={onCategories}
            categories={categories}
          />
          <NavForm />
          <NavBusiness setUB={setUB} onUdemyBusiness={onUdemyBusiness} />

          {/* Handle Login */}
          {isLogin ? (
            <LoginUser
              setTON={setTON}
              setMyLearning={setMyLearning}
              myLearning={myLearning}
              setIsActive={setIsActive}
              handleLogout={handleLogout}
              isActive={isActive}
              wishList={wishList}
              setWishList={setWishList}
              addToCart={addToCart}
              setAddToCart={setAddToCart}
            />
          ) : (
            <LogoutUser setTON={setTON} onTeachOnUdemy={onTeachOnUdemy} />
          )}
        </div>

        <div className="d-xl-none d-flex justify-content-between w-100">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton onHide={handleClose}>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="ms-2">
                    <NavLink
                      className="border-1 rounded-none border-black p-2 text-sm font-bold text-gray-950 no-underline hover:bg-gray-200"
                      to="/login"
                    >
                      Log In
                    </NavLink>
                  </div>

                  <div className="ms-2 mt-3">
                    <NavLink
                      className="border-1 rounded-none border-black p-2 text-sm font-bold text-gray-950 no-underline hover:bg-gray-200"
                      to="/signup"
                    >
                      Sign Up
                    </NavLink>
                  </div>

                  <hr />
                  <div>
                    <NavDropdown
                      className="border border-0"
                      id={`dropdown-button-drop-down`}
                      drop={'down'}
                      title="Category"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Category
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>

                  <div>
                    <NavLink
                      className="text-gray-950 no-underline hover:text-violet-600"
                      to="/udemy-business"
                    >
                      Udemy Business
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="text-gray-950 no-underline hover:text-violet-600"
                      to="/teach-on-udemy"
                    >
                      Teach On Udemy
                    </NavLink>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>

          <Nav>
            <Navbar.Brand href="/">
              <img src="udemy-logo.png" width={100} />
            </Navbar.Brand>
          </Nav>

          <div>
            <a className="btn btn-lg">
              <BsSearch />
            </a>
            <a
              href="/cart"
              className="btn btn-lg text-gray-950 hover:text-violet-600"
            >
              <BsCart3 />
            </a>
          </div>
        </div>
      </Navbar>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
