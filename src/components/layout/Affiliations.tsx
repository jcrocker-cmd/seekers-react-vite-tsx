import sec from "../../images/sec.svg";
import bir from "../../images/bir.png";
import bcp from "../../images/bcp.png";

const Affiliations = () => {
  return (
    <div className="statement-wrapper w-full bg-[#ECEFF3]">
      <div className="statement mx-auto max-w-custom flex flex-col items-center justify-center text-center px-10 py-40">
        <h1 className="font-mont text-6xl font-bold pb-20">Affiliations</h1>
        <div className="flex flex-row justify-center items-center w-full gap-20">
          <img src={sec} alt="" className="h-[200px]" />
          <img src={bir} alt="" className="w-[200px] mr-[100px]" />
          <img src={bcp} alt="" className="w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
