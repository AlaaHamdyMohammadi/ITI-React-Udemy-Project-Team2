export default function TeachOnUdemy(){
    return <>
    <div className="container-fluid overflow-hidden p-0">

    <div className="d-flex flex-md-row flex-column">
        <div className="row position-relative head flex-grow-1">
            <div>
                <img src="./imgs/teach on udemy/billboard-desktop-v4.jpg" className="vw-100"/>
            </div>
            <div className="col-lg-4 col-8 position-absolute align-self-center m-lg-5 m-1 p-5">
                <h2>Come Teach With Us</h2>
                <p>Become an instructor and change lives — including your own</p>
                <div className="row">
                    <div className="col-md-5 col-8 text-center bg-dark text-light btn rounded-0">
                        <h6 className="m-lg-3 m-1">Get started</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="d-flex flex-column text-center p-5">
        <div className="row">
            <h1>So Many Reasons To start</h1>
        </div>
        <div className="row">
            <div className="col-lg-3 m-12 m-auto">
                <img src="./imgs/teach on udemy/value-prop-teach-v3.jpg" alt=""/>
                <h3>Teach your way</h3>
                <p>Publish the course you want, in the way you want, and always have control of your own content.
                </p>
            </div>
            <div className="col-lg-3 m-12 m-auto">
                <img src="./imgs/teach on udemy/value-prop-inspire-v3.jpg" alt=""/>
                <h3>Inspire learners</h3>
                <p>Teach what you know and help learners explore their interests, gain new skills, and advance their
                    careers.</p>
            </div>
            <div className="col-lg-3 m-12 m-auto">
                <img src="./imgs/teach on udemy/value-prop-get-rewarded-v3.jpg" alt=""/>
                <h3>Get rewarded</h3>
                <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.
                </p>
            </div>
        </div>
    </div>

    <div className="row text-light bg-primary p-3 text-center">
        <div className="col-md-2 col-12 m-auto">
            <h1>62M</h1>
            <p>Students</p>
        </div>
        <div className="col-md-2 col-12 m-auto">
            <h1>75+</h1>
            <p>Languages</p>
        </div>
        <div className="col-md-2 col-12 m-auto">
            <h1>830M</h1>
            <p>enrollment</p>
        </div>
        <div className="col-md-2 col-12 m-auto">
            <h1>180+</h1>
            <p>Contries</p>
        </div>
        <div className="col-md-2 col-12 m-auto">
            <h1>14,400+</h1>
            <p>Enterprise customers</p>
        </div>
    </div>

    <div className="d-flex justify-content-center mt-5">
        <div className="row  text-center">
            <h1>How to begin</h1>
            <div onclick="tabs(event.target)" className="row border-bottom">
                <h3 className="col-4 1">Plan your curriculum</h3>
                <h3 className="col-4 2">Record your video</h3>
                <h3 className="col-4 3">Launch your course</h3>
            </div>
        </div>
    </div>

    <div className="d-flex m-2 mb-5">

        <div className="container-fluid" id="1">
            <div className="row">
                <div className="col-lg-4 col-12 align-self-center ms-auto">
                    <p>You start with your passion and knowledge. Then choose a promising topic with the help of our
                        Marketplace Insights tool.
                        The way that you teach — what you bring to it — is up to you.
                    <h5>How we help you</h5>
                    We offer plenty of resources on how to create your first course. And, our instructor dashboard
                    and curriculum pages help keep you organized.</p>
                </div>
                <div className="col-lg-3 me-auto">
                    <img src="./imgs/teach on udemy/1.jpg" className="col-10"/>
                </div>
            </div>
        </div>



        <div className="container-fluid" id="2">
            <div className="row">
                <div className="col-lg-4 col-12 align-self-center ms-auto">
                    <p>Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to
                        start.
                        If you don’t like being on camera, just capture your screen. Either way, we recommend two
                        hours or more of video for a paid course.
                    <h5>How we help you</h5>
                    Our support team is available to help you throughout the process and provide feedback on test
                    videos.</p>
                </div>
                <div className="col-lg-3 me-auto">
                    <img src="./imgs/teach on udemy/2.jpg" className="col-10"/>
                </div>
            </div>
        </div>



        <div className="container-fluid" id="3">
            <div className="row">
                <div className="col-lg-4 col-12 align-self-center ms-auto">
                    <p>Gather your first ratings and reviews by promoting your course through social media and your
                        professional networks.
                        Your course will be discoverable in our marketplace where you earn revenue from each paid
                        enrollment.
                    <h5>How we help you</h5>
                    Our custom coupon tool lets you offer enrollment incentives while our global promotions drive
                    traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.</p>
                </div>
                <div className="col-lg-3 me-auto">
                    <img src="./imgs/teach on udemy/3.jpg" className="col-10"/>
                </div>
            </div>
        </div>


    </div>



    <div id="carouselExampleControls" className="carousel slide bg-light" data-bs-ride="carousel">
        <div className="carousel-inner">

            <div className="carousel-item active">
                <div className="row g-0 justify-content-center">
                    <div className="col-md-2 col-7">
                        <img src="./imgs/teach on udemy/11.jpg" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-3 col-7">
                        <div className="card-body">
                            <p className="card-text">“I’m proud to wake up knowing my work is helping people around the
                                world improve their careers and build great things. While being a full-time
                                instructor is hard work, it lets you work when, where, and how you want.”
                            <h6>Frank Kane</h6>
                            Data Science & IT Certifications
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="carousel-item">
                <div className="row g-0 justify-content-center">
                    <div className="col-md-2 col-7">
                        <img src="./imgs/teach on udemy/12.jpg" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-3 col-7">
                        <div className="card-body">
                            <p className="card-text">“Udemy has changed my life. It’s allowed me to follow my passion
                                and become a teacher I love to see my students succeed and hear them say they’ve
                                learned more, quicker, from my courses than they did in college. It’s so humbling.”

                            <h6>Paulo Dichone</h6>
                            Developer (Android Speciality)
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="carousel-item">
                <div className="row g-0 justify-content-center">
                    <div className="col-md-2 col-7">
                        <img src="./imgs/teach on udemy/13.jpg" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-3 col-7">
                        <div className="card-body">
                            <p className="card-text">“Teaching on Udemy has provided me with two important elements: the
                                opportunity to reach more learners than I ever would be able to on my own and a
                                steady stream of extra income.”

                            <h6>Deborah Grayson Riege</h6>
                            Leadership, Communication
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon  bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>


    <div className="d-flex flex-md-row flex-column justify-content-center">
        <div className="flex-grow-1">
            <img src="./imgs/teach on udemy/21.jpg"/>
        </div>
        <div className="col-md-6 col-12 text-center m-auto">
            <h1>You won’t have to do it alone</h1>
            <p className="d-inline">Our
            <h6 className="d-inline">Instructor Support Team</h6> is here to answer your questions and review your test
            video, while our <h6 className="d-inline">Teaching Center</h6> gives you plenty of resources to help you
            through the process. Plus, get the support of experienced instructors in our <h6 className="d-inline">online
                community</h6>.</p>
            <a href="">
                <h5>Need more details before you start? Learn more.</h5>
            </a>
        </div>
        <div className="flex-grow-1">
            <img src="./imgs/teach on udemy/22.jpg"/>
        </div>
    </div>


    <div className="d-flex flex-column bg-light justify-content-center text-center p-5">
        <div className="row">
            <h1 className="col-12">Become an instructor today</h1>
            <p className="fs-4 col-lg-6 col-12 m-auto">Join one of the world’s largest online learning marketplaces.</p>
        </div>
        <div className="row justify-content-center mt-3">
            <div className="col-lg-2 bg-dark text-light p-3 mt-2 btn rounded-0">
                 <h6 className="m-3">Get started</h6> 
                <a href="./business.html" className="h6 lg-3 m-1 text-decoration-none text-light">Get started</a>

            </div>
        </div>
    </div>
    </div>
    </>
}