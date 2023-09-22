/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import axiosInstance from "../../axiosConfig/instance";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LiaGreaterThanSolid } from 'react-icons/Lia';
import Categories from "../../components/userLogin/Categories";
// import './CategoriesPage.css'

function CategoriesPage() {
  const {_id} = useParams();
  const [category, setCategory] = useState({});
  const [subCategories, setSubCategories] = useState([]);

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

  useEffect(function(){
    axiosInstance.get(`/categories/${_id}/subCategories`).then(res => {
      console.log(res.data.data.subCategories);
      setSubCategories(res.data.data.subCategories);
    });
  }, [_id]);

  return (
    <>
      <Helmet>
        <title>{`${category.name} Online Courses | Udemy`}</title>
      </Helmet>
      <div className="relative flex cursor-pointer justify-around pb-3 pt-3 shadow-md shadow-gray-300">
        <span className="">
          {category.name} <LiaGreaterThanSolid className="text-black inline text-1xl"/>
        </span>
        {subCategories.map((subCategory) => <div key={subCategory._id}>{subCategory.name}</div>)}
      </div>
    </>
  );
}

export default CategoriesPage
