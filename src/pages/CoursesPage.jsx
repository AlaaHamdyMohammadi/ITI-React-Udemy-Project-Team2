/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";
import Categories from "../components/userLogin/Categories";
import FirstContent from "../components/userLogin/FirstContent";
// import UserCourses from "../components/userLogin/userCourses";
// import UserCourses from "../components/userLogin/UserCourses";


function CoursesPage() {
    return (
      <div>
        <Helmet>
          <title>
            Online Courses - Learn Anything, On Your Schedule | Udemy
          </title>
        </Helmet>
        <Categories />
        <FirstContent />
    {/*<UserCourses />*/}
        
      </div>
    );
}

export default CoursesPage
