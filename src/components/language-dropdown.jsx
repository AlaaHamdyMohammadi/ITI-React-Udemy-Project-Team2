/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const LanguageOption = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="border-0">
      <select onChange={handleChange}>
        <option value={'en'}>En</option>
        <option value={'ar'}>Ar</option>
      </select>
    </div>
  );
};

export default LanguageOption;
