/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ProfilePicture from './../ProfilePicture/ProfilePicture'
import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../../axiosConfig/instance';
export default function UdemyProfile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function userData(){
      try{
        const res = await axiosInstance.get('/users/me');
        if (res.ok) {
          setUsername(username);
          setEmail(email);
        } else {
          console.error('Failed to fetch user data');
        }
      }catch(err){
        console.log('error', err)
      }
    }
    userData();
  }, [email, username]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);

    try{
      const res = await axiosInstance('/users/updateMe', {method: 'PATCH', body: formData});
      if(res.ok){
        setMessage('successfully')
      }else{
        setMessage('Faild')
      }
    }catch(err){
      console.log('Error: ',err);
    }
  }
  return (
    <>
      {/* Tabs */}

      <div className="d-flex container">
        <div className="col-6 container">
          <div className="row">
            <ul className="nav nav-tabs">
              <li className="nav-item mt-4">
                {/* Tab 1 Left Content */}
                <div className="tab-content">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3 ms-3">
                      <label htmlFor="exampleInputFirstName" className="mb-1">
                        <small className="fw-bold">Name</small>
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control border-dark rounded-0 me-5 shadow-none"
                        id="exampleInputFirstName"
                        placeholder="Name *"
                      />
                    </div>
                    <div className="form-group mb-3 ms-3">
                      <label htmlFor="exampleInputSecondName" className="mb-1">
                        <small className="fw-bold">Email</small>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control border-dark rounded-0 me-5 shadow-none "
                        id="exampleInputSecondName"
                        placeholder="Email *"
                      />
                    </div>
                    <button className="btn btn-primary" type="submit">
                      Update Profile
                    </button>
                  </form>
                  {message && <p>{message}</p>}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Tab 1 Content Right Column */}
      </div>
    </>
  );
}
