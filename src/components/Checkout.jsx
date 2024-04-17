/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import axios from 'axios';

function Checkout({ cartItems }) {
  const url = 'http://localhost:4000/api/v1/buyings';
  const token = localStorage.getItem('token');

  const handleCheckout = () => {
    //console.log(cartItems);
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
          //console.log('ok', res);
          localStorage.removeItem('cartItems');
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

export default Checkout;
