/* eslint-disable no-unused-vars */
import CarouselImage from '../components/CarouselImage';
import CoursesList from '../components/Courses/CoursesList';
import Learners from '../components/Learners';
import Photos from '../components/Photos';
import StudentsViewing from '../components/StudentsViewing';
import TopCategory from '../components/TopCategory/TopCategory';
import Featured from '../components/Featured/Featured';
import UpSkillInstractor from '../components/Upskill&Instractor/UpSkill&Instractor';
import { useContext } from 'react';
import { authentication } from '../contextConfig/authentication';
import Categories from '../components/userLogin/Categories';
// import { useState } from 'react';
// import Spinner from '../components/Spinner';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeSpinner } from '../store/slices/spinner';



function HomePage() {
  // const [isLoading, setIsLoading] = useState(false);
  // // if(isLoading) return <Spinner/>
  // const spinner = useSelector(state => state.spinner.spinner);
  // const dispatch = useDispatch();
  const { isLogin, setIsLogin } = useContext(authentication);

  return (
    <div>
      {isLogin && <Categories />}
      <CarouselImage />
      <Photos />
      <CoursesList />
      <Learners />
      <StudentsViewing />
      <TopCategory />
      <Featured />
      <UpSkillInstractor />
    </div>
  );
}

export default HomePage;
