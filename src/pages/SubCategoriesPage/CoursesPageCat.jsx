/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/instance';
import CoursesSectionSUB from '../../components/CoursesSectionSUB/CoursesSectionSUB';

export default function SubcategoryPage() {
  const {_id}=useParams()
  console.log(_id);
  const [courses, setcourses] = useState([]);

  useEffect(
     ()=>{
      axiosInstance.get(`/subCategories/${_id}/courses`).then((res) => {
        const courses = res.data.data.courses.slice(0,6);
        console.log(res);
        setcourses(courses);
      });
    },
    [_id],
  );

console.log(courses);
  return (
    <>
    {/* <h1>jjjjjjjjj</h1> */}

    <CoursesSectionSUB   coursesSUB={courses} id={_id} className='p-5'/>

    </>
  );
}
