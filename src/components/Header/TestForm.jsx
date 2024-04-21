import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import './TestForm.css';

const BASE_URL = 'https://udemy-clone-uief.onrender.com';

function TestForm() {
  const [inputs, setInputs] = useState([]);
  const [query, setQuery] = useState('');
  const [dropdown, setDropdown] = useState(false);

  useEffect(function () {
    axiosInstance.get('/courses').then((res) => {
      setInputs(res.data.data.courses);
    });
  }, []);

  return (
    <div className="app relative">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setDropdown(true);
        }}
        placeholder="Search.."
        className="search"
      />
      {dropdown && inputs && (
        <ul className="absolute top-16 w-80  bg-gray-400">
          {inputs
            .filter((course) => course.title.toLowerCase().includes(query))
            .map((item) => (
              <li
                className="listItem m-4 flex cursor-pointer border-b-2 pb-2
              "
                key={item._id}
              >
                <img
                  className="h-8 w-14"
                  src={`${BASE_URL}/img/courses/${item.photo}`}
                />
                <span className="ml-4 text-sm font-bold">{item.title}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default TestForm;
