import "../../assets/css/homepage.css";
import Section from "../common/Section";

const verse =
  '"For the Son of Man came to seek and to save the lost." -Luke 19:10';

function Homepage() {
  return (
    <Section className="homepage-wrapper w-full mt-[100px] max-nav:mt-[85px]">
      <div className="homepage-section mx-0">
        <div className="homepage-content max-w-custom pt-[100px]">
          <h1
            id="homeHeading"
            className="text-center text-6xl font-poppins max-md:text-4xl max-sm:text-3xl"
          >
            Join us in{" "}
            <span className="text-white font-semibold text-glow italic">
              WORSHIP
            </span>{" "}
            every sunday.
          </h1>
          <div className="home-card-wrapper flex flex-row pt-6">
            <div className="home-card flex flex-col items-center bg-secondary mx-auto p-1 max-sm:text-sm max-sm:text-center">
              <p>{verse}</p>
            </div>
          </div>
          <div
            className="schedule text-center absolute right-0 left-0 bottom-[20px] font-mont space-x-6 max-lg:space-x-2 max-md:flex max-md:flex-col
          "
          >
            <span>
              1<sup>st</sup> Service: 7:30 am
            </span>
            <span className="max-lg:hidden"> | </span>
            <span> Sunday School: 8:45 am</span>
            <span className="max-lg:hidden"> | </span>
            <span>
              2<sup>nd</sup> Service: 10:00 am
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Homepage;
