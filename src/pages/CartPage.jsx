/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { authentication } from '../contextConfig/authentication';
import CoursesCarousel from '../components/Courses/CoursesCarousel';
import { setWishList } from '../store/slices/WishList';
import { setCartItems } from '../store/slices/CartItems';
import { setTotalCost } from '../store/slices/TotalCost';
import Checkout from '../components/Checkout';
import { CiShoppingTag } from 'react-icons/ci';
import { AiFillStar } from 'react-icons/ai';
import { Helmet } from 'react-helmet';
import './CartPage.css';

const BASE_URL = 'https://udemy-clone-uief.onrender.com';

function CartPage() {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.wishList);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const TotalPrice = useSelector((state) => state.TotalCost.TotalCost);
  const { isLogin } = useContext(authentication);
  const { t } = useTranslation();

  const navigate = useNavigate();

  function addToWishList(course) {
    var check = wishList.map((wish) => {
      if (wish._id == course._id) {
        return true;
      } else {
        return false;
      }
    });
    //console.log(check);
    var wish = [];
    if (check.includes(true) || check == []) {
      dispatch(setWishList([...wishList]));
      wish = [...wishList];
    } else {
      dispatch(setWishList([...wishList, course]));
      wish = [...wishList, course];
    }
    localStorage.setItem('wishList', JSON.stringify(wish));
    //console.log(wishList);
  }

  function removeCart(course) {
    var check = cartItems.map((item) => {
      if (item._id == course._id) {
        return true;
      } else {
        return false;
      }
    });
    var i = check.indexOf(true);
    var arr = [...cartItems].filter((item) => {
      return item._id != course._id;
    });
    dispatch(setCartItems([...arr]));
    var price = TotalPrice;
    if (course.price) {
      dispatch(setTotalCost(TotalPrice - course.price));
      price = TotalPrice - course.price;
    } else if (course.DiscountPrice) {
      dispatch(setTotalCost(TotalPrice - course.DiscountPrice));
      price = TotalPrice - course.DiscountPrice;
    }
    localStorage.setItem('cartItems', JSON.stringify(arr));
    localStorage.setItem('TotalPrice', price);
  }

  useEffect(
    function () {
      //console.log(wishList);
    },
    [wishList, cartItems],
  );

  return (
    <>
      <Helmet>
        <title>Online Courses - Learn Anything, On Your Schedule | Udemy</title>
      </Helmet>
      <div className="container py-5">
        <h1 className="font-bold">{t('shopping_cart')}</h1>
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className=" mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">{cartItems.length} course in cart</h5>
                <hr className="my-1" />
              </div>
              <div className="card-body">
                {/* <!-- Single item --> */}
                {cartItems.map((item) => {
                  return (
                    <div className="row" key={item._id}>
                      <div className="col-lg-3 col-md-12 mb-lg-0 mb-4">
                        {/* <!-- Image --> */}
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          {/* <div className='bg-[url(./../../public/images/cart/php.jpeg)]'></div> */}
                          <img
                            src={`${BASE_URL}/img/courses/${item.photo}`}
                            className="h-50 w-full object-cover"
                            alt={item.title}
                          />
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6  mb-lg-0 mb-4">
                        {/* <!-- Data --> */}
                        <p className="mb-1">
                          <strong>{item.title}</strong>
                        </p>
                        <p className="mb-0 pb-1 text-sm/[17px]">
                          {' '}
                          {item.instructor}
                        </p>
                        <div className="update mt-0">
                          {item.NumStd > 1000 ? (
                            <span className="bestseller">Best Seller</span>
                          ) : (
                            ''
                          )}
                          <span className="recently mx-2">
                            Updated Recently
                          </span>
                        </div>

                        <span className="star">
                          {' '}
                          <span className="flex flex-row ">
                            <span>{item.rating}</span>
                            <span className="mt-1 flex flex-row">
                              <AiFillStar />
                            </span>
                          </span>
                        </span>
                        <span className="text-sm/[17px]">
                          ({item.NumRating} ratings)
                        </span>
                      </div>

                      <div className=" col-lg-4 col-md-6 mb-lg-0 relative  mb-4 flex flex-row ">
                        <div className="absolute inset-y-0 	left-6   flex flex-col text-sm">
                          <a
                            href="#"
                            onClick={() => removeCart(item)}
                            className="text-violet-600"
                          >
                            Remove
                          </a>
                          <a
                            href="#"
                            onClick={() => addToWishList(item)}
                            className="text-violet-600"
                          >
                            Add to wishList
                          </a>
                        </div>

                        <div className="price  absolute inset-y-0 right-4 ">
                          <div className="absolute inset-x-0 top-0 mb-4 rotate-180 transform text-violet-500 ">
                            <CiShoppingTag className="ShoppingTag" />
                          </div>
                          <strong className="my-4 text-sm text-violet-400 ">
                            {item.DiscountPrice ? 'E$' + item.price : ''}
                          </strong>
                          <div className=" px-2 text-sm text-gray-400  line-through">
                            {item.DiscountPrice
                              ? 'E$' + item.DiscountPrice
                              : 'E$' + item.price}{' '}
                          </div>
                        </div>
                      </div>
                      <hr className="my-2" />
                    </div>
                  );
                })}
                {/* <!-- Single item --> */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" mt-4">
              <div className="card-header  total py-3">
                <h5 className="mb-0">Total:</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center mb-3 border-0 px-0">
                    <div className="price">
                      <strong>E${TotalPrice}</strong>
                    </div>
                  </li>
                </ul>
                {isLogin ? (
                  <Checkout cartItems={cartItems} />
                ) : (
                  <button
                    type="button"
                    className=" checkout border bg-violet-600 px-4 py-2 font-bold text-white hover:bg-violet-800  "
                    onClick={() => navigate('/checkout')}
                  >
                    Login to checkout
                  </button>
                )}
                <hr className="my-4 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-4 p-4">
        <h3 className="pb-3">{t('You might also like')}</h3>
        <CoursesCarousel />
      </div>
    </>
  );
}

export default CartPage;
