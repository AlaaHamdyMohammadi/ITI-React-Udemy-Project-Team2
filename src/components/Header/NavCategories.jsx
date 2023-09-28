/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/instance';
import './Header.css';

function NavCategories({
  setCAT,
  onCategories,
  categories,

}) {
  const navigate = useNavigate();
  const [subCategories, setSubCategories] = useState([]);
  const [currentId, setCurrentId] = useState('');
  //const { _id } = useParams();

  // useEffect(() => {
  //   axiosInstance
  //     .get(`subCategories/${_id}`)
  //     .then((res) => {
  //       //console.log(res.data.data.subCategories);
  //       setSubCategories(res.data.data.subCategories);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [_id]);

  useEffect(() => {
    axiosInstance
      .get(`/categories/${currentId}/subCategories`)
      .then((res) => {
        //console.log(res.data.data.subCategories);
        setSubCategories(res.data.data.subCategories);
      })
      .catch((error) => {
        console.error('Error fetching subcategories:', error);
      });
  }, [currentId]);

  function handleClick(id) {
    setCurrentId(id);
  }

  /*
    <NavLink to={`/subCategories/${subCategory._id}`}>
                          {subCategory.name}
                        </NavLink>    

                        onClick={() => {
                          navigate(`/subCategories/${subCategory._id}`);
                          console.log(subCategory._id);
                        }}
  */

  return (
    <Nav className="me-auto">
      <div
        className="ms-3"
        onMouseOver={() => {
          setCAT(true);
        }}
        onMouseLeave={() => {
          setCAT(false);
        }}
      >
        <div className="base text-decoration-none text-dark mt-3">
          <p className="cursor-pointer text-sm hover:text-violet-600">
            Categories
          </p>
          {onCategories ? (
            <div
              onMouseOver={() => {
                setCAT(true);
              }}
              onMouseLeave={() => {
                setCAT(false);
              }}
              className="subDiv z-10 w-72 bg-white p-3 text-left text-sm"
            >
              {categories.map((category) => (
                <NavDropdown
                  key={category._id}
                  id={`dropdown-button-drop-end`}
                  drop={'end'}
                  title={category.name}
                  className="dropColor text-gray-900 hover:text-violet-600"
                  onClick={() => {
                    navigate(`/categoriesPage/${category._id}`);
                    handleClick(category._id);
                  }}
                >
                  {subCategories.map((subCategory) => (
                    <>
                      <NavDropdown.Item
                        className="text-sm"
                        key={subCategory._id}
                      >
                        {subCategory.name}
                      </NavDropdown.Item>
                    </>
                  ))}
                </NavDropdown>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Nav>
  );
}

export default NavCategories;