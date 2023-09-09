/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './InstructorPage.css'
import { BsYoutube ,BsChatLeftText , BsWrench , BsFillBarChartFill , BsQuestionCircle } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { changeNavbar } from './../store/slices/navbar';

export default function Instractor(){
    var [isWide,setWide]= useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(changeNavbar(false))

        return ()=>{
            dispatch(changeNavbar(true))
        }
    })

    return <div>
    <div className="sidemenue position-fixed text-white p-2 overflow-hidden text-center" onMouseLeave={()=>{setWide(false)}} onMouseOver={()=>{setWide(true)}}>
       {(isWide)?<img src="./public/images/instractor/udemy.png" className="col-10 fullUdemy"/>:<img src="./public/images/instractor/xShJF4Km_400x400.png" className="col-10 Ulogo" />} 
        <div className="d-flex mt-3 btn btn-dark"><BsYoutube className="fs-3"/>{(isWide)?<h5 className="myMenuItem">Courses</h5>:""}</div>
        <div className="d-flex mt-3 W-100 btn btn-dark p-2"><BsChatLeftText className="fs-3"/>{(isWide)?<h5 className="myMenuItem">Communications</h5>:""}</div>
        <div className="d-flex mt-3 btn btn-dark"><BsFillBarChartFill className="fs-3"/>{(isWide)?<h5 className="myMenuItem">Preformance</h5>:""}</div>
        <div className="d-flex mt-3 btn btn-dark"><BsWrench className="fa-solid fa-wrench fs-3" />{(isWide)?<h5 className="myMenuItem">Tools</h5>:""}</div>
        <div className="d-flex mt-3 btn btn-dark"><BsQuestionCircle className="fa-regular fa-circle-question fs-3" />{(isWide)?<h5 className="myMenuItem">Resources</h5>:""}</div>
    </div>



    <div className="main container mt-5">

        <div className="row justify-content-between shadow p-5">
                <h6 className="col-3">Jump Into Course Creation</h6>
                <div className="btn purpleBtn col-2 rounded-0">Create Your Course</div>
        </div>

        <div className="text-center m-5"><h5>Based on your experience, we think these resources will be helpful.</h5></div>

        <div className="row justify-content-center shadow p-5">
            <img className="col-3" src="./public/images/instractor/1.jpg" />
            <div className="col-7">
                <h2 className="mb-5">Create an Engaging Course</h2>
                <h6 className="mt-5">Whether you have been teaching for years or are teaching for the first time, you can make an engaging course. We have compiled resources and best practices to help you get to the next level, no matter where you are starting.</h6>
                <p className="text-decoration-underline mt-5">Get Started</p>
            </div>
        </div>


        <div className="row justify-content-between mt-5">

            <div className="col-6 shadow p-5">
                <div className="row">
                    <img className="col-4" src="./public/images/instractor/2.jpg" />
                    <div className="col-7">
                        <h2 className="mb-5">Get Started with Video</h2>
                        <h6 className="mt-5">Quality video lectures can set your course apart. Use our resources to learn the basics.</h6>
                        <p className="text-decoration-underline mt-5">Get Started</p>
                    </div>
                </div>
            </div>

            <div className="col-6 shadow p-5">
                <div className="row">
                    <img className="col-4" src="./public/images/instractor/3.jpg" />
                    <div className="col-7">
                        <h2 className="mb-5">Build Your Audience</h2>
                        <h6 className="mt-5">Set your course up for success by building your audience.</h6>
                        <p className="text-decoration-underline mt-5">Get Started</p>
                    </div>
                </div>
            </div>

        </div>


        <div className="row justify-content-center shadow p-5 mt-5">
            <img className="col-3" src="./public/images/instractor/4.jpg" />
            <div className="col-7">
                <h2 className="mb-5">Join the New Instructor Challenge!</h2>
                <h6 className="mt-5">Get exclusive tips and resources designed to help you launch your first course faster! Eligible instructors who publish their first course on time will receive a special bonus to celebrate. Start today!</h6>
                <p className="text-decoration-underline mt-5">Get Started</p>
            </div>
        </div>

        <div className="text-center m-5"><p>Have questions? Here are our most popular instructor resources.</p></div>

        <div className="row justify-content-between text-center mt-5">
            <div className="col-2">
                <i className="fa-brands fa-youtube fs-1"></i>
                <h5 className="mt-1 text-decoration-underline text-primary">Test Video</h5>
                <h6 className="mt-3">Send us a sample video and get expert feedback.</h6>
            </div>

            <div className="col-3">
                <i className="fa-solid fa-comments fs-1"></i>
                <h5 className="mt-1 text-decoration-underline text-primary">Instructor Community</h5>
                <h6 className="mt-3">Connect with experienced instructors. Ask questions, browse discussions, and more.</h6>
            </div>

            <div className="col-2">
                <i className="fa-solid fa-person-chalkboard fs-1"></i>
                <h5 className="mt-1 text-decoration-underline text-primary">Teaching Center</h5>
                <h6 className="mt-3">Learn about best practices for teaching on Udemy.</h6>
            </div>

            <div className="col-3">
                <i className="fa-solid fa-chart-line fs-1"></i>
                <h5 className="mt-1 text-decoration-underline text-primary">Marketplace Insights</h5>
                <h6 className="mt-3">Validate your course topic by exploring our marketplace supply and demand.</h6>
            </div>

            <div className="col-2">
                <i className="fa-regular fa-circle-question fs-1"></i>
                <h5 className="mt-1 text-decoration-underline text-primary">Help and Support</h5>
                <h6 className="mt-3">Browse our Help Center or contact our support team.</h6>
            </div>

        </div>

        <div className="row justify-content-center text-center m-5">
            <h6 className="col-12">Are You Ready to Begin?</h6>
            <div className="btn purpleBtn col-2 rounded-0">Create Your Course</div>
        </div>


    </div>

    </div>
}