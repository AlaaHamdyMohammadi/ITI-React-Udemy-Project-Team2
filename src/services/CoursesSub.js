import axiosInstance from '../axiosConfig/instance';

export const getCourseSub = () => {
  return axiosInstance.get('subCategories/6508bfdf4e4c2aafd7756269/courses/');
};
