import MinistryCard from "../common/MinistryCard";
import "../../assets/css/main.scss";
import Section from "../common/Section";
import { ministriesData } from "../data/ministriesData";

function Minsitry() {
  return (
    <Section className="ministry-wrapper w-full">
      <div className="ministry mx-auto max-w-custom flex flex-col items-center justify-center text-center py-20 font-mont">
        <p className="max-w-[800px] font-base">
          At Seekers Baptist Church, our ministries are designed to reflect
          Christ's love and serve our community with faith and purpose. Each
          ministry is focused on nurturing spiritual growth, fostering
          fellowship, and reaching out to those in need.
        </p>
        <div className="flex flex-wrap gap-5">
          <MinistryCard
            titleText={ministriesData[0].titleText}
            description={ministriesData[0].description}
            imageUrl={ministriesData[0].imageUrl}
          />
          <MinistryCard {...ministriesData[1]} />
          <MinistryCard {...ministriesData[2]} />
        </div>

        <div className="flex flex-wrap gap-5">
          <MinistryCard
            titleText={ministriesData[3].titleText}
            description={ministriesData[3].description}
            imageUrl={ministriesData[3].imageUrl}
          />
          <MinistryCard {...ministriesData[4]} />
          <MinistryCard {...ministriesData[5]} />
        </div>
      </div>
    </Section>
  );
}

export default Minsitry;
