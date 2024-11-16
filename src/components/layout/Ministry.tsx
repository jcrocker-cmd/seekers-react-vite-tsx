import MinistryCard from "../common/MinistryCard";
import "../../assets/css/main.scss";

function Minsitry() {
  return (
    <div className="ministry-wrapper w-full">
      <div className="ministry mx-auto max-w-custom flex flex-col items-center justify-center text-center py-20 font-mont">
        <p className="max-w-[800px] font-semibold">
          At Seekers Baptist Church, our ministries are designed to reflect
          Christ's love and serve our community with faith and purpose. Each
          ministry is focused on nurturing spiritual growth, fostering
          fellowship, and reaching out to those in need.
        </p>
        <div className="flex flex-wrap gap-5">
          <MinistryCard
            titleText="Sunday School"
            description="Our music ministry focuses on leading the congregation in worship and
          glorifying God through song."
          />
          <MinistryCard
            titleText="Compassion"
            description="Our music ministry focuses on leading the congregation in worship and
          glorifying God through song."
          />
          <MinistryCard
            titleText="Bible Study"
            description="Our music ministry focuses on leading the congregation in worship and
          glorifying God through song."
          />
        </div>
      </div>
    </div>
  );
}

export default Minsitry;
