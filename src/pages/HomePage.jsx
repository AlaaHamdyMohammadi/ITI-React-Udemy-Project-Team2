/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import UpSkillInstractor from '../components/Upskill&Instractor/UpSkill&Instractor';
import { authentication } from '../contextConfig/authentication';
import TopCategory from '../components/TopCategory/TopCategory';
import CoursesList from '../components/Courses/CoursesList';
import StudentsViewing from '../components/StudentsViewing';
import Categories from '../components/userLogin/Categories';
import CarouselImage from '../components/CarouselImage';
import Featured from '../components/Featured/Featured';
import Learners from '../components/Learners';
import Spinner from '../components/Spinner';
import Photos from '../components/Photos';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { isLogin, setIsLogin } = useContext(authentication);

  useEffect(function () {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLogin && <Categories />}
      {isLoading ? <Spinner /> : <CarouselImage />}
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
