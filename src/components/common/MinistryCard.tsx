import { MinistriesDataProps } from "../data/ministriesData";

const MinistryCard = ({
  titleText,
  description,
  imageUrl,
}: MinistriesDataProps) => {
  return (
    <div className="ministry-card-wrapper relative border rounded-lg shadow-lg overflow-hidden w-[320px] mt-20 cursor-pointer justify-center flex flex-wrap">
      {/* Image Section */}
      <div className="image h-[200px] w-full overflow-hidden relative">
        <img
          src={imageUrl}
          alt={titleText}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Description Section */}
      <div className="description bg-[#6960e3] text-white px-4 py-6 text-center h-full flex flex-col justify-start items-center">
        <h1 className="text-xl font-bold">{titleText}</h1>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default MinistryCard;
