/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import { Link, NavLink, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LiaGreaterThanSolid } from 'react-icons/Lia';

function CategoriesPage() {
  const { _id } = useParams();
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

  useEffect(
    function () {
      axiosInstance.get(`/categories/${_id}/subCategories`).then((res) => {
        console.log(res.data.data.subCategories);
        setSubCategories(res.data.data.subCategories);
      });
    },
    [_id],
  );

  return (
    <>
      <Helmet>
        <title>{`${category.name} Online Courses | Udemy`}</title>
      </Helmet>
      <div className="relative flex cursor-pointer justify-around pb-3 pt-3 shadow-md shadow-gray-300">
        <NavLink className="font-bold text-gray-950 no-underline hover:text-violet-600">
          {category.name}
          <LiaGreaterThanSolid className="text-1xl inline text-gray-500" />
        </NavLink>
        {subCategories.map((subCategory) => (
          <NavLink
            className="text-gray-950 no-underline hover:text-violet-600"
            key={subCategory._id}
          >
            {subCategory.name}
          </NavLink>
        ))}
      </div>
      <div className="ml-4 mt-5">
        <h2 className="mb-5 font-bold">{category.name} Courses</h2>
        <h4 className="mb-3 font-bold">Courses to get you started</h4>
        <div className="border-b-2">
          <Link className="border-b-2 border-black pb-1 font-bold text-gray-950 no-underline">
            Most popular
          </Link>
          <Link className="pl-4 font-bold text-gray-500 no-underline">
            Trending (carousel)
          </Link>
        </div>
      </div>

      <div className="ml-4 mt-5">
        <h4 className="mb-3 font-bold">Featured course</h4>
      </div>
      <div className="ml-4 mt-5">
        <h4 className="mb-5 font-bold">Popular topics</h4>
        <div className="flex flex-wrap justify-evenly">
          {subCategories.map((subCategory) => (
            <div className="" key={subCategory._id}>
              <NavLink className=" border-1 p-3 font-bold text-gray-950 no-underline hover:bg-gray-100">
                {subCategory.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoriesPage;
