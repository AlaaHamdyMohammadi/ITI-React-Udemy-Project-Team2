/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import enTranslation from '../public/locales/en/tranlation.json';
import arTranslation from '../public/locales/ar/tranlation.json';

import './index.css';
// import './rtl.css'
import 'bootstrap/dist/css/bootstrap.min.css';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // Default language
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
});

// if (!i18next.language === 'en') {
//   import('./rtl.css');
//   // .then(() => {
//   //   console.log("CSS file loaded successfully");
//   // })
//   // .catch((error) => {
//   //   // Handle any errors if the file fails to load
//   //   console.error('Error loading RTL CSS:', error);
//   // }
//   // );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
);
