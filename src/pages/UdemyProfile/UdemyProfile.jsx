/* eslint-disable no-unused-vars */
import React from 'react';
import ProfilePicture from './../ProfilePicture/ProfilePicture'
import { NavLink, Outlet } from 'react-router-dom';
export default function UdemyProfile() {
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
                  <div className="form-group mb-3 ms-3">
                    <label htmlFor="exampleInputFirstName" className="mb-1">
                      <small className="fw-bold">First Name</small>
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-0 me-5 shadow-none"
                      id="exampleInputFirstName"
                      placeholder="Name *"
                    />
                  </div>
                  <div className="form-group mb-3 ms-3">
                    <label htmlFor="exampleInputSecondName" className="mb-1">
                      <small className="fw-bold">Last Name</small>
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-0 me-5 shadow-none "
                      id="exampleInputSecondName"
                      placeholder="Name *"
                    />
                  </div>
                  <div className="form-group mb-3 ms-3">
                    <label htmlFor="exampleInputHeadline" className="mb-1">
                      <small className="fw-bold">Heading</small>
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-0 me-5  shadow-none"
                      id="exampleInputHeadline"
                      placeholder="Instructor at Udemy 60"
                    />
                  </div>
                  <div className="form-group mb-3 ms-3">
                    <label htmlFor="exampleInputBiography" className="mb-1">
                      <small className="fw-bold">Biography</small>
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-0 me-5 pb-5 shadow-none "
                      id="exampleInputBiography"
                    />
                  </div>
                  <p
                    className="text-secondary col-12 ms-3"
                    style={{ fontSize: '0.65rem' }}
                  >
                    To help learners learn more about you, your bio should
                    reflect your Credibility, Empathy, Passion, and Personality.
                    Your biography should have at least 50 words, links and
                    coupon codes are not permitted.
                  </p>
                  <div className="pe-3">
                    <select
                      className="form-select border-dark rounded-0 mb-3 ms-3 shadow-none"
                      aria-label="Default select example"
                    >
                      <option value="1">English (US)</option>
                      <option value="2">Español (España)</option>
                      <option value="3">Français (France)</option>
                      <option value="4">Italiano</option>
                      <option value="5">Polski</option>
                      <option value="6">Deutsch</option>
                    </select>
                  </div>
                  <div
                    className="btn text-light rounded-0 fs-5 fw-bold mb-3 ms-3 pb-2 pe-4 ps-4 pt-2 shadow-none"
                    style={{ backgroundColor: '#1c1d1f' }}
                  >
                    Save
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Tab 1 Content Right Column */}
        <div className="col-6 container">
          <div className="row">
            <ul className="nav nav-tabs mt-2">
              <li className="nav-item ">
                <div className="col-12 tab-content pt-3">
                  <div className="form-group mb-3 ms-3">
                    <label htmlFor="exampleInputWebsite" className="mb-1">
                      <small className="fw-bold">Website</small>
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-0 me-5`"
                      id="exampleInputWebsite"
                      placeholder="Url"
                      style={{ cursor: 'not-allowed' }}
                    />
                  </div>
                  {/* Twitter */}
                  <div className="form-group mb-3 ms-3">
                    <label htmlFor="exampleInputTwitter" className="mb-1">
                      <small className="fw-bold">Twitter</small>
                    </label>
                    <div className="d-flex">
                      <span className="col-5">
                        <input
                          type="text"
                          className="form-control border-dark rounded-0 bg-light me-5 "
                          id="exampleInputTwitter"
                          placeholder="https://www.twitter.com"
                          disabled
                        />
                      </span>
                      <span className="col-7">
                        <input
                          type="text"
                          className="form-control border-dark rounded-0 me-5 "
                          id="exampleInputTwitter"
                          placeholder="Username"
                        />
                      </span>
                    </div>
                  </div>
                  {/* Facebook */}
                  <div className="form-group mb-3 ms-3">
                    <label htmlFor="exampleInputFacebook" className="mb-1">
                      <small className="fw-bold">Facebook</small>
                    </label>
                    <div className="d-flex">
                      <span className="col-6">
                        <input
                          type="text"
                          className="form-control border-dark rounded-0 bg-light me-5 "
                          id="exampleInputFacebook"
                          placeholder="https://www.facebook.com"
                          disabled
                        />
                        `
                      </span>
                      <span className="col-6">
                        <input
                          type="text"
                          className="form-control border-dark rounded-0 me-5"
                          id="exampleInputFacebook"
                          placeholder="Username"
                        />
                      </span>
                    </div>
                  </div>
                  {/* LinkedIn */}
                  <div className="form-group mb-3 ms-3">
                    <label htmlFor="exampleInputLinkedIn" className="mb-1">
                      <small className="fw-bold">LinkedIn</small>
                    </label>
                    <div className="d-flex">
                      <span className="col-5">
                        <input
                          type="text"
                          className="form-control border-dark rounded-0 bg-light me-5"
                          id="exampleInputLinkedIn"
                          placeholder="https://www.linkedin.com"
                          disabled
                        />
                      </span>
                      <span className="col-7">
                        <input
                          type="text"
                          className="form-control border-dark rounded-0 me-5"
                          id="exampleInputLinkedIn"
                          placeholder="Username"
                        />
                      </span>
                    </div>
                  </div>
                  {/* Youtube */}
                  <div className="form-group mb-3 ms-3">
                    <label htmlFor="exampleInputYoutube" className="mb-1">
                      <small className="fw-bold">Youtube</small>
                    </label>
                    <div className="d-flex">
                      <span className="col-5">
                        <input
                          type="text"
                          className="form-control border-dark rounded-0 bg-light me-5"
                          id="exampleInputYoutube"
                          placeholder="https://www.youtube.com"
                          disabled
                        />
                      </span>
                      <span className="col-7">
                        <input
                          type="text"
                          className="form-control border-dark rounded-0 me-5 "
                          id="exampleInputYoutube"
                          placeholder="Username"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
