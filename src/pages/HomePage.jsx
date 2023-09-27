/* eslint-disable no-unused-vars */
import CarouselImage from '../components/CarouselImage';
import CoursesList from '../components/Courses/CoursesList';
import Learners from '../components/Learners';
import Photos from '../components/Photos';
import StudentsViewing from '../components/StudentsViewing';
import TopCategory from '../components/TopCategory/TopCategory';
import Featured from '../components/Featured/Featured';
import UpSkillInstractor from '../components/Upskill&Instractor/UpSkill&Instractor';
import { useContext, useEffect, useState } from 'react';
import { authentication } from '../contextConfig/authentication';
import Categories from '../components/userLogin/Categories';
import Spinner from '../components/Spinner';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { isLogin, setIsLogin } = useContext(authentication);

  useEffect(function(){
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, []);

  return (
    <div>
      {isLogin && <Categories />}
      {isLoading ? <Spinner/> : <CarouselImage />}
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
