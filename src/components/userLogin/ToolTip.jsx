/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig/instance";
import { useParams } from "react-router-dom";

/* eslint-disable no-unused-vars */

//{subCategories.map((subCategory) => <div key={subCategory.id}>{subCategory.name}</div>) }

function ToolTip({handleShow, handleClose}) {
  const [subCategories, setSubCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const {id} = useParams();


  useEffect(function () {
    axiosInstance
      .get('/categories')
      .then((res) => {
        //console.log(res.data.data.documents);
        //const numOfCategories = res.data.data.documents.slice(0, 10);
        setCategory(res.data.data.documents);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(function(){
    axiosInstance
      .get(`/subCategories`)
      .then((res) => {
        console.log(res.data.data.documents);
        setSubCategories(res.data.data.documents);
      })
      .catch((err) => console.log(err));
  }, []);

    return (
      <div
        style={{ backgroundColor: '#2d2f31' }}
        className="w-100 absolute left-0 top-10 z-10 flex justify-center p-2 text-center text-white"
        onMouseOver={handleShow}
        onMouseLeave={handleClose}
      >
        {/*{subCategories.map((subCategory) => (
          <div key={subCategory.id}>
            <h3>{subCategory.name}</h3>
            <div>
              {subCategory.category.map(cat => <div key={cat.id}>{cat.name}</div>)}
            </div>
          </div>
        ))}*/}
      </div>
    );
}

export default ToolTip
