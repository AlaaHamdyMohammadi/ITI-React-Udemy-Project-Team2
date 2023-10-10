import { useTranslation } from 'react-i18next';

function Photos() {
  const { t } = useTranslation();

  return (
    <div className="mt-5 bg-slate-100 p-16 text-center">
      <p className="mb-4 text-xl text-slate-500">
        {t(
          'Trusted by over 14,400 companies and millions of learners around the world',
        )}
      </p>
      <div className="flex flex-row flex-wrap justify-around sm:flex-col md:flex-col lg:flex-col xl:flex-col">
        <img src="./../../public/images/homePage/volkswagen.svg" />
        <img src="./../../public/images/homePage/samsung.svg" />
        <img src="./../../public/images/homePage/cisco.svg" />
        <img src="./../../public/images/homePage/att.svg" />
        <img src="./../../public/images/homePage/procter_gamble.svg" />
        <img src="./../../public/images/homePage/hewlett_packard_enterprise.svg" />
        <img src="./../../public/images/homePage/citi.svg" />
        <img src="./../../public/images/homePage/ericsson.svg" />
      </div>
    </div>
  );
}

export default Photos;
