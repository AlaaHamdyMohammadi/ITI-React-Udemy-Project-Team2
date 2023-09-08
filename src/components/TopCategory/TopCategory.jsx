/* eslint-disable no-unused-vars */
import React from 'react';
import './TopCategory.css';
export default function TopCategory() {
  const category = [
    {
      name: 'Design',
      src: './../../../images/homePage/design.jpg',
      style: { height: '350px' },
      id: 1,
    },
    {
      name: 'Development',
      src: './../../../images/homePage/development.jpg',
      style: { height: '300px' },
      id: 2,
    },
    {
      name: 'Marketing',
      src: './../../../images/homePage/marketing.jpg',
      style: { height: '300px' },
      id: 3,
    },
    {
      name: 'IT and Software',
      src: './../../../images/homePage/it.jpg',
      style: { height: '300px' },
      id: 4,
    },
    {
      name: 'Personal Development',
      src: './../../../images/homePage/personal.jpg',
      style: { height: '300px' },
      id: 5,
    },
    {
      name: 'Business',
      src: './../../../images/homePage/Buisness.jpg',
      style: { height: '300px' },
      id: 6,
    },
    {
      name: 'Photography',
      src: './../../../images/homePage/photo.jpg',
      style: { height: '300px' },
      id: 7,
    },
    {
      name: 'music',
      src: './../../../images/homePage/music.jpg',
      style: { height: '300px' },
      id: 8,
    },
  ];
  return (
    <div className="mt-5 p-4">
      <h3 className="pb-3">Top categories</h3>
      <div className="container-fliud grid grid-cols-4 grid-rows-2 gap-2 ">
        {category.map((item) => (
          <div
            key={item.id}
            className="categoryImg bg-cover object-cover "
            style={item.style}
          >
            <img src={item.src} alt="" />
            <p className="font-bold	">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
