/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import { Link, NavLink, useParams } from 'react-router-dom';
//useLoaderData
import { Helmet } from 'react-helmet';
import { LiaGreaterThanSolid } from 'react-icons/Lia';
import { AiFillExclamationCircle } from 'react-icons/ai';
//import { getCourseSub } from '../../services/CoursesSub';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeSpinner } from '../../store/slices/spinner';
import Spinner from '../../components/Spinner';
// import { Spinner } from 'react-bootstrap';

// export const loadercourseShow = async () => {
//   var res = await getCourseSub();
//   console.log(res.data.data.courses);
//   // return object of keys &values of loaders
//   return res.data.data.courses;
// };

function CategoriesPage() {
  const { _id } = useParams();
  //console.log(_id)
  const [category, setCategory] = useState({});
  const [subCategories, setSubCategories] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const spinner = useSelector((state) => state.spinner.spinner);
  const dispatch = useDispatch();

  // useEffect(
  //   function () {
  //     axiosInstance.get(`/categories/${_id}`).then((res) => {
  //       const numOfCategories = res.data.data.document;
  //       //console.log(numOfCategories);
  //       setCategory(numOfCategories);
  //     });
  //   },
  //   [_id],
  // );

  useEffect(
    function () {
      async function getCategory() {
        dispatch(changeSpinner(true));
        const res = await axiosInstance.get(`/categories/${_id}`);
        const numOfCategories = res.data.data.document;
        //console.log(numOfCategories);
        setCategory(numOfCategories);
        dispatch(changeSpinner(false));
      }
      getCategory();
    },
    [_id, dispatch],
  );

  useEffect(
    function () {
      axiosInstance.get(`/categories/${_id}/subCategories`).then((res) => {
        //console.log(res.data.data.subCategories);
        setSubCategories(res.data.data.subCategories);
      });
    },
    [_id],
  );

  useEffect(function () {
    axiosInstance.get(`/courses`).then((res) => {
      //console.log(res.data.data.courses);
      setInstructors(res.data.data.courses);
    });
  }, []);

  // const coursesSUB = useLoaderData(_id);
  // console.log(coursesSUB);

  return (
    <>
      <Helmet>
        <title>{`${category.name} Online Courses | Udemy`}</title>
      </Helmet>

      {spinner ? (
        <Spinner />
      ) : (
        <>
          <NavSubCategory category={category} subCategories={subCategories} />
          <div className="mx-4 mt-5">
            <h2 className="mb-5 font-bold">{category.name} Courses</h2>
            <h4 className="mb-3 font-bold">Courses to get you started</h4>
            <div className="border-b-2">
              <NavLink to={`/categoriesPage/:id`} className="pb-1 font-bold ">
                Most popular
              </NavLink>
              <NavLink
                to={`/categoriesPage/:id`}
                className="ml-3 pb-1 font-bold "
              >
                Trending (carousel)
              </NavLink>
            </div>
          </div>
        </>
      )}

      <div className="mx-4 mt-5">
        <h4 className="mb-3 font-bold">Featured course</h4>
      </div>

      <PopularTopics subCategories={subCategories} />

      <div className="mx-4 mt-5">
        <h4 className="mb-3 font-bold">Popular Instructors</h4>
      </div>
      <div className="mx-4 mt-5">
        <h4 className="mb-3 font-bold">All Data Science courses</h4>
        <div className="border-1 p-3">
          <AiFillExclamationCircle className="inline text-4xl" />
          <span className="text-md pl-3 font-bold">
            Not sure? All courses have a 30-day money-back guarantee
          </span>
        </div>
        {/* Show courses of subCategories*/}
        {/*<CoursesSection coursesSUB={coursesSUB} id={_id} className="p-5" />*/}
      </div>
    </>
  );
}

function NavSubCategory({ category, subCategories }) {
  return (
    <div className="relative flex cursor-pointer justify-around pb-3 pt-3 shadow-md shadow-gray-300">
      <NavLink className="font-bold text-gray-950 no-underline hover:text-violet-600">
        {category.name}

        <LiaGreaterThanSolid className="text-1xl inline text-gray-500" />
      </NavLink>
      {subCategories.map((subCategory) => (
        <NavLink
          className="text-gray-950 no-underline hover:text-violet-600"
          key={subCategory._id}
        >
          {subCategory.name}
        </NavLink>
      ))}
    </div>
  );
}

function PopularTopics({ subCategories }) {
  return (
    <div className="mx-4 mt-5">
      <h4 className="mb-5 font-bold">Popular topics</h4>
      <div className="flex flex-wrap justify-evenly">
        {subCategories.map((subCategory) => (
          <div className="" key={subCategory._id}>
            <NavLink className=" border-1 p-3 font-bold text-gray-950 no-underline hover:bg-gray-100">
              {subCategory.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
