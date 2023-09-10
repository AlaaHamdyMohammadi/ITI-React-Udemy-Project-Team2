/* eslint-disable no-unused-vars */
import React from 'react';

export default function ProfileSettings() {
    return (
        <>
            {/* Header */}
            <div>

                {/* Tabs */}
                <div className="container d-flex">
                    <div className="container col-6">
                        <div className="row">
                            <ul className="nav nav-tabs">
                                <li className="nav-item mt-4">
                                    {/* LINE */}


                                    {/* Content */}
                                    <div style={{ width: "30rem" }}>
                                        <p className="h6 fw-bold ms-3">Image preview</p>
                                        <small className="h8 fw-lighter text-secondary mt-3 ms-3">Minimum 200x200 pixels, Maximum 6000x6000 pixels</small>

                                        <div className="col-12 box mt-2 ms-3 d-flex justify-content-center">
                                            <img src="./../../../public/images/profile/anonymous.png" alt="anonymous-logo" />
                                        </div>
                                    </div>
                                </li>
                                <div className="ms-3 col-12">
                                    <label htmlFor="formFile" className="form-label"></label>
                                    <input className="form-control rounded-0 border-dark" type="file" id="formFile" />
                                </div>
                                <div className="btn text-light mt-4 ms-3 rounded-0 mb-3 pt-2 pb-2 pe-4 ps-4 fs-5 fw-bold"
                                    style={{ backgroundColor: "#1c1d1f" }}>
                                    Save
                                </div>
                            </ul>
                        </div>
                    </div>

                    {/* Tab 1 Content Right Column */}
                    <div className="container col-6">
                        <div className="row">
                            {/* Add your content for the right column here */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

