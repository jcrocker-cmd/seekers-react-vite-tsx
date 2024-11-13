import { Fragment } from "react";
import "../../assets/css/main.scss";
import Heading from "../common/Heading";
import StatementContent from "../common/StatementOfFaithCard";
import { statementsData } from "../data/stamentOfFaithData";

function Statement() {
  return (
    <Fragment>
      <div className="statement-wrapper w-full">
        <div className="statement mx-auto mx-o max-w-custom flex flex-col items-center justify-center text-center pt-2 pb-20 px-10">
          <Heading
            heading="Statement of Faith"
            color="#D2122E"
            borderColor="#D2122E"
          />
          <StatementContent
            heading={statementsData[0].heading}
            content={statementsData[0].content}
          />
          <StatementContent
            heading={statementsData[1].heading}
            content={statementsData[1].content}
          />
          <StatementContent
            heading={statementsData[2].heading}
            content={statementsData[2].content}
          />
          <StatementContent
            heading={statementsData[3].heading}
            content={statementsData[3].content}
          />
          <StatementContent
            heading={statementsData[4].heading}
            content={statementsData[4].content}
          />
          <StatementContent
            heading={statementsData[5].heading}
            content={statementsData[5].content}
          />
          <StatementContent
            heading={statementsData[6].heading}
            content={statementsData[6].content}
          />
          <StatementContent
            heading={statementsData[7].heading}
            content={statementsData[7].content}
          />
          <StatementContent
            heading={statementsData[8].heading}
            content={statementsData[8].content}
          />
          <StatementContent
            heading={statementsData[9].heading}
            content={statementsData[9].content}
          />
          <StatementContent
            heading={statementsData[10].heading}
            content={statementsData[10].content}
          />
          <StatementContent
            heading={statementsData[11].heading}
            content={statementsData[11].content}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Statement;
