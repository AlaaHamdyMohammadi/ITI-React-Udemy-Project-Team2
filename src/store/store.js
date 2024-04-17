import { configureStore } from '@reduxjs/toolkit';
import navbar from './slices/navbar';
import spinnerReducer from './slices/spinner';
import ScrollBarReducer from './slices/ScrollBar';
import category from './slices/categories';
import categoryCourses from './slices/categoryCourses';
import WishList from './slices/WishList';
import favoritesReducer from './slices/WishList';
import CartItems from './slices/CartItems';
import TotalCost from './slices/TotalCost';
import CatRatingFilteredCourses from './slices/CatRatingFilteredCourses';
import SubRatingFilteredCourses from './slices/SubRatingFilteredCourses';
import languageReducer from './slices/language';

const store = configureStore({
  reducer: {
    nav: navbar,
    category: category,
    categoryCourses: categoryCourses,
    spinner: spinnerReducer,
    ScrollBar: ScrollBarReducer,
    wishList: WishList,
    cartItems: CartItems,
    TotalCost: TotalCost,
    CatRatingFilteredCourses: CatRatingFilteredCourses,
    SubRatingFilteredCourses: SubRatingFilteredCourses,
    language: languageReducer,
    favorites: favoritesReducer,
  },
});
export default store;
