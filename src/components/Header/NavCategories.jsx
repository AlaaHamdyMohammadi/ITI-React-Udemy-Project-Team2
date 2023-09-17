/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
///${category.name}
function NavCategories({ setCAT, onCategories, categories }) {
  const navigate = useNavigate();
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
          <p className="cursor-pointer hover:text-violet-600">Categories</p>
          {onCategories ? (
            <div
              onMouseOver={() => {
                setCAT(true);
              }}
              onMouseLeave={() => {
                setCAT(false);
              }}
              className="subDiv z-10 w-72 bg-white p-3 text-left"
            >
              {categories.map((category) => (
                <NavDropdown
                  key={category.id}
                  id={`dropdown-button-drop-end`}
                  drop={'end'}
                  title={category.name}
                  className="dropColor text-gray-900 hover:text-violet-600"
                  onClick={() => {navigate(`/categoriesPage/${category.name}`);}}
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



