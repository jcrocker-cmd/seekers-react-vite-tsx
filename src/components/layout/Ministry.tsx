import MinistryCard from "../common/MinistryCard";
import "../../assets/css/main.scss";
import Section from "../common/Section";
import { ministriesData } from "../data/ministriesData";

function Minsitry() {
  return (
    <Section className="ministry-wrapper w-full">
      <div className="ministry mx-auto max-w-custom flex flex-col items-center justify-center text-center py-20 font-mont max-sm:pb-24">
        <p className="max-w-[800px] font-base px-2 max-sm:px-4 max-sm:text-sm">
          At Seekers Baptist Church, our ministries are designed to reflect
          Christ's love and serve our community with faith and purpose. Each
          ministry is focused on nurturing spiritual growth, fostering
          fellowship, and reaching out to those in need.
        </p>
        <div className="flex flex-wrap items-stretch justify-center gap-5 max-sm:space-y-4 max-sm:mb-[-30px]">
          <MinistryCard
            titleText={ministriesData[0].titleText}
            description={ministriesData[0].description}
            imageUrl={ministriesData[0].imageUrl}
          />
          <MinistryCard {...ministriesData[1]} />
          <MinistryCard {...ministriesData[2]} />

          <MinistryCard
            titleText={ministriesData[3].titleText}
            description={ministriesData[3].description}
            imageUrl={ministriesData[3].imageUrl}
          />
          <MinistryCard {...ministriesData[4]} />
          <MinistryCard {...ministriesData[5]} />

          <MinistryCard {...ministriesData[6]} />
          <MinistryCard {...ministriesData[7]} />
          <MinistryCard {...ministriesData[8]} />

          <MinistryCard {...ministriesData[9]} />
          <MinistryCard {...ministriesData[10]} />
        </div>
      </div>
    </Section>
  );
}

export default Minsitry;
