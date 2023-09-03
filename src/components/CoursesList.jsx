/* eslint-disable no-unused-vars */
import Button from './Button';
import {Carousel, Card } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function ContentOutOfTheBox() {
  return (
    <div>
      <h1>A broad selection of courses</h1>
      <p className="text-2xl">
        Choose from over 210,000 online video courses with new additions
        published every month
      </p>
      <a
        href=""
        className="p-3 font-bold text-slate-500 no-underline hover:text-black"
      >
        Python
      </a>
      <a
        href=""
        className="p-3 font-bold text-slate-500 no-underline hover:text-black"
      >
        Excel
      </a>
      <a
        href=""
        className="p-3 font-bold text-slate-500 no-underline hover:text-black"
      >
        Web Development
      </a>
    </div>
  );
}

function ContentInTheBox() {
  return (
    <div className="mt-2.5 p-3">
      <h4>Expand your career opportunities with Python</h4>
      <p className="w-4/6">
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language. Its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to...
      </p>
      <Button width="border">Explore Python</Button>
    </div>
  );
}

//className="border-1 mt-2.5 border-solid border-slate-400 p-3

function CoursesList() {
  return (
    <div className=" mt-5 p-4">
      <ContentOutOfTheBox />
      <div className="border-1 mt-2.5 border-solid border-slate-400 p-3">
        <ContentInTheBox />
        {/*<Card style={{ width: '18rem' }}>
          <Card.Img
            className="h-32"
            variant="top"
            src="./../../public/images/homePage/carImg1.jfif"
          />
          <Card.Body className="h-42 ">
            <Card.Title>
              <div className="text-sm font-bold">
                The Complete Python Bootcamp From Zero to Hero in Python
              </div>
            </Card.Title>
            <Card.Text>
              <div>
                <p className="text-sm text-slate-500">Jose Portilla</p>
                <p className="font-bold">5 ⭐⭐⭐⭐⭐</p>
                <p className="font-bold">E1,599.99</p>
              </div>
            </Card.Text>
          </Card.Body>
  </Card>*/}
        <Carousel>
          <Carousel.Item>
            <div className="flex justify-between">
              <div>
                <img
                  className="h-40 w-60"
                  src="./../../public/images/homePage/carImg1.jfif"
                />
                <h6 className="mt-2 w-64 font-bold">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div>
                  <p className="text-sm text-slate-500">Jose Portilla</p>
                  <p className="font-bold">5 ⭐⭐⭐⭐⭐</p>
                  <p className="font-bold">E1,599.99</p>
                  <p className="w-fit bg-lime-200 p-1.5 text-xs text-lime-950">
                    Best Seller
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="h-40 w-60"
                  src="./../../public/images/homePage/carImg2.jfif"
                />
                <h6 className="mt-2 w-64 font-bold">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div>
                  <p className="text-sm text-slate-500">Jose Portilla</p>
                  <p className="font-bold">3 ⭐⭐⭐</p>
                  <p className="font-bold">E1,599.99</p>
                </div>
              </div>
              <div>
                <img
                  className="h-40 w-60"
                  src="./../../public/images/homePage/carImg3.jfif"
                />
                <h6 className="mt-2 w-64 font-bold">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div>
                  <p className="text-sm text-slate-500">Jose Portilla</p>
                  <p className="font-bold">4 ⭐⭐⭐⭐</p>
                  <p className="font-bold">E1,599.99</p>
                </div>
              </div>
              <div>
                <img
                  className="h-40 w-60"
                  src="./../../public/images/homePage/carImg4.jfif"
                />
                <h6 className="mt-2 w-64 font-bold">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div>
                  <p className="text-sm text-slate-500">Jose Portilla</p>
                  <p className="font-bold">5 ⭐⭐⭐⭐⭐</p>
                  <p className="font-bold">E1,599.99</p>
                  <p className="w-fit bg-lime-200 p-1.5 text-xs text-lime-950">
                    Best Seller
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="h-40 w-60"
                  src="./../../public/images/homePage/carImg5.jfif"
                />
                <h6 className="mt-2 w-64 font-bold">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div>
                  <p className="text-sm text-slate-500">Jose Portilla</p>
                  <p className="font-bold">4 ⭐⭐⭐⭐</p>
                  <p className="font-bold">E1,599.99</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="flex justify-between">
              <div>
                <img
                  className="h-40 w-60"
                  src="./../../public/images/homePage/carImg6.jfif"
                />
                <h6 className="mt-2 w-64 font-bold">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div>
                  <p className="text-sm text-slate-500">Jose Portilla</p>
                  <p className="font-bold">4 ⭐⭐⭐⭐</p>
                  <p className="font-bold">E1,599.99</p>
                </div>
              </div>
              <div>
                <img
                  className="h-40 w-60"
                  src="./../../public/images/homePage/carImg7.jfif"
                />
                <h6 className="mt-2 w-64 font-bold">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div>
                  <p className="text-sm text-slate-500">Jose Portilla</p>
                  <p className="font-bold">5 ⭐⭐⭐⭐⭐</p>
                  <p className="font-bold">E1,599.99</p>
                  <p className="w-fit bg-lime-200 p-1.5 text-xs text-lime-950">
                    Best Seller
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="h-40 w-60"
                  src="./../../public/images/homePage/carImg8.jfif"
                />
                <h6 className="mt-2 w-64 font-bold">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div>
                  <p className="text-sm text-slate-500">Jose Portilla</p>
                  <p className="font-bold">5 ⭐⭐⭐⭐⭐</p>
                  <p className="font-bold">E1,599.99</p>
                  <p className="w-fit bg-lime-200 p-1.5 text-xs text-lime-950">
                    Best Seller
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="h-40 w-60"
                  src="./../../public/images/homePage/carImg9.jfif"
                />
                <h6 className="mt-2 w-64 font-bold">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div>
                  <p className="text-sm text-slate-500">Jose Portilla</p>
                  <p className="font-bold">3 ⭐⭐⭐</p>
                  <p className="font-bold">E1,599.99</p>
                </div>
              </div>
              <div>
                <img
                  className="h-40 w-60"
                  src="./../../public/images/homePage/carImg10.jfif"
                />
                <h6 className="mt-2 w-64 font-bold">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h6>
                <div>
                  <p className="text-sm text-slate-500">Jose Portilla</p>
                  <p className="font-bold">5 ⭐⭐⭐⭐⭐</p>
                  <p className="font-bold">E1,599.99</p>
                  <p className="w-fit bg-lime-200 p-1.5 text-xs text-lime-950">
                    Best Seller
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CoursesList;
