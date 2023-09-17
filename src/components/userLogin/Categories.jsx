/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ToolTip from "./ToolTip";
import axiosInstance from "../../axiosConfig/instance";
import { Link, NavLink, useParams } from "react-router-dom";

//onMouseLeave={handleClose}

function Categories() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [categories, setCategories] = useState([]);
    const {_id} = useParams();
    // console.log(id);

    useEffect(function(){
      axiosInstance
        .get('/categories')
        .then((res) => {
          console.log(res.data.data.documents);
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
      <div className=" relative flex cursor-pointer justify-around pb-3 pt-3 shadow-md shadow-gray-300">
        {categories.map((category) => (
          <>
            <Link
              className="text-gray-900 no-underline hover:text-violet-600"
              onMouseOver={handleShow}
              onMouseLeave={handleClose}
              key={category._id}
              to={`/categoriesPage/${category.name}`}
            >
              {category.name}
            </Link>
          </>
        ))}
        {showTooltip && (
          <ToolTip
            handleShow={handleShow}
            handleClose={handleClose}
            
          />
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
