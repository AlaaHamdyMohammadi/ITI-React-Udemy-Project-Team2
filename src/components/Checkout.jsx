/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { useState } from "react"
// import { CardElement, useElements, useStripe } from "@stripe/stripe-js"
// import axiosInstance from "../axiosConfig/instance"
//const PUBLIC_KEY = 'pk_test_51NiJyfH0IkXldde8Oao47b2u1KMvHG8BVubJ5CSSpg8D2RwPaTQY8k16Scb6hXig2UBoEUWzuzRNzDLyEhqcTSvS00dkpji8U0';
//const stripeTestPromise = loadStripe(PUBLIC_KEY);

import { useContext } from "react";
import axiosInstance from "../axiosConfig/instance";
import { authentication } from "../contextConfig/authentication";
// import { useHistory } from 'react-router-dom';
import axios from "axios";

function Checkout({ cartItems }) {
    const url = 'http://localhost:4000/api/v1/buyings';
    const token = localStorage.getItem('token');
    // const history = useHistory();

  const handleCheckout = () => {
    //userId: user._id
    console.log(cartItems);
    axios
      .post(
        `${url}/checkout-session`,
        { cartItems },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        if (res.data.session.url) {
          window.location.href = res.data.session.url;
          console.log('ok', res);
        }
      })
      .catch((err) => {
        console.log('Error In Front: ', err.message);
      }); 
  };
  return (
    <>
      <button
        className="checkout border bg-violet-600 px-4 py-2 font-bold text-white hover:bg-violet-800  "
        onClick={() => handleCheckout()}
      >
        Check Out
      </button>
    </>
  );
}

export default Checkout
