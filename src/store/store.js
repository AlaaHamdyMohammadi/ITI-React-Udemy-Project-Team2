import { configureStore } from "@reduxjs/toolkit";
import navbar from "./slices/navbar";
import spinnerReducer from "./slices/spinner";

const store=configureStore({
    reducer:{
        nav:navbar,
        spinner: spinnerReducer,
    }
})
export default store