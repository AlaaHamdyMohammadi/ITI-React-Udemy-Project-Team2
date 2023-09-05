import CarouselImage from '../components/CarouselImage';
import CoursesList from '../components/Courses/CoursesList';
import Learners from '../components/Learners';
import Photos from '../components/Photos';
import StudentsViewing from '../components/StudentsViewing';
import Test from '../components/Test';

function HomePage() {
  return (
    <div>
      <CarouselImage />
      <Photos />
      <CoursesList />
      <Learners />
      <StudentsViewing />
      <Test/>
    </div>
  );
}

export default HomePage;
