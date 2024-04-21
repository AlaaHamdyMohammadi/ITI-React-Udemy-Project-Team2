/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import axiosInstance from '../../../axiosConfig/instance';
import { BsPersonHeart } from 'react-icons/bs';
import { GrFavorite } from 'react-icons/gr';
import { setWishList } from '../../../store/slices/WishList';

const BASE_URL = 'https://udemy-clone-uief.onrender.com';

export default function ShowCoursesD() {
  const [courses, setCourses] = useState([]);
  const wishList = useSelector((state) => state.wishList.wishList);
  const dispatch = useDispatch();

  function addToFav(course) {
    var check = wishList.map((wish) => {
      if (wish._id == course._id) {
        return true;
      } else {
        return false;
      }
    });
    //console.log(check);
    var wish = [];
    if (check.includes(true) || check == []) {
      dispatch(setWishList([...wishList]));
      wish = [...wishList];
    } else {
      dispatch(setWishList([...wishList, course]));
      wish = [...wishList, course];
    }
    localStorage.setItem('wishList', JSON.stringify(wish));
    //console.log(wishList);
  }

  useEffect(function () {
    axiosInstance
      .get('courses/')
      .then((res) => {
        //console.log(res.data.data);
        //   console.log(res.data.data.courses);

        const courses = res.data.data.courses.slice(0, 6);

        setCourses(courses);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="my-2">
        <div className="my-2 text-2xl font-extrabold">
          {' '}
          Students also bought
        </div>
        <div className=" ml-0 ">
          <div className="container py-2">
            <div className="row d-flex justify-content-center ">
              {courses.map((item) => (
                <div key={item._id} className="card-body p-2">
                  {/* <!-- Single item --> */}
                  <div className="grid grid-cols-10">
                    <div className=" col-span-1 ">
                      {/* <!-- Image --> */}
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={`${BASE_URL}/img/courses/${item.photo}`}
                          className=" w-full"
                          style={{ height: '50px' }}
                          alt="Blue Jeans Jacket"
                        />
                      </div>
                    </div>

                    <div className=" col-span-4 pl-2">
                      {/* <!-- Data --> */}
                      <div className="mb-1">
                        <strong>{item.title}</strong>
                      </div>
                      <span className="update mt-0">
                        <span className="bestseller">{item.BestSeller}</span>
                      </span>
                      <span className="mb-0 pb-1 text-sm/[17px] font-bold text-green-700">
                        {item.duration} total hours
                      </span>
                    </div>

                    <span className="star ">
                      <span className="flex flex-row ">
                        <span>{item.rating}</span>
                        <span className="mt-1 flex flex-row">
                          <AiFillStar />
                        </span>
                      </span>
                    </span>

                    <div className="flex flex-row text-sm text-gray-700">
                      <span className="p-1">
                        <BsPersonHeart />
                      </span>
                      <span> {item.NumStd}</span>
                    </div>
                    <div className="pl-5 text-end font-bold ">
                      E{item.price}
                    </div>
                    <div className="col-span-2  pl-10">
                      <GrFavorite onClick={() => addToFav(item)} />
                    </div>
                  </div>
                  {/* <!-- Single item --> */}

                  <hr className="my-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
