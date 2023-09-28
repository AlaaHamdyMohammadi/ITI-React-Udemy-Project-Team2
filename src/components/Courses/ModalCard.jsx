/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Button from '../Button';
 
function ModalCard({ handleShow, handleClose }) {
  return (
    <div
      className="absolute left-60 -top-5 z-10 w-96 border-2 bg-white p-2 text-sm"
      onMouseOver={handleShow}
      onMouseLeave={handleClose}
    >
      <h6 className="mt-2 w-64 font-bold">
        The Complete Python Bootcamp From Zero to Hero in Python
      </h6>
      <span className="w-fit bg-lime-200 p-1.5 text-xs text-lime-950">
        Best Seller
      </span>
      <span className="pl-2">Updated September 2023</span>
      <p className="text-sm">15 total hours . Beginner Level . Subtitles, CC</p>
      <p className="">
        Master Python by building 100 projects in 100 days. Learn data science,
        automation, build websites, games and apps!
      </p>
      <p className="flex">
        <BsCheckLg className=" text-3xl" />
        FULLY UPDATED FOR CLF-C01 & CLF-C02: Pass the AWS Certified Cloud
        Practitioner Certification
      </p>
      {/*<p className="flex">
        <BsCheckLg className=" text-3xl" />
        FULLY UPDATED FOR CLF-C01 & CLF-C02: Pass the AWS Certified Cloud
        Practitioner Certification
  </p>*/}

      <div className="flex items-center">
        <Button
          width="w-72"
          backgroundColor="bg-violet-600 hover:bg-violet-800"
          text="text-white"
        >
          Add to cart
        </Button>
        <AiOutlineHeart className="ml-2 rounded-full border-2 border-black p-1 text-5xl hover:bg-gray-300" />
      </div>
    </div>
  );
}

export default ModalCard;
