/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import axiosInstance from "../../axiosConfig/instance";
import { useParams } from "react-router-dom";


function CategoriesPage() {
  const {_id} = useParams();
  const [category, setCategory] = useState({});
  //console.log(_id)

  useEffect(
    function () {
      axiosInstance.get(`/categories/${_id}`).then((res) => {
        const numOfCategories = res.data.data.document;
        console.log(numOfCategories);
        setCategory(numOfCategories);
      });
    },
    [_id],
  );

  return (
    <div>
      <h1>category: {category.name}</h1>
    </div>
  );
}

export default CategoriesPage
