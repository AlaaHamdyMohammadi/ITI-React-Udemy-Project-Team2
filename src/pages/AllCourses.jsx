/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';

function AllCourses() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isSuccess = queryParams.get('success');
    const [courseData, setCourseData] = useState([]);
    const token = localStorage.getItem('token');
    const [progress, setProgress] = useState(0);

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
    <div>
      {isSuccess === 'true' ? (
        <>
          <div className="m-5 flex flex-wrap justify-between">
            {courseData.map((course) => (
              <div key={course._id}>
                <div style={{ width: '16rem' }}>
                  <img
                    className="w-62"
                    src={`http://localhost:4000/img/courses/${course.photo}`}
                  />
                  <div className="mt-2">
                    <h6 className="font-bold">{course.course.title}</h6>
                    <p className="text-sm text-gray-500">{course.instructor}</p>
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
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default AllCourses;
