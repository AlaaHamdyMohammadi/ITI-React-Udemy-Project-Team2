// import React from 'react';

export default function PrivacySettings() {

    return (
        <>
            {/* Header */}
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
                                {/* Tabs */}
                                <div className="d-flex">
                                    <a className="Udemy-profile nav-link active text-secondary fw-bolder border-0"
                                        aria-current="page" href="./udemy-profile.html">Udemy profile</a>
                                    <a className="Profile-Picture nav-link  text-secondary fw-bolder border-0"
                                        href="./profile-picture.html">Profile Picture</a>
                                    <a className="Privacy-Settings nav-link  text-secondary fw-bolder border-0"
                                        href="./privacy-settings.html">Privacy Settings</a>
                                </div>
                                {/* LINE */}
                                <div className="row">
                                    <hr className="container-fluid ms-4 text-dark" />
                                </div>

                                <div className="container tab-content">
                                    <div className="form-check mt-2 ps-3">
                                        <input className="form-check-input border-dark bg-dark rounded-0 dark-background"
                                            type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Show your profile to logged-in users
                                        </label>
                                    </div>
                                    <div className="form-check ps-3">
                                        <input className="form-check-input border-dark bg-dark rounded-0" type="checkbox" value=""
                                            id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Show courses you&apos;re taking on your profile page
                                        </label>
                                    </div>
                                </div>
                                <div className="btn text-light mt-4 ms-3 rounded-0 mb-3 pt-2 pb-2 pe-4 ps-4 fs-5 fw-bold"
                                    style={{ backgroundColor: "#1c1d1f" }}>
                                    Save
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Tab 1 Content Right Column */}
                <div className="container col-6">
                    <div className="row"></div>
                </div>
            </div>
        </>
    );
}
