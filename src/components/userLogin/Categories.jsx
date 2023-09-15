/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ToolTip from "./ToolTip";
import axiosInstance from "../../axiosConfig/instance";
import { NavLink } from "react-router-dom";

function Categories() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(function(){
      axiosInstance
        .get('/categories')
        .then((res) => {
          //console.log(res.data.data.documents);
          const numOfCategories = res.data.data.documents.slice(0,10);
          setCategories(numOfCategories);
        }).catch(err => console.log(err));
    }, []);

    function handleShow(){
        setShowTooltip(true);
    }
    function handleClose(){
        setShowTooltip(false);
    }
    return (
      <div className="relative  mt-3 flex cursor-pointer justify-around">
        {categories.map((category) => (
          <NavLink
            className="text-gray-900 no-underline hover:text-violet-600"
            onMouseOver={handleShow}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
        {showTooltip && (
          <ToolTip handleShow={handleShow} handleClose={handleClose} />
        )}
      </div>
    );
}

// function List({ category, handleShow, handleClose }) {
//   <li
//     className="hover:text-violet-600"
//     onMouseOver={handleShow}
//     onMouseLeave={handleClose}
//   >
//     {category.name}
//   </li>;
// }

export default Categories
