/* eslint-disable no-unused-vars */
import React from 'react';
import './Featured.css';

export default function Featured() {
  const Featured = [
    {
      name: 'Development',
      course1: 'Web Development',
      students1: '11,415,615 students',
      course2: 'Machine Learning',
      students2: '11,415,615 students',
      course3: 'Python',
      students3: '7,070,015 students',
    },

    {
      name: 'Business',
      course1: 'Financial Analysis',
      students1: '1,195,282 students',
      course2: 'SQL',
      students2: '5,977,561 students',
      course3: 'PMP',
      students3: '1,733,398 students',
    },

    {
      name: 'IT and Software',
      course1: 'Amazon AWS',
      students1: '6,123,456 students',
      course2: 'Ethical Hacking',
      students2: '10,931,066 students',
      course3: 'Cyber Security',
      students3: '7,070,015 students',
    },

    {
      name: 'Design',
      course1: 'Photoshop ',
      students1: '11,415,615 students',
      course2: 'Graphic Design',
      students2: '3,381,052 students',
      course3: 'Drawing',
      students3: '7,070,015 students',
    },
  ];
  return (
    <>
      <div className="featured mt-5 pt-16 pl-8 pb-16">
        <h2>Featured topics by category</h2>
        <div className="grid mt-4 grid-cols-4 ">
          {Featured.map((item) => (
            <div className="px-5" key={item.name}>
              <h4>{item.name}</h4>
              <a className="font-bold" href="#">
                {item.course1}
              </a>
              <p>{item.students1}</p>
              <a className="font-bold" href="#">
                {item.course2}
              </a>
              <p>{item.students2}</p>
              <a className="font-bold" href="#">
                {item.course3}
              </a>
              <p>{item.students3}</p>
            </div>
          ))}
        </div>

        <button className="fw-bold rounded-none border-2 border-black p-2">
          Explore more topics
        </button>
      </div>
    </>
  );
}
