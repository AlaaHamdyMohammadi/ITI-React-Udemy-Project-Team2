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

/*
this is my code in front:
import axios from "axios";

function Checkout({ cartItems }) {
    const url = 'http://localhost:4000/api/v1';
    const token = localStorage.getItem('token');
  const handleCheckout = () => {
    console.log(cartItems);
    axiosInstance
      .post(`/buyings/checkout-session`, cartItems, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
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

 
and this is my code in back:
exports.getCheckoutSession = async(req, res, next) => {
    try{ 
      // 1- Get the currently course
      //const course = await Course.findById(req.params.courseID);
      const line_items = req.body.cartItems.map(item => {
        return{
           price_data: {
              currency: "usd",
              product_data: {
                name: `${item.title} Course`,
                description: item.description,
                images: [item.photo],
                metadata:{
                  id: item._id
                }
              },
              unit_amount: item.price * 100, // Amount in cents
            },
            quantity: item,
        }
      })
      // 2- Create checkout session
      const session = await stripe.checkout.sessions.create({
        //Information about session
        //payment_method_types: ["card"],
        //success_url: `${req.protocol}://${req.get("host")}/`,
        success_url: `http://localhost:5173/my-learning`, //checkout-success
        cancel_url: `http://localhost:5173/login`,
        //customer_email: req.user.email,
        //client_reference_id: req.params.courseID,

        line_items,
        mode: "payment",
      });
      //console.log(session);

      // 3- Create session as response to send to the client
      res.status(200).json({
        status: "Success",
        session,
      });
    }catch(err){
        res.status(404).json({
          status: "Faild",
          message: err,
        });
    }
};

buyingRouter.post("/checkout-session",authController.protect, buyingController.getCheckoutSession);

why give me an error in axios.post ?
*/

import axios from "axios";




function Checkout({ cartItems }) {
    const url = 'http://localhost:4000/api/v1';
    const token = localStorage.getItem('token');
    
  const handleCheckout = () => {
    console.log(cartItems);
    axios
      .post(`${url}/buyings/checkout-session`, cartItems, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
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
