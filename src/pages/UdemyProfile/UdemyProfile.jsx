import React from 'react';

export default function UdemyProfile() {
    return (
        <>

            {/* Tabs */}
            <div className="container d-flex">
                <div className="container col-6">
                    <div className="row">
                        <ul className="nav nav-tabs">
                            <li className="nav-item mt-4">


                                {/* Tab 1 Left Content */}
                                <div className="tab-content">
                                    <div className="form-group ms-3 mb-3">
                                        <label htmlFor="exampleInputFirstName" className="mb-1"><small className="fw-bold">First Name</small></label>
                                        <input type="text" className="form-control border-dark rounded-0 me-5 shadow-none"
                                            id="exampleInputFirstName" placeholder="Name *" />
                                    </div>
                                    <div className="form-group ms-3 mb-3">
                                        <label htmlFor="exampleInputSecondName" className="mb-1"><small className="fw-bold">Last Name</small></label>
                                        <input type="text" className="form-control border-dark rounded-0 me-5 shadow-none "
                                            id="exampleInputSecondName" placeholder="Name *" />
                                    </div>
                                    <div className="form-group ms-3 mb-3">
                                        <label htmlFor="exampleInputHeadline" className="mb-1"><small className="fw-bold">Heading</small></label>
                                        <input type="text" className="form-control border-dark rounded-0 me-5  shadow-none"
                                            id="exampleInputHeadline"
                                            placeholder="Instructor at Udemy 60" />
                                    </div>
                                    <div className="form-group ms-3 mb-3">
                                        <label htmlFor="exampleInputBiography" className="mb-1"><small className="fw-bold">Biography</small></label>
                                        <input type="text" className="pb-5 form-control border-dark rounded-0 me-5 shadow-none "
                                            id="exampleInputBiography" />
                                    </div>
                                    <p className="text-secondary ms-3 col-12" style={{ fontSize: '0.65rem' }}>
                                        To help learners learn more about you,
                                        your bio should reflect your Credibility, Empathy, Passion, and Personality.
                                        Your biography should have at least 50 words, links and coupon codes are not permitted.
                                    </p>
                                    <div className="pe-3">
                                        <select className="form-select ms-3 mb-3 border-dark rounded-0 shadow-none"
                                            aria-label="Default select example">
                                            <option value="1">English (US)</option>
                                            <option value="2">Español (España)</option>
                                            <option value="3">Français (France)</option>
                                            <option value="4">Italiano</option>
                                            <option value="5">Polski</option>
                                            <option value="6">Deutsch</option>
                                        </select>
                                    </div>
                                    <div className="btn text-light ms-3 rounded-0 mb-3 pt-2 pb-2 pe-4 ps-4 fs-5 fw-bold shadow-none"
                                        style={{ backgroundColor: '#1c1d1f' }}>
                                        Save
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Tab 1 Content Right Column */}
                <div className="container col-6">
                    <div className="row">
                        <ul className="nav nav-tabs mt-2">
                            <li className="nav-item ">
                                <div className="col-12 pt-3 tab-content">
                                    <div className="form-group ms-3 mb-3">
                                        <label htmlFor="exampleInputWebsite" className="mb-1"><small className="fw-bold">Website</small></label>
                                        <input type="text" className="form-control border-dark rounded-0 me-5`"
                                            id="exampleInputWebsite" placeholder="Url" style={{ cursor: 'not-allowed' }} />
                                    </div>
                                    {/* Twitter */}
                                    <div className="form-group ms-3 mb-3">
                                        <label htmlFor="exampleInputTwitter" className="mb-1"><small className="fw-bold">Twitter</small></label>
                                        <div className="d-flex">
                                            <span className="col-5">
                                                <input type="text" className="form-control border-dark rounded-0 me-5 bg-light "
                                                    id="exampleInputTwitter" placeholder="https://www.twitter.com" disabled />
                                            </span>
                                            <span className="col-7">
                                                <input type="text" className="form-control border-dark rounded-0 me-5 "
                                                    id="exampleInputTwitter" placeholder="Username" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* Facebook */}
                                    <div className="form-group ms-3 mb-3">
                                        <label htmlFor="exampleInputFacebook" className="mb-1"><small className="fw-bold">Facebook</small></label>
                                        <div className="d-flex">
                                            <span className="col-6">
                                                <input type="text" className="form-control border-dark rounded-0 me-5 bg-light "
                                                    id="exampleInputFacebook" placeholder="https://www.facebook.com" disabled />`
                                            </span>
                                            <span className="col-6">
                                                <input type="text" className="form-control border-dark rounded-0 me-5"
                                                    id="exampleInputFacebook" placeholder="Username" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* LinkedIn */}
                                    <div className="form-group ms-3 mb-3">
                                        <label htmlFor="exampleInputLinkedIn" className="mb-1"><small className="fw-bold">LinkedIn</small></label>
                                        <div className="d-flex">
                                            <span className="col-5">
                                                <input type="text" className="form-control border-dark rounded-0 me-5 bg-light"
                                                    id="exampleInputLinkedIn" placeholder="https://www.linkedin.com" disabled />
                                            </span>
                                            <span className="col-7">
                                                <input type="text" className="form-control border-dark rounded-0 me-5"
                                                    id="exampleInputLinkedIn" placeholder="Username" />
                                            </span>
                                        </div>
                                    </div>
                                    {/* Youtube */}
                                    <div className="form-group ms-3 mb-3">
                                        <label htmlFor="exampleInputYoutube" className="mb-1"><small className="fw-bold">Youtube</small></label>
                                        <div className="d-flex">
                                            <span className="col-5">
                                                <input type="text" className="form-control border-dark rounded-0 me-5 bg-light"
                                                    id="exampleInputYoutube" placeholder="https://www.youtube.com" disabled />
                                            </span>
                                            <span className="col-7">
                                                <input type="text" className="form-control border-dark rounded-0 me-5 "
                                                    id="exampleInputYoutube" placeholder="Username" />
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

