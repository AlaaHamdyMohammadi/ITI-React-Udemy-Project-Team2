/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import axiosInstance from '../axiosConfig/instance';
//enrolled
function AllCourses() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isSuccess = queryParams.get('success');
    const [courseData, setCourseData] = useState([]);
    const token = localStorage.getItem('token');
    const [progress, setProgress] = useState(0);
    const [query, setQuery] = useState('');
    const [courses, setCourses] = useState([]);
    //const [searchTerm, setSearchTerm] = useState('');
    //const [results, setResults] = useState([]);
    // const navigate = useNavigate();

    async function handleSubmit(e) {
      e.preventDefault();
      if (!query) return;
      try {
        const res = await axiosInstance.get(`/enrolled/search?q=${query}`);
        if (res.data) {
          console.log(res.data);
          // Update your state with the received data
        } else {
          console.log('No data returned from the API');
        }
      } catch (err) {
        console.error('Error searching:', err);
        // Handle the error appropriately
      }

      setQuery('');
    }

    useEffect(() => {
      if (isSuccess === 'true') {
        // Fetch and display course data
        axios
          .get('http://localhost:4000/api/v1/enrolled', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setCourseData(res.data.enrolledCourses);
            //console.log(res.data.enrolledCourses);
            toast.success('Checkout successfully')
          })
          .catch((err) => {
            console.error('Error fetching purchased courses: ', err);
          });
      }
    }, [isSuccess, token]);
  return (
    <div>
      <form onSubmit={handleSubmit} className="px-24 py-5 text-right">
        <div className="relative">
          <input
            className="border-1 w-28 border-stone-900 px-4 py-2 text-sm  placeholder:text-stone-400 focus:outline-none  sm:w-64 "
            placeholder="Search my courses"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <AiOutlineSearch className="absolute right-0 top-0 h-[37px] w-10 cursor-pointer bg-stone-800 p-1 text-xl text-stone-100 hover:bg-stone-600 " />
        </div>
      </form>
      <div>
        {isSuccess === 'true' ? (
          <>
            <div className="mx-5 flex flex-grow flex-wrap justify-between px-5 py-5">
              {courseData.map((course) => (
                <div key={course._id}>
                  <div style={{ width: '16rem' }}>
                    <img
                      className="w-62"
                      src={`http://localhost:4000/img/courses/${course.photo}`}
                    />
                    <div className="mt-2">
                      <h6 className="font-bold">{course.course.title}</h6>
                      <p className="text-sm text-gray-500">
                        {course.instructor}
                      </p>
                      <ProgressBar
                        now={progress}
                        style={{ height: '3px' }}
                        label={`${progress}%`}
                      />
                      <p className="text-sm">0%</p>
                      <p className="-mt-3 text-sm">START COURSE</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default AllCourses;
