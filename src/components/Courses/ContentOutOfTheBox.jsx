/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { setCategory } from '../../store/slices/categories';
import { useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import { setcategoryCourse } from '../../store/slices/categoryCourses';


function ContentOutOfTheBox(props) {
  const dispatch=useDispatch()
  const[checkCourses,setCheck]=useState(false)

  function getCourses (categ) {
    axiosInstance
      .get('/subCategories/'+(categ._id)+'/courses')
      .then((res) => {
        const courseslist = res.data.data;
        dispatch(setcategoryCourse(courseslist))
        //console.log("courseslist",courseslist);
        setCheck(true)
      })
      .catch((err) => console.log(err));
  }

  if(!checkCourses){
    getCourses(props.defCategory)
  }

  function changeContent(categ){
    dispatch(setCategory(categ))
    getCourses(categ)
  }

    return (
      <div>
        <h1>A broad selection of courses</h1>
        <p className="text-2xl">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
        {props.categories.map((categ)=>{
          return  <a onClick={()=>changeContent(categ)}
          href="#E"
          className="p-3 font-bold text-slate-500 no-underline hover:text-black"
        >
          {categ.name}
        </a>
        })}
      </div>
    );
}

export default ContentOutOfTheBox
