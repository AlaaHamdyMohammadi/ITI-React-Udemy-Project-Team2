
export default function StaticSection() {
  return (
    <>
      <div className="my-3 ml-0 border border-gray-900 p-3  	">
        <div className="font-bold	">
          Top companies offer this course to their employees.
        </div>
        <div className="text-gray-500	">
          This course was selected for our collection of top-rated courses
          trusted by businesses worldwid.
          <a href="#">learn more</a>
        </div>
        <div className="flex-5 flex ">
          <img
            className="flex-1 "
            style={{ width: '50px', height: '50px' }}
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
            alt="Nasdaq"
            loading="lazy"
          />
          <img
            className="flex-1"
            style={{ width: '50px', height: '50px' }}
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
            alt="Volkswagen"
            loading="lazy"
          />
          <img
            className="flex-1"
            style={{ width: '50px', height: '50px' }}
            src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
            alt="Box"
            loading="lazy"
          />
          <img
            className="flex-1"
            style={{ width: '50px', height: '50px' }}
            src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
            alt="NetApp"
            loading="lazy"
          />
          <img
            className="flex-1"
            style={{ width: '50px', height: '50px' }}
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
            alt="Eventbrite"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
