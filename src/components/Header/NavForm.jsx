/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import axiosInstance from "../../axiosConfig/instance";

function NavForm() {
  const [query, setQuery] = useState('');
  const [inputs, setInputs] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const {_id} = useParams();
  useEffect(function(){
      axiosInstance.get('/courses').then(res => {
          // console.log(
          //   res.data.data.courses.filter((course) =>
          //     course.title.toLowerCase().includes('mo'),
          //   ),
          // );
        setInputs(res.data.data.courses.slice(0,6));
      }).catch(err => console.log(err))
  }, []);

  
  const handleClidk = () => {
    //Form.Control
    //overflow-hidden
  }
  return (
    <Form inline className="searchBar ms-3 mt-2">
      <InputGroup className="rounded-pill  z-10 border border-black">
        <InputGroup.Text className="border-0 bg-white" id="basic-addon1">
          <BsSearch />
        </InputGroup.Text>

        <Form.Control
          className="mr-sm-2 border-0"
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
                  className="m-4 flex cursor-pointer border-b-2 pb-2 text-center hover:bg-gray-300
              "
                  key={item._id}
                  onClick={() => navigate(`/CategoriesPage/${_id}`)}
                >
                  <img
                    className="h-8 w-14"
                    src={`http://localhost:4000/img/courses/${item.photo}`}
                  />
                  <span className="ml-4 text-sm font-bold">{item.title}</span>
                </li>
              ))}
          </ul>
        )}
      </InputGroup>
    </Form>
  );
}

export default NavForm

