/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/instance';
import ToolTip from './ToolTip';

function Categories() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  useEffect(function () {
    axiosInstance
      .get('/categories')
      .then((res) => {
        //console.log(res.data.data.documents);
        const numOfCategories = res.data.data.documents.slice(0, 10);
        setCategories(numOfCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleShow(id) {
    setShowTooltip(true);
    setCurrentId(id);
  }
  function handleClose() {
    setShowTooltip(false);
  }
  return (
    <div className=" xs:p-2 relative flex cursor-pointer flex-col justify-around pb-3 pt-3  shadow-md shadow-gray-300 lg:flex-row">
      {categories.map((category) => (
        <>
          <Link
            className="pt-0 text-xs text-gray-900 no-underline hover:text-violet-600 sm:p-2 md:p-2"
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

export default Categories;
