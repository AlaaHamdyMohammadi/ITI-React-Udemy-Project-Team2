/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig/instance";
import { useParams } from "react-router-dom";
import axios from "axios";

/* eslint-disable no-unused-vars */

//{subCategories.map((subCategory) => <div key={subCategory.id}>{subCategory.name}</div>) }
//<div>
//   {subCategory.category.map(cat => <div key={cat.id}>{cat.name}</div>)}
// </div>

// useEffect(function () {
  //   axiosInstance
  //     .get('/categories')
  //     .then((res) => {
  //       //console.log(res.data.data.documents);
  //       //const numOfCategories = res.data.data.documents.slice(0, 10);
  //       setCategory(res.data.data.documents);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(function(){
  //   axiosInstance
  //     .get(`/subCategories`)
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setSubCategories(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

function ToolTip({ handleShow, handleClose, currentId }) {
  const [subCategories, setSubCategories] = useState([]);

  //`/subCategories/${currentId}/subCategories`
  useEffect(() => {
    axiosInstance
      .get(`/categories/${currentId}/subCategories`)
      .then((res) => {
        //console.log(res.data.data.subCategories);
        setSubCategories(res.data.data.subCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentId]);

  return (
    <div
      style={{ backgroundColor: '#2d2f31' }}
      className="w-100 absolute left-0 top-8 z-10 flex justify-center p-2 text-center  text-white"
      onMouseOver={handleShow}
      onMouseLeave={handleClose}
    >
      {subCategories.map((subCategory) => (
        <div className="text-xs" key={subCategory._id}>
          <h6 className="pl-4 text-sm">{subCategory.name}</h6>
        </div>
      ))}
    </div>
  );
}

export default ToolTip
