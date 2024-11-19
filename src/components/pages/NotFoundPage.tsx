import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Copyright from "../layout/Copyright";
import Section from "../common/Section";

const NotFoundPage = () => {
  return (
    <Section className="h-[100vh] flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center pt-10 items-center">
        <h1 className="text-5xl font-poppins font-bold mb-5 text-primary">
          404 - Page Not Found
        </h1>
        <p className="mb-2">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go Back Home
        </Link>
      </div>
      <Copyright />
    </Section>
  );
};

export default NotFoundPage;
