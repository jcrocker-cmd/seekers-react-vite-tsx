import { Fragment } from "react";
import "../../assets/css/main.scss";
import Heading from "../common/Heading";
import StatementContent from "../common/StatementOfFaithCard";
import { statementsData } from "../data/stamentOfFaithData";

function Statement() {
  return (
    <Fragment>
      <div className="statement-wrapper w-full">
        <div className="statement mx-auto mx-o max-w-custom max flex flex-col items-center justify-center text-center pt-2 pb-20 px-10">
          <Heading
            heading="Statement of Faith"
            color="#D2122E"
            borderColor="#D2122E"
          />
          {statementsData.map((statmentItem) => (
            <StatementContent key={statmentItem.id} {...statmentItem} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Statement;
