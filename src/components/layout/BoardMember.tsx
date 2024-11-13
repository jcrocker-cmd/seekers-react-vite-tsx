import "../../assets/css/main.scss";
import Heading from "../common/Heading";
import Card from "../common/BoardMemberCard";

function BoardMember() {
  return (
    <div className="boardmember-wrapper relative bg-gradient-to-r from-[#D2122E] to-[#ff4f5e] w-full pt-2 pb-60">
      <div className="boardmember-content py-10 mx-auto mx-o max-w-custom flex justify-center text-center items-center flex-col">
        <Heading heading="Board Members" color="#fff" borderColor="#fff" />
        <Card></Card>
      </div>
    </div>
  );
}

export default BoardMember;
