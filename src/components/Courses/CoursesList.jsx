/* eslint-disable no-unused-vars */
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import ContentOutOfTheBox from './ContentOutOfTheBox';
import ContentInTheBox from './ContentInTheBox';
import CoursesCarousel from './CoursesCarousel';

function CoursesList() {
  return (
    <div className=" mt-5 p-4">
      <ContentOutOfTheBox />
      <div className="border-1 mt-2.5 border-solid border-slate-400 p-3">
        <ContentInTheBox />
        <CoursesCarousel/>
      </div>
    </div>
  );
}

export default CoursesList;
