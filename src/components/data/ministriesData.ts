import music from "../../images/music.jpg";
import womens from "../../images/womens.jpg";
import mens from "../../images/mens.jpg";
import cfcp from "../../images/compassion.jpg";
import bible from "../../images/bible(1).jpg";
import sunday from "../../images/sunday.jpg";

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
    titleText: "Women's Ministry",
    description:
      "Our music ministry focuses on leading the congregation in worship and glorifying God through song.",
    imageUrl: womens,
  },

  {
    titleText: "Men's Ministry",
    description:
      "Our music ministry focuses on leading the congregation in worship and glorifying God through song.",
    imageUrl: mens,
  },
  {
    titleText: "Compassion",
    description:
      "Our music ministry focuses on leading the focuses on leading the congregation in worship and glorifying God through song. congregation in worship and glorifying God through song. focuses on leading the congregation in worship and glorifying God through song.",
    imageUrl: cfcp,
  },
  {
    titleText: "Bible Study",
    description:
      "Our music ministry focuses on leading the focuses on leading the congregation in worship and glorifying God through song. congregation in worship and glorifying God through song. focuses on leading the congregation in worship and glorifying God through song.",
    imageUrl: bible,
  },
  {
    titleText: "Sunday School",
    description:
      "Our music ministry focuses on leading the focuses on leading the congregation in worship and glorifying God through song. congregation in worship and glorifying God through song. focuses on leading the congregation in worship and glorifying God through song.",
    imageUrl: sunday,
  },
];
