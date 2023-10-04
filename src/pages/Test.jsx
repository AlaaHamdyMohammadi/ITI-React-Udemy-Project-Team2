/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig/instance';

function Test() {
  const [courses, setCourses] = useState([]);
  const [price, setprice] = useState(299.99);
  const [sort, setSort] = useState({ sort: 'rating', order: 'desc' });
  const [rating, setrating] = useState(1);
  const [duration, setduration] = useState(1);

  //  const handleFilter = async (filterObj) => {
  //     try{
  //         const res = await axiosInstance.get(`/courses?filter=${JSON.stringify(filterObj)}`)
  //         setCourses(res.data.data.courses);
  //     }catch(err){
  //         console.log(err);
  //?price=${price}&duration=${duration}&rating=${rating}
  //     }
  //  };
  useEffect(
    function () {
      axiosInstance
        .get(`/courses?price=${price}&sort=${sort.sort},${sort.order}`)
        .then((res) => {
          console.log(res.data.data.courses);
          setCourses(res.data.data.courses);
        });
    },
    [duration, price, rating, sort.order, sort.sort],
  );

  const handleFilterClick = () => {
    const filterObj = {};

    if (price) {
      filterObj.price = parseFloat(price);
    }

    if (rating) {
      filterObj.rating = parseFloat(rating);
    }

    if (duration) {
      filterObj.duration = parseFloat(duration);
    }
  };
  return (
    <>
      <div>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setrating(e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setduration(e.target.value)}
        />
        <button onClick={handleFilterClick}>Apply Filters</button>
      </div>
      {courses.map((course) => (
        <div className="flex justify-between" key={course._id}>
          <h5>{course.title}</h5>
          <h5>{course.price}</h5>
        </div>
      ))}
    </>
  );
}

export default Test;
