/* eslint-disable no-unused-vars */
import Categories from '../components/userLogin/Categories';
import FirstContent from '../components/userLogin/FirstContent';
import { Helmet } from 'react-helmet';
// import UserCourses from "../components/userLogin/userCourses";
function CoursesPage() {
  return (
    <div>
      <Helmet>
        <title>Online Courses - Learn Anything, On Your Schedule | Udemy</title>
      </Helmet>
      <Categories />
      <FirstContent />
      {/*<UserCourses />*/}
    </div>
  );
}

export default CoursesPage;
