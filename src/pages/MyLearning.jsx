/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


function MyLearning() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSuccess = queryParams.get('success');
  const [courseData, setCourseData] = useState([]);
  const token = localStorage.getItem('token');

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
          console.log(res.data.enrolledCourses);
        })
        .catch((err) => {
          console.error('Error fetching purchased courses: ', err);
        });
    }
  }, [isSuccess, token]);


  return (
    <>
      <div>
        <Helmet>
          <title>
            Online Courses - Learn Anything, On Your Schedule | Udemy
          </title>
        </Helmet>
        <div className=" relative h-48" style={{ backgroundColor: '#2d2f31' }}>
          <h1 className="absolute left-64 top-16 font-bold text-gray-100">
            My Learning
          </h1>
          <h6 className="absolute left-64 top-40 font-bold text-gray-100">
            All Courses
          </h6>
          <h6 className="absolute left-64 top-40 pl-32 font-bold text-gray-100">
            Wishlist
          </h6>
          <h6 className="absolute left-64 top-40 pl-60 font-bold text-gray-100">
            Archive
          </h6>
        </div>

        <div>
          {isSuccess === 'true' ? (
            <>
              <h2>Enrolled Courses:</h2>
              <ul>
                {courseData.map((course) => (
                  <li key={course._id}>{course.course.title}</li>
                ))}
              </ul>
            </>
          ) : (
            <h1>Payment not successful</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default MyLearning;
