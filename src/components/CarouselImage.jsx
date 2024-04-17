
// import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';
function CarouselImage() {
    const { t } = useTranslation();

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img1.jpg"
          alt="First slide"
        />
        <div className="relative">
          <div className="absolute bottom-40 left-40 hidden w-96 bg-white p-3 lg:block xl:block">
            <h3>{t('Learning that gets you')}</h3>
            <p>
              {t(
                'Skills for your present (and your future). Get started with us.',
              )}
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img2.jpg"
          alt="Second slide"
        />
        <div className="relative">
          <div className="absolute bottom-32 left-40 hidden w-96 bg-white p-3 lg:block xl:block">
            <h3>{t('Build ready-for-anything teams')}</h3>
            <p>
              {t(
                'See why leading organizations choose to learn with Udemy Business',
              )}
            </p>
            <button className="bg-dark fw-bold p-3 text-white">
              {t('Request a demo')}
            </button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImage;
