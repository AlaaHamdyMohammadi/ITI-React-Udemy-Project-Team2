/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import axiosInstance from '../../axiosConfig/instance';

function NavForm() {
  const [query, setQuery] = useState('');
  const [inputs, setInputs] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const { _id } = useParams();

  useEffect(
    function () {
      if (!query) {
        setDropdown(false);
      }
      async function getCourses() {
        const res = await axiosInstance.get('/courses');
        setInputs(res.data.data.courses.slice(0, 8));
        // setDropdown(false);
      }
      getCourses();
    },
    [query],
  );

  return (
    <div>
      <Form inline className="searchBar ms-3 mt-2">
        <InputGroup className="z-10 rounded-none border border-black">
          <InputGroup.Text
            className="test3 border-0 border-black"
            id="basic-addon1"
          >
            <BsSearch className="test" />
          </InputGroup.Text>

          <Form.Control
            className="mr-sm-2 test2  border-0"
            style={{
              boxShadow: '0 0 0 0.3px',
              borderLeft: '1px solid black',
            }}
            type="text"
            placeholder="Search for anything"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setDropdown(true);
            }}
          />
          {dropdown && inputs && (
            <ul className="absolute top-10 z-10 w-full  bg-white">
              {inputs
                .filter((course) => course.title.toLowerCase().includes(query))
                .map((item) => (
                  <li
                    className="m-4 flex cursor-pointer border-b-2 p-2 text-center hover:bg-gray-300
              "
                    key={item._id}
                    onClick={() => {
                      navigate(`/CourseDetials/${item._id}`);
                      setQuery('');
                    }}
                  >
                    <img
                      className="inline h-8 w-14"
                      src={`http://localhost:4000/img/courses/${item.photo}`}
                    />
                    <span className="ml-4 text-sm  font-bold text-black">
                      {item.title}
                    </span>
                    <p className="ml-4 text-xs font-bold text-gray-600">
                      By.{item.instructor}
                    </p>
                  </li>
                ))}
            </ul>
          )}
        </InputGroup>
      </Form>
    </div>
  );
}

export default NavForm;
