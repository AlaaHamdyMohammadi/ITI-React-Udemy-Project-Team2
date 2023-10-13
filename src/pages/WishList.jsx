/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

/*

{
    
    /*<Form inline className="searchBar ms-3  mt-2">
      <InputGroup className="z-10 rounded-lg border border-black">
        <InputGroup.Text className="test3 border-0 bg-white" id="basic-addon1">
          <BsSearch className="test" />
        </InputGroup.Text>

        <Form.Control
          className="mr-sm-2 test2 border-0"
          style={{
            boxShadow: '0 0 0 0.3px',
            border: '1px solid black',
          }}
          type="text"
          placeholder="Search for anything"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setDropdown(true);
          }}
        />
        {dropdown && inputs && (
          <ul className="absolute top-10 z-10 w-full  bg-white">
            {inputs
              .filter((course) => course.title.toLowerCase().includes(query))
              .map((item) => (
                <li
                  className="m-4 flex cursor-pointer border-b-2 p-2 text-center hover:bg-gray-300
              "
                  key={item._id}
                  onClick={() => {
                    navigate(`/CourseDetials/${item._id}`);
                    setQuery('');
                  }}
                >
                  <img
                    className="inline h-8 w-14"
                    src={`http://localhost:4000/img/courses/${item.photo}`}
                  />
                  <span className="ml-4 text-sm  font-bold text-black">
                    {item.title}
                  </span>
                  <p className="ml-4 text-xs font-bold text-gray-600">
                    By.{item.instructor}
                  </p>
                </li>
              ))}
          </ul>
        )}
      </InputGroup>
                </Form>*/

          




function WishList() {
  const wishList = useSelector((state) => state.wishList.wishList);
  const [query, setQuery] = useState('');
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    setQuery('');
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="px-24 py-5 text-right">
        <div className="relative">
          <input
            className="border-1 w-28 border-stone-900 px-4 py-2 text-sm  placeholder:text-stone-400 focus:outline-none  sm:w-64 "
            placeholder="Search my courses"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <AiOutlineSearch className="absolute top-0 h-[37px] text-xl w-10 p-1 right-0 cursor-pointer hover:bg-stone-600 bg-stone-800 text-stone-100 " />
        </div>
      </form>
      <div className="mx-5 flex flex-grow flex-wrap justify-between px-5 py-5">
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
    </>
  );
}

export default WishList;
