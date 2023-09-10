/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <div>

            <div className="container">
                <h3 className="fw-bold fs-2 mt-5 pt-4" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
                    Profile & settings
                </h3>
            </div>

            <div className="container">
                <div className="d-flex align-items-center my-3 gap-4">
                    <a href='UdemyProfile' className='text-secondary fw-bold' style={{ textDecoration: "none" }}><span>UdemyProfile</span></a>
                    <a href='ProfilePicture' className='text-secondary fw-bold' style={{ textDecoration: "none" }}><span>ProfilePicture</span></a>
                    <a href='PrivacySettings' className='text-secondary fw-bold' style={{ textDecoration: "none" }}><span>PrivacySettings</span></a>
                </div>
            </div>

            <div className="container border-top">
                <Outlet />
            </div>
        </div>
    )
}

export default Home