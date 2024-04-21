/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../axiosConfig/instance";


function ToolTip({ handleShow, handleClose, currentId }) {
  const [subCategories, setSubCategories] = useState([]);

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
          <NavLink className='no-underline text-white' to={`/subCategories/${subCategory._id}`}>
            <h6 className="pl-4 text-sm">{subCategory.name}</h6>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default ToolTip
