import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { AiFillCaretRight } from "react-icons/ai";
import "../../assets/css/principles.css";

interface VisionMissionData {
  heading: string;
  content: string;
}

const visionMissionData: VisionMissionData[] = [
  {
    heading: "Vision",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolore ipsam veniam aut error rerum suscipit, quam impedit eligendi dolorum. In, quam? Impedit sint placeat recusandae explicabo aliquid dolorem iusto.",
  },
  {
    heading: "Mission",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolore ipsam veniam aut error rerum suscipit, quam impedit eligendi dolorum. In, quam? Impedit sint placeat recusandae explicabo aliquid dolorem iusto.",
  },
  {
    heading: "Core Values",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, rerum suscipit! Impedit placeat recusandae explicabo aliquid dolorem iusto.",
  },
  {
    heading: "Objectives",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, rerum suscipit! Impedit placeat recusandae explicabo aliquid dolorem iusto.",
  },
];

const VisionMissionSection: React.FC<VisionMissionData> = ({
  heading,
  content,
}) => (
  <div className="col-1 justify-center flex items-center py-10 max-md:flex-col">
    <div className="child-left text-5xl w-[50%] text-center font-medium flex justify-end pr-16 items-center max-md:pr-0 max-md:justify-center">
      <span>
        <h2 className="text-primary max-md:text-2xl">{heading}</h2>
      </span>
      <span className="text-3xl ml-5 max-md:hidden">
        <AiFillCaretRight />
      </span>
    </div>
    <div className="child-right text-xl w-[50%] max-md:text-center max-md:w-[100%] max-sm:text-xs">
      {content}
    </div>
  </div>
);

function Principles() {
  useEffect(() => {
    ScrollReveal().reveal(".heading", {
      delay: 400,
      duration: 2000,
      distance: "50px",
      origin: "top",
    });
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
