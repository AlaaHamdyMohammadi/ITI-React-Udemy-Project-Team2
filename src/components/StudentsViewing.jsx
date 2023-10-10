/* eslint-disable no-unused-vars */
import CoursesCarousel from './Courses/CoursesCarousel';
import { useTranslation } from 'react-i18next';

function StudentsViewing() {
  const { t } = useTranslation();

  return (
    <div className=" mt-5 p-4">
      <h3 className="pb-3">{t('Students are viewing')}</h3>
      <CoursesCarousel />
    </div>
  );
}

export default StudentsViewing;
