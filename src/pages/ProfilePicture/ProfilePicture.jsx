// import React from 'react';

export default function ProfileSettings() {
    return (
        <>
            {/* Header */}
            <div>
                <div className="container">
                    <h3 className="fw-bold fs-2 mt-5 pt-4" style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
                        Profile & settings
                    </h3>
                </div>

                {/* Tabs */}
                <div className="container d-flex">
                    <div className="container col-6">
                        <div className="row">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <div className="d-flex">
                                        <a className="Udemy-profile nav-link active text-secondary fw-bolder border-0"
                                            aria-current="page" href="./udemy-profile.html">
                                            Udemy profile
                                        </a>
                                        <a className="Profile-Picture nav-link text-secondary fw-bolder border-0"
                                            href="./profile-picture.html">
                                            Profile Picture
                                        </a>
                                        <a className="Privacy-Settings nav-link text-secondary fw-bolder border-0"
                                            href="./privacy-settings.html">
                                            Privacy Settings
                                        </a>
                                    </div>
                                    {/* LINE */}
                                    <div className="row">
                                        <hr className="container-fluid ms-4 text-dark" />
                                    </div>

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

