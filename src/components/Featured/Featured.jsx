// import React from 'react';
import './Featured.css';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

export default function Featured() {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  const featuredData = [
    {
      name: t('Development'),
      course1: t('Web Development'),
      students1: t('11,415,615 students'),
      course2: t('Machine Learning'),
      students2: t('11,415,615 students'),
      course3: t('Python'),
      students3: t('7,070,015 students'),
    },
    {
      name: t('Business'),
      course1: t('Financial Analysis'),
      students1: t('1,195,282 students'),
      course2: t('SQL'),
      students2: t('5,977,561 students'),
      course3: t('PMP'),
      students3: t('1,733,398 students'),
    },
    {
      name: t('IT and Software'),
      course1: t('Amazon AWS'),
      students1: t('6,123,456 students'),
      course2: t('Ethical Hacking'),
      students2: t('10,931,066 students'),
      course3: t('Cyber Security'),
      students3: t('7,070,015 students'),
    },
    {
      name: t('Design'),
      course1: t('Photoshop'),
      students1: t('11,415,615 students'),
      course2: t('Graphic Design'),
      students2: t('3,381,052 students'),
      course3: t('Drawing'),
      students3: t('7,070,015 students'),
    },
  ];

  return (
    <>
      <div className="featured mt-5 pb-16 pl-8 pt-16">
        <h2>{t('Featured topics by category')}</h2>
        <div className="mt-4 grid grid-cols-4 ">
          {featuredData.map((item) => (
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
          {t('Explore more topics')}
        </button>
      </div>
    </>
  );
}
