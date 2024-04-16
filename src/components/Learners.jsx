/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

function Learners() {
  const { t } = useTranslation();

  return (
    <div className="mt-5 bg-slate-100 p-10">
      <h3 className="">
        {t('How learners like you are achieving their goals')}
      </h3>

      <div className="flex justify-between gap-1">
        <div className="border-1 mt-5 w-96 border-slate-300 bg-white p-4">
          <img className="w-6" src="./../../public/images/homePage/quote.svg" />
          <p className="pb-4 pt-4">
            {t(
              'I am proud to say that after a few months of taking this course...',
            )}
            <strong>
              {t(
                'I passed my exam and am now an AWS Certified Cloud Practitioner!',
              )}
            </strong>
            {t('This content was exactly what the CCP exam covered.')}
          </p>
          <span className="rounded-full bg-black p-2 font-bold text-white">
            WA
          </span>
          <span className="pl-2 font-bold">{t('Will A')}</span>
          <div className="mt-4 flex border-t-2 text-violet-600">
            <BsFillPlayCircleFill className="mt-2.5 text-3xl" />
            <span className="mt-2.5 pl-2 font-bold">
              {t('[NEW] Ultimate AWS Certified Cloud Practitioner - 2022')}
            </span>
          </div>
        </div>
        <div className="border-1 mt-5 w-96 border-slate-300 bg-white p-4">
          <img className="w-6" src="./../../public/images/homePage/quote.svg" />
          <p className="pb-20 pt-4">
            {t('This course helped me')}
            <strong>
              {t(
                'freshen up on my product manager skills and land a job at Facebook!',
              )}
            </strong>
            {t('Thanks guys :)')}
          </p>
          <span className="rounded-full bg-black p-2 font-bold text-white">
            RF
          </span>
          <span className="pl-2 font-bold">{t('Ron F')}</span>
          <div className="mt-4 flex border-t-2 text-violet-600">
            <BsFillPlayCircleFill className="mt-2.5 text-3xl" />
            <span className="mt-2.5 pl-2 font-bold">
              {t('[NEW] Ultimate AWS Certified Cloud Practitioner - 2022')}
            </span>
          </div>
        </div>
        <div className="border-1 mt-5 w-96 border-slate-300 bg-white p-4">
          <img className="w-6" src="./../../public/images/homePage/quote.svg" />
          <p className="pb-4 pt-4">
            {t(
              'One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable.',
            )}
            <strong>{t('Would help anyone become a better manager.')}</strong>
          </p>
          <span className="rounded-full bg-black p-2 font-bold text-white">
            PW
          </span>
          <span className="pl-2 font-bold">{t('Phillip W')}</span>
          <div className="mt-4 flex border-t-2 text-violet-600">
            <BsFillPlayCircleFill className="mt-2.5 text-3xl" />
            <span className="mt-2.5 pl-2 font-bold">
              {t('[NEW] Ultimate AWS Certified Cloud Practitioner - 2022')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learners;
