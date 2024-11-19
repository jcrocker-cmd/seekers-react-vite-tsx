import music from "../../images/music.jpg";
import womens from "../../images/womens.jpg";
import mens from "../../images/mens.jpg";

// Interface for statement data
export interface MinistriesDataProps {
  titleText: string;
  description: string;
  imageUrl: string;
}

// Array of statements data
export const ministriesData: MinistriesDataProps[] = [
  {
    titleText: "Music Ministry",
    description:
      "Our music ministry focuses on leading the congregation in worship and glorifying God through song.",
    imageUrl: music,
  },

  {
    titleText: "Womens Ministry",
    description:
      "Our music ministry focuses on leading the congregation in worship and glorifying God through song.",
    imageUrl: womens,
  },

  {
    titleText: "Mens Ministry",
    description:
      "Our music ministry focuses on leading the congregation in worship and glorifying God through song.",
    imageUrl: mens,
  },
];
