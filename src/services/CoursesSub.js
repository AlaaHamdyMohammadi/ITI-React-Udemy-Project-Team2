import axiosInstance from "../axiosConfig/instance"


// const getURLParams = () => {
//     const params = {};
//     const urlSearchParams = new URLSearchParams(window.location.search);
//     for (const [key, value] of urlSearchParams) {
//       params[key] = value;
//     }
//     return params;
//   };
export const getCourseSub=()=>{
//     const urlParams = getURLParams();
// const id = urlParams.id;
// console.log(id);
    return axiosInstance.get('subCategories/6508bfdf4e4c2aafd7756269/courses/')
}