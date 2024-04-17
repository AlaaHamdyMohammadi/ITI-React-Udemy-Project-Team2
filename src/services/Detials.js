import axiosInstance from '../axiosConfig/instance';

export const getCourse = () => {
  return axiosInstance.get('/courses/65071d2d013d7ac3ed537b23');
};
