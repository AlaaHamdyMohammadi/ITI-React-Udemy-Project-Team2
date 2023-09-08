import { configureStore } from "@reduxjs/toolkit";
import navbar from "./slice/navbar";

const store=configureStore({
    reducer:{
        nav:navbar,
    }
})
export default store