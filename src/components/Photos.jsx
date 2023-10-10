import { useTranslation } from 'react-i18next';
//sm:flex-col md:flex-col lg:flex-col xl:flex-col
//flex flex-col sm:flex-row flex-wrap justify-around 
function Photos() {
  const { t } = useTranslation();

  return (
    <div className="mt-5 bg-slate-100 p-16 text-center">
      <p className="mb-4 text-xl text-slate-500">
        {t(
          'Trusted by over 14,400 companies and millions of learners around the world',
        )}
      </p>
      
      <div className="row justify-content-evenly">
        <img className="h-16 w-16 m-3 col-lg-1 col-md-3 col-sm-6" src="./../../public/images/homePage/volkswagen.svg" />
        <img className="h-16 w-16 m-3 col-lg-1 col-md-3 col-sm-6" src="./../../public/images/homePage/samsung.svg" />
        <img className="h-16 w-16 m-3 col-lg-1 col-md-3 col-sm-6" src="./../../public/images/homePage/cisco.svg" />
        <img className="h-16 w-16 m-3 col-lg-1 col-md-3 col-sm-6" src="./../../public/images/homePage/att.svg" />
        <img className="h-16 w-16 m-3 col-lg-1 col-md-3 col-sm-6" src="./../../public/images/homePage/procter_gamble.svg" />
        <img className="h-16 w-16 m-3 col-lg-1 col-md-3 col-sm-6" src="./../../public/images/homePage/hewlett_packard_enterprise.svg" />
        <img className="h-16 w-16 m-3 col-lg-1 col-md-3 col-sm-6" src="./../../public/images/homePage/citi.svg" />
        <img className="h-16 w-16 m-3 col-lg-1 col-md-3 col-sm-6" src="./../../public/images/homePage/ericsson.svg" />
      </div>
      
    </div>
  );
}

export default Photos;
