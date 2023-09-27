import { configureStore } from "@reduxjs/toolkit";
import navbar from "./slices/navbar";
import spinnerReducer from "./slices/spinner";
import ScrollBarReducer from './slices/ScrollBar';
import category from './slices/categories';
import categoryCourses from './slices/categoryCourses'; 
const store = configureStore({
  reducer: {
    nav: navbar,
    category: category,
    categoryCourses:categoryCourses,
    spinner: spinnerReducer,
    ScrollBar: ScrollBarReducer,
  }, 
});
export default store