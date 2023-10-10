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
    const [currentId, setCurrentId] = useState(null);
    

    useEffect(function(){
      axiosInstance
        .get('/categories')
        .then((res) => {
          console.log(res.data.data.documents);
          const numOfCategories = res.data.data.documents.slice(0,10);
          setCategories(numOfCategories);
        }).catch(err => console.log(err));
    }, []);

    function handleShow(id){
        setShowTooltip(true);
        setCurrentId(id);
    }
    function handleClose(){
        setShowTooltip(false);
    }
    return (
      <div className=" relative flex flex-col lg:flex-row cursor-pointer justify-around pb-3 pt-3  xs:p-2 shadow-md shadow-gray-300">
        {categories.map((category) => (
          <>
            <Link
              className="text-gray-900 pt-0 md:p-2 sm:p-2 text-xs no-underline hover:text-violet-600"
              onMouseOver={() => handleShow(category._id)}
              onMouseLeave={handleClose}
              key={category._id}
              to={`/categoriesPage/${category._id}`}
            >
              {category.name}
            </Link>
          </>
        ))}
        {showTooltip && (
          <ToolTip
            handleShow={handleShow}
            currentId={currentId}
            handleClose={handleClose}
          />
        )}
      </div>
    );
}


export default Categories
