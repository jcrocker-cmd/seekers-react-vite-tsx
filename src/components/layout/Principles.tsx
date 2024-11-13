import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { AiFillCaretRight } from "react-icons/ai";
import "../../assets/css/main.scss";
import { visionMissionData, VisionMissionData } from "../data/principleData";

const VisionMissionSection: React.FC<VisionMissionData> = ({
  heading,
  content,
}) => (
  <div className="col-1 justify-center flex items-center py-10 max-md:flex-col">
    <div className="child-left text-5xl w-[100%] text-center font-medium flex justify-end pr-16 items-center max-md:pr-0 max-md:justify-center">
      <span>
        <h2 className="text-primary max-md:text-2xl">{heading}</h2>
      </span>
      <span className="text-3xl ml-5 max-md:hidden">
        <AiFillCaretRight />
      </span>
    </div>
    <div className="child-right px-2 py-4 border border-[#ccc] border-r-2 text-xl w-[100%] max-md:text-center max-md:w-[100%] max-sm:text-xs">
      {content}
    </div>
  </div>
);

function Principles() {
  useEffect(() => {
    ScrollReveal().reveal(".col-1 .child-left", {
      delay: 400,
      duration: 2000,
      distance: "50px",
      origin: "left",
    });
    ScrollReveal().reveal(".col-1 .child-right", {
      delay: 400,
      duration: 2000,
      distance: "50px",
      origin: "right",
    });
  }, []);

  return (
    <div className="vm-wrapper w-full ">
      <div className="vm-section flex flex-col py-10 font-poppins max-w-custom px-10 max-md:py-10 max-md:px-2 max-w-md:py-5">
        <h1 className="heading text-5xl font-semibold my-20 custom-underline max-md:text-2xl max-md:my-10">
          Guiding Principles
        </h1>
        <div className="row flex flex-col justify-between items-start w-full">
          {visionMissionData.map((item, index) => (
            <VisionMissionSection
              key={index}
              heading={item.heading}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Principles;
