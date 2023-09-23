import axios from 'axios';

//('http://localhost:4000/api/v1/users');
//('http://localhost:4000/api/v1/courses');
//('http://localhost:4000/api/v1/reviews');
//('http://localhost:4000/api/v1/categories/${id}');
//('http://localhost:4000/api/v1/subCategories');
//('http://localhost:4000/api/v1/subCategories/${id}/courses'); //poula
//('http://localhost:4000/api/v1//categories/${id}/subCategories');

//('127.0.0.1:4000/api/v1/users/InstructorId/courses') //Esraa And Alaa

//('http://localhost:4000/api/v1/carts');
//('http://localhost:4000/api/v1/wishLists');
//('http://localhost:4000/api/v1/enrolled');
//('http://localhost:4000/api/v1/buyings');


const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
});

export default axiosInstance;