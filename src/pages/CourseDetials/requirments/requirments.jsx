/* eslint-disable react/prop-types */

import './../CourseDetials.css';
export default function Requirements({ course }) {
  var requirementArray = course.requirements;
  //console.log(requirementArray);
  return (
    <div className="m-10 ml-0 p-3 ">
      <div className="text-2xl font-extrabold">Requirements</div>

      <ul className=" list1 text-black-200 dark:text-black-100   grid grid-cols-2 text-left">
        {requirementArray.map((item) => (
          <li key={item.id} className="flex items-center space-x-3 ">
            {item.state}
          </li>
        ))}
      </ul>
    </div>
  );
}
