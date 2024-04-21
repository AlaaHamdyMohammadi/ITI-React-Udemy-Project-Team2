/* eslint-disable no-redeclare */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { setCatRatingFilteredCourses } from '../../../store/slices/CatRatingFilteredCourses';

export default function SideBar({ subCategories, coursesSUB, id }) {
  const dispatch = useDispatch();
  var [Rate, setRate] = useState(0);
  var [duration, setduration] = useState(-1);
  var [level, setdLevel] = useState('');
  var [price, setdPrice] = useState('');

  function RatingFilter(event) {
    if (event.target.tagName == 'INPUT') {
      var less = 0;
      setRate(Number(event.target.name));
      if (event.target.checked) {
        less = Number(event.target.name);
      } else {
        setRate(0);
      }
      console.log(less);
      var filtered = coursesSUB.filter((course) => {
        if (course.rating >= less) {
          return course;
        }
      });
      dispatch(setCatRatingFilteredCourses(filtered));
      console.log(filtered);
      console.log(Rate);
    }
  }

  function DurationFilter(event) {
    if (event.target.tagName == 'INPUT') {
      setduration(Number(event.target.name));
      var from = 0;
      var to = 1700;
      if (event.target.checked) {
        var from = Number(event.target.name);
        var to = Number(event.target.id);
      } else {
        setduration(-1);
      }

      console.log(from);
      var filtered = coursesSUB.filter((course) => {
        if (course.duration >= from && course.duration <= to) {
          console.log(true);
          return course;
        }
      });
      dispatch(setCatRatingFilteredCourses(filtered));
      console.log(filtered);
    }
  }

  function LevelFilter(event) {
    if (event.target.tagName == 'INPUT') {
      setdLevel(event.target.name);
      var level = event.target.name;
      var from = 0;
      var to = 100000000;
      if (event.target.checked) {
        if (level == 'expert') {
          from = 0;
          to = 400;
        } else if (level == 'intermediate') {
          from = 401;
          to = 1000;
        } else if (level == 'beginner') {
          from = 1001;
          to = 100000000;
        }
      } else {
        setdLevel('');
      }

      var filtered = coursesSUB.filter((course) => {
        if (course.NumStd >= from && course.NumStd <= to) {
          console.log(true);
          return course;
        }
      });
      dispatch(setCatRatingFilteredCourses(filtered));
      console.log(filtered);
    }
  }

  function PriceFilter(event) {
    if (event.target.tagName == 'INPUT') {
      setdPrice(event.target.name);
      var price = event.target.name;
      var from = 0;
      if (event.target.checked) {
        if (price == 'paid') {
          from = 1;
        }
      } else {
        setdPrice('');
      }

      var filtered = coursesSUB.filter((course) => {
        if (price == 'paid') {
          if (course.DiscountPrice >= from || course.price >= from) {
            return course;
          }
        } else {
          if (course.DiscountPrice <= from || course.price <= from) {
            return course;
          }
        }
      });
      dispatch(setCatRatingFilteredCourses(filtered));
      console.log(filtered);
    }
  }
  return (
    <>
      {/*Rating */}
      <div className="pr-5">
        <details className="group mb-3">
          <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-extrabold">
            <span className="col-span-10">Rating </span>

            <span className=" transition  group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="group-open:animate-fadeIn mt-3 pr-3 text-neutral-600">
            <ul className="list-disc" onClick={(event) => RatingFilter(event)}>
              <li>
                <span className=" flex flex-row">
                  {Rate == 4.5 ? (
                    <input
                      checked
                      className="mb-2"
                      type="checkbox"
                      name="4.5"
                      id="4.5"
                    />
                  ) : (
                    <input
                      className="mb-2"
                      type="checkbox"
                      name="4.5"
                      id="4.5"
                    />
                  )}
                  <span className="mb-2 flex flex-row text-yellow-600 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </span>
                  <span className="pl-1 text-sm">4.5 & up</span>
                </span>
              </li>
              <li>
                <span className=" flex flex-row">
                  {Rate == 4 ? (
                    <input
                      checked
                      className="mb-2"
                      type="checkbox"
                      name="4"
                      id="4"
                    />
                  ) : (
                    <input className="mb-2" type="checkbox" name="4" id="4" />
                  )}
                  <span className="mb-2 flex flex-row text-yellow-600 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </span>
                  <span className="pl-1 text-sm">4 & up</span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row">
                  {Rate == 3.5 ? (
                    <input
                      checked
                      className="mb-1"
                      type="checkbox"
                      name="3.5"
                      id="3.5"
                    />
                  ) : (
                    <input
                      className="mb-1"
                      type="checkbox"
                      name="3.5"
                      id="3.5"
                    />
                  )}
                  <span className="flex flex-row text-yellow-600 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                    <AiOutlineStar />
                  </span>
                  <span className="pl-1 text-sm">3.5 & up</span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row">
                  {Rate == 3 ? (
                    <input
                      checked
                      className="mb-1"
                      type="checkbox"
                      name="3"
                      id="3"
                    />
                  ) : (
                    <input className="mb-1" type="checkbox" name="3" id="3" />
                  )}
                  <span className="flex flex-row text-yellow-600 ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                  <span className="pl-1 text-sm">3 & up</span>
                </span>
              </li>
            </ul>
          </div>
        </details>
        <div className="pr-5">
          <hr className=" w-100 text-gray-500" />
        </div>
        {/* </div> */}

        {/* ))} */}
      </div>
      {/*Duration */}
      <div className="pr-5">
        <details className="group mb-3">
          <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-extrabold">
            <span className="col-span-10">Video Duration </span>

            <span className=" transition  group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          {/* {item.inside} */}
          <div className="group-open:animate-fadeIn mt-3 pr-3 text-neutral-600">
            <ul
              className="list-disc"
              onClick={(event) => DurationFilter(event)}
            >
              <li>
                <span className="mb-2 flex flex-row p-2 text-black">
                  {duration == 0 ? (
                    <input
                      checked
                      className="mr-2"
                      type="checkbox"
                      name="0"
                      id="1"
                    />
                  ) : (
                    <input className="mr-2" type="checkbox" name="0" id="1" />
                  )}
                  <span className=" flex flex-row pt-1 text-sm">0-1 Hours</span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row p-2 pt-1 text-black">
                  {duration == 3 ? (
                    <input
                      checked
                      className="mr-2"
                      type="checkbox"
                      name="3"
                      id="6"
                    />
                  ) : (
                    <input className="mr-2" type="checkbox" name="3" id="6" />
                  )}
                  <span className="  flex flex-row text-sm">3-6 Hours</span>
                </span>
              </li>

              <li>
                <span className=" mb-2 flex flex-row  p-2 text-black">
                  {duration == 7 ? (
                    <input
                      checked
                      className="mr-2"
                      type="checkbox"
                      name="7"
                      id="16"
                    />
                  ) : (
                    <input className="mr-2" type="checkbox" name="7" id="16" />
                  )}
                  <span className=" flex flex-row pt-1 text-sm">
                    7-16 Hours
                  </span>
                </span>
              </li>
              <li>
                <span className=" mb-2 flex flex-row  p-2 text-black">
                  {duration == 17 ? (
                    <input
                      checked
                      className="mr-2"
                      type="checkbox"
                      name="17"
                      id="1700"
                    />
                  ) : (
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="17"
                      id="1700"
                    />
                  )}
                  <span className=" flex flex-row pt-1 text-sm">17+ Hours</span>
                </span>
              </li>
            </ul>
          </div>
        </details>
        <div className="pr-5">
          <hr className=" w-100 text-gray-500" />
        </div>
      </div>

      {/*Level */}
      <div className="pr-5">
        <details className="group mb-3">
          <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-extrabold">
            <span className="col-span-10 font-extrabold">Level </span>

            <span className=" transition  group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="group-open:animate-fadeIn mt-3 pr-3 text-neutral-600">
            <ul className="list-disc" onClick={(event) => LevelFilter(event)}>
              <li>
                <label className="mb-2 flex flex-row p-2 pt-1 text-black">
                  {level == 'all' ? (
                    <input
                      checked
                      className="mr-2"
                      type="checkbox"
                      name="all"
                      id="0"
                    />
                  ) : (
                    <input className="mr-2" type="checkbox" name="all" id="0" />
                  )}
                  <span className="flex flex-row text-sm">All levels</span>
                </label>
              </li>
              <li>
                <label className="mb-2 flex flex-row p-2 text-black">
                  {level == 'beginner' ? (
                    <input
                      checked
                      className="mr-2"
                      type="checkbox"
                      name="beginner"
                      id="1001"
                    />
                  ) : (
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="beginner"
                      id="1001"
                    />
                  )}
                  <span className="flex flex-row pt-1 text-sm">Beginners</span>
                </label>
              </li>
              <li>
                <label className="mb-2 flex flex-row p-2 text-black">
                  {level == 'intermediate' ? (
                    <input
                      checked
                      className="mr-2"
                      type="checkbox"
                      name="intermediate"
                      id="401"
                    />
                  ) : (
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="intermediate"
                      id="401"
                    />
                  )}
                  <span className="flex flex-row pt-1 text-sm">
                    Intermediate
                  </span>
                </label>
              </li>
              <li>
                <label className="mb-2 flex flex-row p-2 text-black">
                  {level == 'expert' ? (
                    <input
                      checked
                      className="mr-2"
                      type="checkbox"
                      name="expert"
                      id="0"
                    />
                  ) : (
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="expert"
                      id="0"
                    />
                  )}
                  <span className="flex flex-row pt-1 text-sm">Expert</span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <div className="pr-5">
          <hr className=" w-100 text-gray-500" />
        </div>
      </div>

      {/*Price */}
      <div className="pr-5">
        <details className="group mb-3">
          <summary className="  grid cursor-pointer  list-none grid-cols-12 items-center justify-between font-extrabold">
            <span className="col-span-10 font-extrabold">Price </span>

            <span className=" transition  group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          {/* {item.inside} */}
          <div className="group-open:animate-fadeIn mt-3 pr-3 text-neutral-600">
            <ul className="list-disc" onClick={(event) => PriceFilter(event)}>
              <li>
                <label className="mb-2 flex flex-row p-2 pt-1 text-black">
                  {price == 'paid' ? (
                    <input
                      checked
                      className="mr-2"
                      type="checkbox"
                      name="paid"
                      id="1"
                    />
                  ) : (
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="paid"
                      id="1"
                    />
                  )}
                  <span className="flex flex-row text-sm">Paid</span>
                </label>
              </li>
              <li>
                <label className="mb-2 flex flex-row p-2 text-black">
                  {price == 'free' ? (
                    <input
                      checked
                      className="mr-2"
                      type="checkbox"
                      name="free"
                      id="0"
                    />
                  ) : (
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="free"
                      id="0"
                    />
                  )}
                  <span className="flex flex-row pt-1 text-sm">Free</span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <div className="pr-5">
          <hr className=" w-100 text-gray-500" />
        </div>
      </div>
    </>
  );
}
