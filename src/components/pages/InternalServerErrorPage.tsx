import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Copyright from "../layout/Copyright";
import Section from "../common/Section";

const InternalServerErrorPage = () => {
  return (
    <Section className="h-[100vh] flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-5xl font-poppins font-bold mb-5 text-primary">
          500 - Internal Server Error
        </h1>
        <p className="mb-4 text-center">
          Oops! Something went wrong on our end. <br /> Please try again later.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go Back Home
        </Link>
      </div>
      <Copyright />
    </Section>
  );
};

export default InternalServerErrorPage;
