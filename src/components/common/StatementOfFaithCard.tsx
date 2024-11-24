import { AiFillCaretRight } from "react-icons/ai";
import { StatementDataProps } from "../data/stamentOfFaithData";

const StatementOfFaithCard = ({ heading, content }: StatementDataProps) => {
  return (
    <div className="col-1 justify-center flex items-center py-10 max-md:flex-col max-sm:py-5">
      <div className="child-left w-[100%] text-center font-medium flex justify-end pr-16 items-center max-md:pr-0 max-md:justify-center max-sm:">
        <span>
          <h2 className="text-primary text-right text-5xl max-md:text-2xl max-md:text-center">
            {heading}
          </h2>
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
};

export default StatementOfFaithCard;
