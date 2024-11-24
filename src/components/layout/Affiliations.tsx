import sec from "../../images/sec.svg";
import bir from "../../images/bir.png";
import bcp from "../../images/bcp.png";

const Affiliations = () => {
  return (
    <div className="statement-wrapper w-full bg-[#ECEFF3]">
      <div className="statement mx-auto max-w-custom flex flex-col items-center justify-center text-center px-10 py-40 max-sm:py-20">
        <h1 className="font-mont text-6xl font-bold pb-20 max-lg:text-4xl">
          Affiliations
        </h1>
        <div className="flex flex-row justify-center items-center w-full gap-20 max-lg:flex-col max-sm:gap-15">
          <img src={sec} alt="" className="h-[200px] max-md:h-[140px]" />
          <img
            src={bir}
            alt=""
            className="w-[200px] mr-[100px] max-lg:mr-[0] max-md:w-[140px]"
          />
          <img src={bcp} alt="" className="w-[200px] max-md:w-[140px]" />
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
