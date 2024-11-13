import "../../assets/css/main.scss";
import dummy from "../../images/dummy.webp";

const BoardMemberCardContent = () => {
  return (
    <div className="card-section relative flex flex-col justify-center items-center bg-white py-4 px-2">
      <div className="card-image h-[180px] w-[180px]">
        <img
          src={dummy}
          alt="dummy"
          className="h-[100%] w-[100%] object-cover"
        />
      </div>
      <div className="card-content py-2 flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-mont font-semibold">
          John Christian Narbaja
        </h1>
        <h2 className="bg-primary text-white w-fit px-2">Music Director</h2>
      </div>
    </div>
  );
};

const BoardMemberCard = () => {
  return (
    <>
      <div className="card-wrapper flex font-poppins justify-center items-center py-20 gap-4 max-lg:flex-col max-lg:gap-20">
        <BoardMemberCardContent />
        <BoardMemberCardContent />
        <BoardMemberCardContent />
      </div>

      <div className="card-wrapper flex font-poppins justify-center items-center py-10 gap-4 max-lg:flex-col max-lg:gap-20 max-lg:py-0">
        <BoardMemberCardContent />
        <BoardMemberCardContent />
        <BoardMemberCardContent />
      </div>
    </>
  );
};

export default BoardMemberCard;
