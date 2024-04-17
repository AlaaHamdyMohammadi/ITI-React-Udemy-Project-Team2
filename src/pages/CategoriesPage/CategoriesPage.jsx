/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import { Link, NavLink, useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { Helmet } from 'react-helmet';
import { FaGreaterThan } from 'react-icons/fa6';
import { AiFillExclamationCircle } from 'react-icons/ai';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeSpinner } from '../../store/slices/spinner';
import Spinner from '../../components/Spinner';
import { Carousel } from 'react-bootstrap';

export const loadercourseShow = async () => {
  var res = await getCourseSub();
  console.log(res.data.data.courses);
  // return object of keys &values of loaders
  return res.data.data.courses;
};

function CategoriesPage() {
  const { _id } = useParams();
  //console.log(_id)
  const [category, setCategory] = useState({});
  const [course, setCourse] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [coursesSUB, setcoursesSUB] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const spinner = useSelector((state) => state.spinner.spinner);
  const dispatch = useDispatch();

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

  useEffect(
    function () {
      axiosInstance.get(`/categories/${_id}/courses`).then((res) => {
        //console.log(res.data.data.courses.slice(0,1));
        setCourse(res.data.data.courses.slice(0, 1));
        setcoursesSUB(res.data.data.courses);
      });
    },
    [_id],
  );

  const firstSetOfCourses = coursesSUB.slice(0, 5);
  const secondSetOfCourses = coursesSUB.slice(5, 10);

  useEffect(function () {
    axiosInstance.get(`/courses`).then((res) => {
      //console.log(res.data.data.courses);
      setInstructors(res.data.data.courses);
    });
  }, []);

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
            <div className="">
              <NavLink
                to={`/categoriesPage/:id`}
                className="border-b-2 border-black pb-3.5 font-bold text-black no-underline "
              >
                Most popular
              </NavLink>
              <NavLink
                to={`/categoriesPage/:id`}
                className="ml-3 pb-1 font-bold text-gray-400 no-underline "
              >
                Trending
              </NavLink>
              <CategoriesCarousel
                coursesSUB={coursesSUB}
                secondSetOfCourses={secondSetOfCourses}
                firstSetOfCourses={firstSetOfCourses}
              />
            </div>
          </div>
        </>
      )}

      <div className="mx-4 mt-5">
        <h4 className="mb-3 font-bold">Featured course</h4>
        {course.map((item) => (
          <div key={item._id}>
            <NavLink
              className="text-white no-underline"
              to={`/CourseDetials/${item._id}`}
            >
              <div className="border-1 flex flex-col p-3 hover:bg-slate-100 md:flex-row md:items-center">
                <img
                  className="sm:w-100 h-60 md:w-96"
                  src={`http://localhost:4000/img/courses/${item.photo}`}
                />

                <div className="w-100 lg:w-50 ml-4 cursor-pointer text-black">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="w-5/6">{item.subTitle}</p>
                  <p className="text-sm font-bold text-gray-500">
                    By {item.instructor}
                  </p>
                  <span className="text-sm font-bold">
                    Updated {item.updated}
                  </span>
                  <span className="ml-2 text-sm font-bold text-gray-500">
                    {item.duration} total hours .
                  </span>
                  <span className="ml-2 text-sm font-bold text-gray-500">
                    {item.lectures} lectures
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      <PopularTopics subCategories={subCategories} />

      <Instructors />

      <div className="mx-4 mt-5">
        <h4 className="mb-3 font-bold">All Data Science courses</h4>
        <div className="border-1 p-3">
          <AiFillExclamationCircle className="inline text-4xl" />
          <span className="text-md pl-3 font-bold">
            Not sure? All courses have a 30-day money-back guarantee
          </span>
        </div>
        {/* Show courses of subCategories*/}
        <CoursesSection
          subCategories={subCategories}
          coursesSUB={coursesSUB}
          id={_id}
          className="p-5"
        />
      </div>
    </>
  );
}

function NavSubCategory({ category, subCategories }) {
  return (
    <div className="relative flex cursor-pointer flex-col justify-around p-2 pb-3 pt-3 shadow-md shadow-gray-300 lg:flex-row">
      <NavLink className="font-bold  text-gray-950 no-underline hover:text-violet-600">
        {category.name}

        <FaGreaterThan className="text-1xl ml-5 inline text-gray-500" />
        <FaGreaterThan className="text-1xl inline text-gray-500" />
      </NavLink>
      {subCategories.map((subCategory) => (
        <NavLink
          className="text-gray-950 no-underline hover:text-violet-600"
          key={subCategory._id}
          to={`/subCategories/${subCategory._id}`}
        >
          {subCategory.name}
        </NavLink>
      ))}
    </div>
  );
}

function CategoriesCarousel({ secondSetOfCourses, firstSetOfCourses }) {
  return (
    <Carousel className="mb-2 mt-2 border-t-2 pt-4">
      <Carousel.Item>
        <div className="flex justify-between">
          {firstSetOfCourses.map((course) => (
            <NavLink
              key={course._id}
              className="text-white no-underline"
              to={`/CourseDetials/${course._id}`}
            >
              <img
                className="h-40 w-60"
                src={`http://localhost:4000/img/courses/${course.photo}`}
              />
              <div className="w-64 pt-2 font-bold text-black">
                {course.title}
              </div>
              <div>
                <div className="text-sm text-gray-500">
                  by:{course.instructor}
                </div>
                <span className=" flex flex-row">
                  <span className="text-black">{course.rating}</span>

                  <span className="flex flex-row pt-1 text-yellow-500 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </span>
                </span>
                <div className="flex flex-row gap-2">
                  <span className=" font-semibold text-black">
                    E${course.price}
                  </span>

                  <span className=" text-sm	text-gray-500 line-through">
                    E$ {course.DiscountPrice}
                  </span>

                  <span className="  text-right text-sm	text-gray-900 ">
                    ({course.NumRating})
                  </span>
                </div>
                <p className=" bestseller h-fit w-fit text-xs ">
                  {course.BestSeller ? 'Best Seller' : ''}
                </p>
              </div>
            </NavLink>
          ))}
          {firstSetOfCourses.map((course) => (
            <NavLink
              key={course._id}
              className="text-white no-underline"
              to={`/CourseDetials/${course._id}`}
            >
              <img
                className="h-40 w-60"
                src={`http://localhost:4000/img/courses/${course.photo}`}
              />
              <div className="w-64 pt-2 font-bold text-black">
                {course.title}
              </div>
              <div>
                <div className="text-sm text-gray-500">
                  by:{course.instructor}
                </div>
                <span className=" flex flex-row">
                  <span className="text-black">{course.rating}</span>

                  <span className="flex flex-row pt-1 text-yellow-500 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </span>
                </span>
                <div className="flex flex-row gap-2">
                  <span className=" font-semibold text-black">
                    E${course.price}
                  </span>

                  <span className=" text-sm	text-gray-500 line-through">
                    E$ {course.DiscountPrice}
                  </span>

                  <span className="  text-right text-sm	text-gray-900 ">
                    ({course.NumRating})
                  </span>
                </div>
                <p className="bestseller h-fit w-fit text-xs">
                  {course.BestSeller ? 'Best Seller' : ''}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="flex justify-between">
          {secondSetOfCourses.map((course) => (
            <NavLink
              key={course._id}
              className="text-white no-underline"
              to={`/CourseDetials/${course._id}`}
            >
              <img
                className="h-40 w-60"
                src={`http://localhost:4000/img/courses/${course.photo}`}
              />
              <div className="w-64 pt-2 font-bold text-black">
                {course.title}
              </div>
              <div>
                <div className="text-sm text-gray-500">
                  by:{course.instructor}
                </div>
                <span className=" flex flex-row">
                  <span className="text-black">{course.rating}</span>

                  <span className="flex flex-row pt-1 text-yellow-500 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </span>
                </span>
                <div className="flex flex-row gap-2">
                  <span className=" font-semibold text-black">
                    E${course.price}
                  </span>

                  <span className=" text-sm	text-gray-500 line-through">
                    E$ {course.DiscountPrice}
                  </span>

                  <span className="  text-right text-sm	text-gray-900 ">
                    ({course.NumRating})
                  </span>
                </div>
                <p className="bestseller h-fit w-fit text-xs">
                  {course.BestSeller ? 'Best Seller' : ''}
                </p>
              </div>
            </NavLink>
          ))}
          {secondSetOfCourses.map((course) => (
            <NavLink
              key={course._id}
              className="text-white no-underline"
              to={`/CourseDetials/${course._id}`}
            >
              <img
                className="h-40 w-60"
                src={`http://localhost:4000/img/courses/${course.photo}`}
              />
              <div className="w-64 pt-2 font-bold text-black">
                {course.title}
              </div>
              <div>
                <div className="text-sm text-gray-500">
                  by:{course.instructor}
                </div>
                <span className=" flex flex-row">
                  <span className="text-black">{course.rating}</span>

                  <span className="flex flex-row pt-1 text-yellow-500 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </span>
                </span>
                <div className="flex flex-row gap-2">
                  <span className=" font-semibold text-black">
                    E${course.price}
                  </span>

                  <span className=" text-sm	text-gray-500 line-through">
                    E$ {course.DiscountPrice}
                  </span>

                  <span className="  text-right text-sm	text-gray-900 ">
                    ({course.NumRating})
                  </span>
                </div>
                <p className="bestseller h-fit w-fit text-xs">
                  {course.BestSeller ? 'Best Seller' : ''}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

function PopularTopics({ subCategories }) {
  return (
    <div className="mx-4 mt-5">
      <h4 className="mb-5 font-bold">Popular topics</h4>
      <div className="d-flex justify-content-evenly">
        {subCategories.map((subCategory) => (
          <div className="" key={subCategory._id}>
            <NavLink
              to={`/subCategories/${subCategory._id}`}
              className=" border-1 p-3 font-bold text-gray-950 no-underline hover:bg-gray-100"
            >
              {subCategory.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

function Instructors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(function () {
    axiosInstance
      .get('/users', { params: { role: 'instructor' } })
      .then((res) => {
        //console.log(res.data.data.documents);
        setInstructors(res.data.data.documents.slice(2, 6));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="mx-4 mt-5">
        <h4 className="mb-3 font-bold">Popular Instructors</h4>
        <div className="flex flex-wrap justify-evenly">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="border-1 relative flex w-80 cursor-pointer items-center p-3 hover:bg-gray-100"
            >
              <img
                className="absolute top-2 w-16 rounded-full border-2"
                src={`http://localhost:4000/img/users/${instructor.photo}`}
              ></img>
              <div className=" ml-20 text-gray-950">
                <h6 className="text-sm font-bold">{instructor.username}</h6>
                <p className="text-xs">
                  <strong>{instructor.instructorRating}</strong>
                  <AiFillStar className="inline text-yellow-400	" /> Instructor
                  Rating
                </p>
                <p className="text-xs">
                  <strong>{instructor.instructorStudents}</strong> students
                </p>
                <p className="text-xs">
                  <strong>{instructor.numberOfCourses}</strong> courses
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoriesPage;
