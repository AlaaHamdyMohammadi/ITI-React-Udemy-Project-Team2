/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function WishList() {
  const wishList = useSelector((state) => state.wishList.wishList);
  return (
    <div className="m-5 flex flex-grow flex-wrap justify-between px-5 py-5">
      {wishList.map((course) => (
        <div key={course._id}>
          <div style={{ width: '16rem' }}>
            <img
              className="w-62 h-32"
              src={`http://localhost:4000/img/courses/${course.photo}`}
            />
            <div className="relative">
              <AiFillHeart className="absolute -top-[120px] left-[230px] cursor-pointer  text-2xl text-stone-100" />
            </div>
            <div className="mt-2">
              <h6 className="font-bold">{course.title}</h6>
              <p className="text-sm text-gray-500">{course.instructor}</p>
              <p className="-mt-3 text-sm font-bold text-yellow-800">
                {course.rating}
                <AiFillStar className="inline text-yellow-600" />
                <AiFillStar className="inline text-yellow-600" />
                <AiFillStar className="inline text-yellow-600" />
                <AiFillStar className="inline text-yellow-600" />
                <BsStarHalf className="inline text-yellow-600" />
                <span className="ml-2 text-xs font-thin text-stone-400">
                  ({course.NumRating})
                </span>
              </p>
              <p className="-mt-3 text-xs text-gray-500">
                {course.duration} total hours . {course.lectures} lectures
              </p>
              <p className="text-md -mt-3 font-bold text-stone-900">
                E${course.price}
                <span className="ml-2 font-thin text-gray-500 line-through">
                  E${course.DiscountPrice}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WishList;
