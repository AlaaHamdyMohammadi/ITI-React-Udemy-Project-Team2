/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Helmet } from 'react-helmet';

export default function TeachOnUdemy() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t('Teach Online - Share your knowledge with millions of students')}
        </title>
      </Helmet>
      <div className="overflow-hidden p-0">
        <div className="d-flex flex-md-row flex-column">
          <div className="row position-relative head flex-grow-1">
            <div>
              <img
                src="./public/images/teach on udemy/billboard-desktop-v4.jpg"
                className="vw-100"
              />
            </div>
            <div className="col-lg-4 col-8 position-absolute align-self-center m-lg-5 m-1 p-5">
              <h2>{t('Come Teach With Us')}</h2>
              <p>
                {t(
                  'Become an instructor and change lives — including your own',
                )}
              </p>
              <div className="row">
                <Link
                  to="/instructor"
                  className="col-md-5 col-8 bg-dark text-light btn rounded-0 py-3 text-center"
                >
                  {t('Get started')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column p-5 text-center">
          <div className="row">
            <h1>{t('So Many Reasons To Start')}</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 m-12 m-auto">
              <img
                className="m-auto"
                src="/images/teach on udemy/value-prop-teach-v3.jpg"
              />
              <h3>{t('Teach your way')}</h3>
              <p>
                {t(
                  'Publish the course you want, in the way you want, and always have control of your own content.',
                )}
              </p>
            </div>
            <div className="col-lg-3 m-12 m-auto">
              <img
                className="m-auto"
                src="/images/teach on udemy/value-prop-inspire-v3.jpg"
              />
              <h3>{t('Inspire learners')}</h3>
              <p>
                {t(
                  'Teach what you know and help learners explore their interests, gain new skills, and advance their careers.',
                )}
              </p>
            </div>
            <div className="col-lg-3 m-12 m-auto">
              <img
                className="m-auto"
                src="/images/teach on udemy/value-prop-get-rewarded-v3.jpg"
              />
              <h3>{t('Get rewarded')}</h3>
              <p>
                {t(
                  'Expand your professional network, build your expertise, and earn money on each paid enrollment.',
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="row text-light bg-primary p-3 text-center">
          <div className="col-md-2 col-12 m-auto">
            <h1>62M</h1>
            <p>{t('Students')}</p>
          </div>
          <div className="col-md-2 col-12 m-auto">
            <h1>75+</h1>
            <p>{t('Languages')}</p>
          </div>
          <div className="col-md-2 col-12 m-auto">
            <h1>830M</h1>
            <p>{t('Enrollments')}</p>
          </div>
          <div className="col-md-2 col-12 m-auto">
            <h1>180+</h1>
            <p>{t('Countries')}</p>
          </div>
          <div className="col-md-2 col-12 m-auto">
            <h1>14,400+</h1>
            <p>{t('Enterprise customers')}</p>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className="row  text-center">
            <h1>{t('How to Begin')}</h1>

            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="d-flex m-2 mb-5"
              fill
            >
              <Tab eventKey="home" title={t('Plan your curriculum')}>
                <div className="container-fluid" id="1">
                  <div className="row">
                    <div className="col-lg-4 col-12 align-self-center fs-5 ms-auto text-start">
                      <p>
                        {t(
                          'You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool. The way that you teach — what you bring to it — is up to you.',
                        )}
                      </p>
                      <h5>{t('How we help you')}</h5>
                      {t(
                        'We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.',
                      )}
                    </div>
                    <div className="col-lg-3 me-auto">
                      <img
                        src="/images/teach on udemy/1.jpg"
                        className="col-10"
                      />
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="profile" title={t('Record your video')}>
                <div className="container-fluid" id="2">
                  <div className="row">
                    <div className="col-lg-4 col-12 align-self-center fs-5 ms-auto text-start">
                      <p>
                        {t(
                          'Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start. If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.',
                        )}
                      </p>
                      <h5>{t('How we help you')}</h5>
                      {t(
                        'Our support team is available to help you throughout the process and provide feedback on test videos.',
                      )}
                    </div>
                    <div className="col-lg-3 me-auto">
                      <img
                        src="/images/teach on udemy/2.jpg"
                        className="col-10"
                      />
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="contact" title={t('Launch your course')}>
                <div className="container-fluid" id="2">
                  <div className="row">
                    <div className="col-lg-4 col-12 align-self-center fs-5 ms-auto text-start">
                      <p>
                        {t(
                          'Gather your first ratings and reviews by promoting your course through social media and your professional networks. Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.',
                        )}
                      </p>
                      <h5>{t('How we help you')}</h5>
                      {t(
                        'Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.',
                      )}
                    </div>
                    <div className="col-lg-3 me-auto">
                      <img
                        src="/images/teach on udemy/3.jpg"
                        className="col-10"
                      />
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>

        <Carousel
          data-bs-theme="dark"
          indicators={false}
          controls
          className="bg-light mt-5"
        >
          <Carousel.Item>
            <div className="row g-5 justify-content-center">
              <div className="col-md-3 col-7">
                <img
                  src="/images/teach on udemy/11.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-5 col-7 align-self-center">
                <p className="fs-5">
                  {t(
                    '“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”',
                  )}
                  <h5>{t('Frank Kane')}</h5>
                  {t('Data Science & IT Certifications')}
                </p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="row g-5 justify-content-center">
              <div className="col-md-3 col-7">
                <img
                  src="/images/teach on udemy/12.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-5 col-7 align-self-center">
                <p className="fs-5">
                  {t(
                    '“Udemy has changed my life. It’s allowed me to follow my passion and become a teacher I love to see my students succeed and hear them say they’ve learned more, quicker, from my courses than they did in college. It’s so humbling.”',
                  )}
                  <h6>{t('Paulo Dichone')}</h6>
                  {t('Developer (Android Speciality)')}
                </p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="row g-5 justify-content-center">
              <div className="col-md-3 col-7">
                <img
                  src="/images/teach on udemy/13.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-5 col-7 align-self-center">
                <p className="fs-5">
                  {t(
                    '“Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”',
                  )}
                  <h6>{t('Deborah Grayson Riege')}</h6>
                  {t('Leadership, Communication')}
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="d-flex flex-md-row flex-column justify-content-center">
          <div className="flex-grow-1">
            <img src="/images/teach on udemy/21.jpg" />
          </div>
          <div className="col-md-6 col-12 m-auto text-center">
            <h1>{t('You won’t have to do it alone')}</h1>
            <p className="d-inline">
              {t('Our Instructor Support Team')}{' '}
              <h6 className="d-inline">
                {t(
                  'is here to answer your questions and review your test video, while our',
                )}
              </h6>{' '}
              <h6 className="d-inline">{t('Teaching Center')} </h6>
              {t(
                'gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our',
              )}{' '}
              <h6 className="d-inline">{t('online community')}.</h6>
            </p>
            <a href="">
              <h5>{t('Need more details before you start? Learn more.')}</h5>
            </a>
          </div>
          <div className="flex-grow-1">
            <img src="/images/teach on udemy/22.jpg" />
          </div>
        </div>

        <div className="d-flex flex-column bg-light justify-content-center p-5 text-center">
          <div className="row">
            <h1 className="col-12">{t('Become an instructor today')}</h1>
            <p className="fs-4 col-lg-6 col-12 m-auto">
              {t(
                'Join one of the world’s largest online learning marketplaces.',
              )}
            </p>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-lg-2 col-3 bg-dark text-light btn rounded-0 mt-2 p-3">
              <Link
                to="/instructor"
                className="h6 lg-3 text-decoration-none text-light m-1"
              >
                {t('Get started')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
