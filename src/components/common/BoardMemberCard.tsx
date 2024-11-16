import "../../assets/css/main.scss";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// import dummy from "../../images/dummy.webp";
import {
  BoardMemberDataProps,
  boardMemberData,
} from "../data/boardMembersData";

const BoardMemberCardContent = ({
  name,
  position,
  imageUrl,
}: BoardMemberDataProps) => {
  return (
    <div className="card-section relative flex flex-col justify-center items-center bg-white py-4 px-2">
      <div className="card-image h-[180px] w-[180px]">
        <img
          src={imageUrl}
          alt="dummy"
          className="h-[100%] w-[100%] object-cover"
        />
      </div>
      <div className="card-content py-2 flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-mont font-semibold">{name}</h1>
        <h2 className="bg-primary text-white w-fit px-2">{position}</h2>
      </div>
    </div>
  );
};

const BoardMemberCard = () => {
  useEffect(() => {
    ScrollReveal().reveal(".card-wrapper", {
      delay: 400,
      duration: 2000,
      distance: "50px",
      origin: "top",
    });
  }, []);
  return (
    <>
      <div className="card-wrapper flex font-poppins justify-center items-center py-20 gap-4 max-lg:flex-col max-lg:gap-20">
        <BoardMemberCardContent
          name={boardMemberData[0].name}
          position={boardMemberData[0].position}
          imageUrl={boardMemberData[0].imageUrl}
        />
        <BoardMemberCardContent {...boardMemberData[1]} />{" "}
        <BoardMemberCardContent {...boardMemberData[2]} />
      </div>

      <div className="card-wrapper flex font-poppins justify-center items-center py-10 gap-4 max-lg:flex-col max-lg:gap-20 max-lg:py-0">
        <BoardMemberCardContent {...boardMemberData[4]} />{" "}
        <BoardMemberCardContent {...boardMemberData[4]} />{" "}
        <BoardMemberCardContent {...boardMemberData[5]} />
      </div>
    </>
  );
};

export default BoardMemberCard;
