import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {BsSearch ,BsCart3,BsGlobe} from "react-icons/bs";
import './Header.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';



export default function Header() {

    const [onUdemyBusiness,setUB]=useState(false)
    const [onTeachOnUdemy,setTON]=useState(false)
    const [onCategories,setCAT]=useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand="xl" className="bg-body-tertiary px-3">
            <div className='m-auto d-none d-xl-flex'>
            <Navbar.Brand href="/"><img src="./public/images/instractor/Udemy_logo.svg.png" width={100}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
                <div className='ms-3' onMouseOver={() => { setCAT(true) }} onMouseLeave={() => { setCAT(false) }}>
                    <div className='base text-decoration-none text-dark mt-3'><p>Categories</p>
                        {(onCategories) ? <div onMouseOver={() => { setCAT(true) }} onMouseLeave={() => { setCAT(false) }} className='subDiv shadow-lg bg-light p-3 fw-bold text-center rounded'>

                            <NavDropdown id={`dropdown-button-drop-end`} drop={"end"} title="Category1">
                                <NavDropdown.Item href="#action/3.1">Category</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown id={`dropdown-button-drop-end`} drop={"end"} title="Category2">
                                <NavDropdown.Item href="#action/3.1">Category</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            
                        </div> : ""}
                    </div>
                </div>
            </Nav>

                <Form inline className='searchBar ms-3 mt-2'>
                    <InputGroup className='border rounded-pill overflow-hidden'>
                        <InputGroup.Text className='border-0 bg-white' id="basic-addon1"><BsSearch /></InputGroup.Text>
                        <Form.Control className='border-0 bg-white mr-sm-2'
                            type="text"
                            placeholder="Search"
                        />
                    </InputGroup>
                </Form>

                <div className='ms-3 mt-3' onMouseOver={() => { setUB(true) }} onMouseLeave={() => { setUB(false) }}>
                    <div className='base text-decoration-none text-dark'><p>Udemy Business</p>
                        {(onUdemyBusiness) ? <div  onMouseOver={() => { setUB(true) }} onMouseLeave={() => { setUB(false) }} className='subDiv shadow-lg bg-light p-3 fw-bold text-center rounded'>
                            Get your team access to over 22,000 top Udemy courses, anytime, anywhere.
                            <NavLink className='btn rounded-0 m-lg-3 m-1 bg-dark p-3 col-8 text-decoration-none text-light' to="/udemy-business">Try It</NavLink>
                        </div> : ""}
                    </div>
                </div>

                <div className='ms-3 mt-3' onMouseOver={() => { setTON(true) }} onMouseLeave={() => { setTON(false) }}>
                    <div className='base text-decoration-none text-dark'><p>Teach On Udemy</p>
                        {(onTeachOnUdemy) ? <div onMouseOver={() => { setTON(true) }}  onMouseLeave={() => { setTON(false) }} className='subDiv shadow-lg bg-light p-3 fw-bold text-center rounded'>
                            Get your team access to over 22,000 top Udemy courses, anytime, anywhere.
                            <NavLink className='btn rounded-0 m-lg-3 m-1 bg-dark p-3 col-8 text-decoration-none text-light' to="/teach-on-udemy">Learn More</NavLink>
                        </div> : ""}
                    </div>
                </div>

                <div className='d-flex ms-3 mt-2'>
                <div className='ms-2 align-self-center'>
                <NavLink className='btn btn-light border-dark' to="/cart"><BsCart3/></NavLink>
                </div>
                
                <div className='ms-2'>
                <NavLink className='btn btn-light border-dark' to="/login">Log In</NavLink>
                </div>

                <div className='ms-2'>
                <NavLink className='btn btn-dark border' to="/signup">Sign Up</NavLink>
                </div>

                <div className='ms-2'>
                <h1 className='btn btn-lg btn-light border'><BsGlobe/></h1>
                </div>
                </div>
            </div>
            

            <div className='d-xl-none d-flex justify-content-between w-100'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton onHide={handleClose}>
                                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                            <div className='ms-2'>
                                <NavLink className='btn btn-light border-dark' to="/login">Log In</NavLink>
                            </div>

                            <div className='ms-2'>
                                <NavLink className='btn btn-dark border' to="/signup">Sign Up</NavLink>
                            </div>

                                <hr />
                                <div>
                                    <NavDropdown className='border border-0' id={`dropdown-button-drop-down`} drop={"down"} title="Category">
                                        <NavDropdown.Item href="#action/3.1">Category</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </div>


                                <div><NavLink to='/udemy-business'>Udemy Business</NavLink></div>
                                <div><NavLink to='/teach-on-udemy'>Teach On Udemy</NavLink></div>

                            </Offcanvas.Body>
                        </Offcanvas>
                    </Nav>
                </Navbar.Collapse>

                <Nav>
                <Navbar.Brand href="/"><img src="./public/images/instractor/Udemy_logo.svg.png" width={100} /></Navbar.Brand>
                </Nav>


                <div>
                    <a className='btn btn-lg'><BsSearch/></a>
                    <a className='btn btn-lg'><BsCart3/></a>
                </div>


            </div>
                    
        </Navbar>




      );
}

