/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';

export default function ProfileSettings() {
  const [photoo, setPhoto] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
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
      //console.log(res.status);
      if (res.status === 201) {
        //console.log(res);
        const updatedUserPhoto = res.data.data.photo;
        localStorage.setItem('userPhoto', updatedUserPhoto);

        setUserPhoto(updatedUserPhoto);
      } else {
        console.error('Error updating profile:', res);
      }
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  return (
    <div>
      <div className="d-flex container">
        <div className="col-6 container">
          <div className="row">
            <ul className="nav nav-tabs">
              <li className="nav-item mt-4">
                <div style={{ width: '30rem' }}>
                  <p className="h6 fw-bold ms-3">Image preview</p>
                  <small className="h8 fw-lighter text-secondary ms-3 mt-3">
                    Minimum 200x200 pixels, Maximum 6000x6000 pixels
                  </small>
                  <div className="col-12 box d-flex justify-content-center ms-3 mt-2">
                    {photoo ? (
                      <img src={URL.createObjectURL(photoo)} alt="selected" />
                    ) : (
                      <img
                        src="/images/profile/anonymous.png"
                        alt="anonymous-logo"
                      />
                    )}
                  </div>
                </div>
              </li>
              <form onSubmit={handleSubmit} className="col-12 ms-3">
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
        <div className="col-6 container">
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}
