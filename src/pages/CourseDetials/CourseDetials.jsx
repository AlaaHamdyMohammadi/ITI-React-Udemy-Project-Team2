import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { changeNavbar } from '../../store/slices/navbar';
import { changeScrollBar } from '../../store/slices/ScrollBar';
import Header from '../../components/Header/Header';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { getCourse } from '../../services/Detials';
import { useLoaderData } from 'react-router-dom';
import './CourseDetials.css';
import FirstComp from './firstComp.jsx/firstComp';
import AboveList from './firstComp.jsx/aboveComp/aboveComp';
import StaticSection from './staticSection/staticSection';
import Learn from './learn/learn';
import Requirements from './requirments/requirments';
import CourseContent from './CourseContent/CourseContent';
import Description from './Description/Description';
// import {firstComp}from './firstComp.jsx/firstComp'
export const loadercourse = async () => {
  var res = await getCourse();
  console.log(res.data.data.document);
  // return object of keys &values of loaders
  return res.data.data.document;
};

export default function CourseDetials() {
  const dispatch = useDispatch();
  const Bar = useSelector((state) => state.ScrollBar.ScrollBar);

  const handleScroll = () => {
    if (window.scrollY == 0) {
      dispatch(changeScrollBar(false));
    } else {
      dispatch(changeScrollBar(true));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Course = useLoaderData();

  return (
    <>
      {/* <Header /> */}
      <FirstComp course={Course} />
      {/* <AboveList className='sticky top-0'  course={Course} /> */}

      {/* <div className='container grid grid-cols-1 gap-4 '> */}
      <div className="grid grid-cols-3 container  ">
        <div  className="col-span-2 " >
        {/* <FirstComp course={Course} /> */}

        <Learn course={Course}/>
        <StaticSection/>
        <CourseContent course={Course}/>
        <Requirements course={Course}/>
        <Description course={Course}/>

        </div>
        <div className="col-span-1">
        {/* <AboveList  className='absolute right-0 top-0' course={Course} /> */}

        </div>
      </div>
{/* scrollbar */}
      {Bar ? (
        <div className="relative">
          <div className="fixed left-0 right-0  top-0 bg-zinc-700  px-5 py-1 text-white">
            <div className="text-sm font-bold"> {Course.title}</div>
            <div>
              <span className="flex p-0 ">
                <span className="custom flex items-center font-bold text-yellow-500">
                <div className="update mt-0 pr-1">
                        <span className="bestseller p-1">Best Seller</span>
                      </div>
                  {Course.rating}

                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>

                <span className="p-2 ">
                  <a className="text-slate-300" href="#">
                    ({Course.NumRating} ratings)
                  </a>
                </span>
                <span className="p-2">{Course.NumStd} students</span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
     
    </>
  );
}
