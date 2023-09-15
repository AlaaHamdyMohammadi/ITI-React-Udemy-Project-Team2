/* eslint-disable no-unused-vars */
import axiosInstance from "../axiosConfig/instance";

export const loginUser = (data) => {
    return axiosInstance.post('/users/login', data);
}   

export const signupUser = (data) => {
    return axiosInstance.post('/users/signup', data);
}