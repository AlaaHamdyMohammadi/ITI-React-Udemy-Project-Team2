import { Carousel } from 'react-bootstrap';

function CarouselImage() {
  return (
    <Carousel className="">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./../../../public/images/homePage/img1.jpg"
          alt="First slide"
        />
        <div className="relative">
          <div className="absolute bottom-40 left-40  hidden  w-96 bg-white p-3   lg:block xl:block">
            <h3>Learning that gets you</h3>
            <p>
              Skills for your present (and your future). Get started with us.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./../../../public/images/homePage/img2.jpg"
          alt="Second slide"
        />
        <div className="relative">
          <div className="absolute bottom-32 left-40 hidden w-96 bg-white p-3 lg:block xl:block">
            <h3>Build ready-for-anything teams</h3>
            <p>
              See why leading organizations choose to learn with Udemy Business
            </p>
            <button className="bg-dark fw-bold p-3 text-white">
              Request a demo
            </button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImage;
