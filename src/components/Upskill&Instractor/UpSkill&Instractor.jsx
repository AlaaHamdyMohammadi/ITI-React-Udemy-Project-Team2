/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function UpSkillInstractor() {
  const { t } = useTranslation();

  return (
    <> 
      <div className="skills row align-items-center m-5">
        <div className="col-lg-6 col-md-12">
          <a className="navbar-brand fs-3 mt-3" href="./index.html">
            <img
              src="/images/homePage/udemy-logo.png"
              alt=""
              width="110"
              height="50"
            />
            <span className="icon">business</span>
          </a>
          <h2>{t('Upskill your team with Udemy Business')}</h2>
          <ul>
            <li>
              {t(
                'Unlimited access to 22,000+ top Udemy courses, anytime, anywhere',
              )}
            </li>
            <li>{t('International course collection in 14 languages')}</li>
            <li>{t('Top certifications in tech and business')}</li>
          </ul>
          <NavLink
            to="udemy-business"
            className="bg-dark fw-bold p-2 text-white no-underline"
          >
            {t('Get Udemy Business')}
          </NavLink>
          <button className="text-dark fw-bold bg-white p-2">
            {t('Learn more')}
          </button>
        </div>
        <div className="col-lg-6 col-md-12 mt-md-4">
          <img
            className="w-75"
            src="/images/homePage/student.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="instructor row align-items-center  m-5">
        <div className="col-lg-6 col-md-12">
          <img
            style={{ width: '400px' }}
            src="/images/homePage/person.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-12 mt-md-4">
          <h2 className="text-dark">{t('Become an instructor')}</h2>
          <p className="fs-4 w-75">
            {t(
              'Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.',
            )}
          </p>
          <NavLink
            to="teach-on-udemy"
            className="bg-dark fw-bold p-2 text-white no-underline"
          >
            {t('Start teaching today')}
          </NavLink>
        </div>
      </div>
    </>
  );
}
