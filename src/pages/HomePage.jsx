/* eslint-disable no-unused-vars */
import CarouselImage from '../components/CarouselImage';
import CoursesList from '../components/Courses/CoursesList';
import Learners from '../components/Learners';
import Photos from '../components/Photos';
import StudentsViewing from '../components/StudentsViewing';
import TopCategory from '../components/TopCategory/TopCategory';
import Featured from '../components/Featured/Featured';
import UpSkillInstractor from '../components/Upskill&Instractor/UpSkill&Instractor';


function HomePage() {
  return (
    <div>
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
