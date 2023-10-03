/* eslint-disable no-unused-vars */
// import { useState } from "react"
// import { CardElement, useElements, useStripe } from "@stripe/stripe-js"
// import axiosInstance from "../axiosConfig/instance"
//const PUBLIC_KEY = 'pk_test_51NiJyfH0IkXldde8Oao47b2u1KMvHG8BVubJ5CSSpg8D2RwPaTQY8k16Scb6hXig2UBoEUWzuzRNzDLyEhqcTSvS00dkpji8U0';
//const stripeTestPromise = loadStripe(PUBLIC_KEY);
function Checkout() {
    // const [success, setSuccess] = useState(false);
    // const stripe = useStripe();
    // const elements = useElements();
    // const handleSubmit = async(e) =>{
    //   e.preventDefault();
    //   const { error, paymentMethod } = await stripe.createPaymentMethod({
    //     type: 'card',
    //     card: elements.getElement(CardElement),
    //   });

    //   if (!error) {
    //     try {
    //       const { _id } = paymentMethod;
    //       const res = await axiosInstance.post(`/checkout-session/:courseID`, {
    //         amount: 100,
    //         _id,
    //       });
    //       if (res.data.success) {
    //         console.log('success');
    //         setSuccess(true);
    //       }
    //     } catch (err) {
    //       console.log('Error1', err);
    //     }
    //   } else {
    //     console.log('Error2', error.message);
    //   }
    // }
    return (
        <div>
            
        </div>
    )
}

export default Checkout
