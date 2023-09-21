/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import axiosInstance from '../../axiosConfig/instance';

// export default function ProfileSettings() {
//     const [photo, setPhoto] = useState(null);

//     const handlePhoto = (e) =>{
//         const file = e.target.files[0];
//         if(file){
//             setPhoto(file);
//         }else{
//             setPhoto(null);
//         }
//     }
//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         const data = new FormData();
//         if(photo){
//             data.append('photo', photo);
//         }
//         try{
//             const token = localStorage.getItem('token');
//             const config = {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//                 //'Content-Type': 'multipart/form-data',
//               },
//             };
//             const res = await axiosInstance.patch('/users/updateMe', data, config);
//             if (res.status === 200) {

//               console.log(res);
//             } else {

//               console.error('Error updating profile:', res);
//             }
//         }catch(err){
//             console.log(err);
//         }
//     }
//     return (
//         <>
//             {/* Header */}
//             <div>
//                 {/* Tabs */}
//                 <div className="container d-flex">
//                     <div className="container col-6">
//                         <div className="row">
//                             <ul className="nav nav-tabs">
//                                 <li className="nav-item mt-4">
//                                     {/* LINE */}

//                                     {/* Content */}
//                                     <div style={{ width: "30rem" }}>
//                                         <p className="h6 fw-bold ms-3">Image preview</p>
//                                         <small className="h8 fw-lighter text-secondary mt-3 ms-3">Minimum 200x200 pixels, Maximum 6000x6000 pixels</small>

//                                         <div className="col-12 box mt-2 ms-3 d-flex justify-content-center">
//                                             <img src="./../../../public/images/profile/anonymous.png" alt="anonymous-logo" />
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <form onSubmit={handleSubmit} className="ms-3 col-12">
//                                     <label htmlFor="formFile" className="form-label"></label>
//                                     <input onChange={handlePhoto} name="photo" accept="image/*" className="form-control rounded-0 border-dark" type="file" id="formFile" />
//                                     <div className="btn text-light mt-4 ms-3 rounded-0 mb-3 pt-2 pb-2 pe-4 ps-4 fs-5 fw-bold"
//                                         style={{ backgroundColor: "#1c1d1f" }}>
//                                         Save
//                                     </div>
//                                 </form>
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Tab 1 Content Right Column */}
//                     <div className="container col-6">
//                         <div className="row">
//                             {/* Add your content for the right column here */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

import React, { useContext, useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import { authentication } from '../../contextConfig/authentication';

export default function ProfileSettings() {
  const [photoo, setPhoto] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
    // Fetch the user's profile photo from localStorage when the component mounts
    const storedUserPhoto = localStorage.getItem('userPhoto');
    if (storedUserPhoto) {
      setUserPhoto(storedUserPhoto);
    }
  }, []);
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    } else {
      setPhoto(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if (photoo) {
      data.append('photo', photoo);
    }

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axiosInstance.patch('/users/updateMe', data, config);
      console.log(res.status);
      if (res.status === 201) {
        console.log(res);
        const updatedUserPhoto  = res.data.data.photo;
        // Save the updated user photo URL to localStorage
        localStorage.setItem('userPhoto', updatedUserPhoto );

        // Update the state to reflect the new photo
        setUserPhoto(updatedUserPhoto );
      } else {
        console.error('Error updating profile:', res);
      }
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  return (
    <>
      {/* Header */}
      <div>
        {/* Tabs */}
        <div className="d-flex container">
          <div className="col-6 container">
            <div className="row">
              <ul className="nav nav-tabs">
                <li className="nav-item mt-4">
                  {/* LINE */}
                  {/* Content */}
                  <div style={{ width: '30rem' }}>
                    <p className="h6 fw-bold ms-3">Image preview</p>
                    <small className="h8 fw-lighter text-secondary ms-3 mt-3">
                      Minimum 200x200 pixels, Maximum 6000x6000 pixels
                    </small>
                    <div className="col-12 box d-flex justify-content-center ms-3 mt-2">
                      {/* Display the selected image if available */}
                      {photoo ? (
                        <img src={URL.createObjectURL(photoo)} alt="selected" />
                      ) : (
                        <img
                          src="./../../../public/images/profile/anonymous.png"
                          alt="anonymous-logo"
                        />
                      )}
                    </div>
                  </div>
                </li>
                <form onSubmit={handleSubmit} className="col-12 ms-3">
                  {/* Input for selecting an image */}
                  <label htmlFor="formFile" className="form-label">
                    Choose an image:
                  </label>
                  <input
                    onChange={handlePhoto}
                    name="photo"
                    accept="image/*"
                    className="form-control rounded-0 border-dark"
                    type="file"
                    id="formFile"
                  />
                  {/* Button to submit the form */}
                  <button
                    type="submit"
                    className="btn text-light rounded-0 fs-5 fw-bold mb-3 ms-3 mt-4 pb-2 pe-4 ps-4 pt-2"
                    style={{ backgroundColor: '#1c1d1f' }}
                  >
                    Save
                  </button>
                </form>
              </ul>
            </div>
          </div>
          {/* Tab 1 Content Right Column */}
          <div className="col-6 container">
            <div className="row">
              {/* Add your content for the right column here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
