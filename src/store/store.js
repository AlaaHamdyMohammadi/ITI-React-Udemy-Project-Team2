import { configureStore } from "@reduxjs/toolkit";
import navbar from "./slices/navbar";

const store=configureStore({
    reducer:{
        nav:navbar,
    }
})
export default store