import { configureStore } from "@reduxjs/toolkit";
import navbar from "./slices/navbar";
import spinnerReducer from "./slices/spinner";
import ScrollBarReducer from './slices/ScrollBar';

const store = configureStore({
  reducer: {
    nav: navbar,
    spinner: spinnerReducer,
    ScrollBar: ScrollBarReducer,
  },
});
export default store