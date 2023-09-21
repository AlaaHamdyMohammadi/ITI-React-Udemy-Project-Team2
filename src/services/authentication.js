/* eslint-disable no-unused-vars */
import axiosInstance from "../axiosConfig/instance";

export const loginUser = (data) => {
    return axiosInstance.post('/users/login', data);
}   

export const signupUser = (data) => {
    return axiosInstance.post('/users/signup', data);
}

export const getMe = () => {

    const token = localStorage.getItem('token');
    if(token){
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
        return axiosInstance.get('/users/me')

        // .then(res => {
        //     const user = res.data.data.document.username;
        //     console.log(user);
        //     testUser(user.username);
        //     //return user.username;

        // }).catch(err => {
        //     console.error('Error fetching user data:', err);
        //     throw err;
        // });
    }else{
        console.error('No token found.');
    }
}