import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosConfig/instance';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

// import { TbPointFilled } from 'react-icons/';

import { BiDislike, BiSolidDislike } from 'react-icons/bi';

// import { useContext } from 'react';
// import { TERipple } from 'tw-elements-react';
// import { getMe } from '../../../services/authentication';
// import { authentication } from '../../../contextConfig/authentication';
import { NavLink } from 'react-bootstrap';

export default function Reviwes({ course }) {
  const [reviews, setReviews] = useState([]);
  

  useEffect(function () {
    axiosInstance
      .get('courses/650ade93fd4c1daaa2b19210/reviews')
      .then((res) => {
        console.log(res.data.data.reviews);
        console.log(res.data.data.reviews);

        const coursReview = res.data.data.reviews.slice(0,4);

        setReviews(coursReview);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="ml-0 mt-5 ">
        <div className="text-2xl font-extrabold">
          <span className="flex p-0 ">
            <span className="custom flex items-center font-bold text-yellow-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </span>

            <span className="p-2 ">
              <span className="text-black-300 text-bold" href="#">
                {course.rating} Course Rating .
              </span>
            </span>

            {/* <span className="p-2 ">
                  <a className="text-black-300" href="#">
                    {course.NumRating} ratings
                  </a>
                </span> */}
            <span className="p-2">
              {/* <span><TbPointFilled/></span> */}
              {course.NumRating} ratings
            </span>
          </span>
          <div className="pr-5">
            <hr className=" w-100 text-gray-500" />
          </div>
        </div>
      </div>

      <div className=" m-6 ml-0 grid  grid-cols-6 gap-4">
        {reviews.map((item) => (
          <div
            key={item._id}
            className="col-span-3    block rounded-lg bg-white  "
          >
            <div className="h-64">
              <div className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                <div className="flex items-center">
                  <NavLink
                    style={{ backgroundColor: '#2d2f31' }}
                    className="rounded-full p-2   font-bold text-white no-underline"
                    to="/profile"
                  >
                    {item.user.username
                      .split(' ')
                      .map((char) => char.charAt(0))
                      .join('')}
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="ml-3 cursor-pointer text-sm font-extrabold"
                  >
                    <div>
                      {item.user.username}
                      <div className="mt-1 flex flex-row text-sm text-yellow-600 ">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <BsStarHalf />
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* // */}

              {/* //* */}
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {item.review}
              </p>
              {/* // */}

              <App />
            </div>
            <div className="pr-5">
              <hr className=" w-100 text-gray-500" />
            </div>
          </div>
        ))}
         <div className=" col-span-2 pl-4">
        {/* <button
          type="button"
          className=" checkout11  border border-black bg-white px-2 py-2 font-bold text-black hover:bg-gray-400  "
        >
          More Reviews
        </button> */}
      </div>
      </div>
    </>
  );
}

function App() {
  const [likeCount, setLikeCount] = useState(5000);
  const [dislikeCount, setDislikeCount] = useState(100);

  const [activeBtn, setActiveBtn] = useState('none');

  const handleLikeClick = () => {
    if (activeBtn === 'none') {
      setLikeCount(likeCount + 1);
      setActiveBtn('like');
      return;
    }

    if (activeBtn === 'like') {
      setLikeCount(likeCount - 1);
      setActiveBtn('none');
      return;
    }

    if (activeBtn === 'dislike') {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn('like');
    }
  };

  const handleDisikeClick = () => {
    if (activeBtn === 'none') {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn('dislike');
      return;
    }

    if (activeBtn === 'dislike') {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn('none');
      return;
    }

    if (activeBtn === 'like') {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn('dislike');
    }
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button
          className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`}
          onClick={handleLikeClick}
        >
          {/* <span className="material-symbols-rounded">thumb_up</span> */}
          {/* {activeBtn === 'like' ?`<AiOutlineLike/> `:   `<AiFillLike/>`} */}
          {/* <AiOutlineLike/>{likeCount} */}
          <AiFillLike
            className={` ${activeBtn === 'like' ? '' : ' text-gray-500'}`}
          />
          {likeCount}
        </button>

        <button
          className={`btn ${activeBtn === 'dislike' ? 'dislike-active' : ''}`}
          onClick={handleDisikeClick}
        >
          {/* <span className="material-symbols-rounded">thumb_down</span> */}
          {/* {activeBtn === 'like' ?`<BiDislike/> `:   `<BiSolidDislike/>`} */}

          <BiSolidDislike
            className={` ${activeBtn === 'dislike' ? '' : ' text-gray-500'}`}
          />
          {dislikeCount}

          {/* <BiDislike/> {dislikeCount} */}

          {/* <BiSolidDislike/>  */}
        </button>
      </div>
    </div>
  );
}

// export default App;
