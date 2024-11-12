import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../../assets/css/footer.css";

function Newsletter() {
  useEffect(() => {
    ScrollReveal().reveal(".floating-card", {
      delay: 400,
      duration: 2000,
      distance: "50px",
      origin: "top",
    });
  }, []);
  return (
    <div className="newsletter-wrapper w-full">
      <div className="floating-card max-w-custom w-[50%] mx-auto font-poppins max-md:px-2 max-md:w-full">
        <h2 className="text-2xl mb-2 text-black max-md:text-xl max-sm:text-base font-medium">
          Get Update From Anywhere
        </h2>
        <p className="mb-4 text-[#555] max-sm:text-sm">
          Bearing Void gathering light light his eavening unto don't afraid
        </p>
        <div className="subscribe-form flex justify-center items-center max-md:flex-col max-md:gap-3 max-sm:text-sm">
          <input
            className="py-2 px-4 border border-[#ccc] outline-none w-[70%] max-sm:w-[100%]"
            type="email"
            placeholder="Enter your email"
          />
          <button className="py-2 px-4 text-white bg-primary border-none cursor-pointer hover:bg-secondary">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
