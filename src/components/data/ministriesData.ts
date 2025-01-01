import music from "../../images/music.jpg";
import womens from "../../images/womens.jpg";
import mens from "../../images/mens.jpg";
import cfcp from "../../images/compassion.jpg";
import bible from "../../images/bible(1).jpg";
import sunday from "../../images/sunday.jpg";
import vbs from "../../images/vbs.jpg";
import youth from "../../images/youth.jpg";
import jr from "../../images/jr.jpg";
import prayer from "../../images/prayer.jpg";
import outreach from "../../images/outreach.jpg";

// Interface for statement data
export interface MinistriesDataProps {
  titleText?: string;
  description?: string;
  imageUrl?: string;
}

export const ministriesData: MinistriesDataProps[] = [
  {
    titleText: "Music Ministry",
    description:
      "Our music ministry focuses on leading the congregation in worship and glorifying God through song.",
    imageUrl: music,
  },
  {
    titleText: "Church Outreach",
    description:
      "Our Church Outreach ministry focuses on reaching out to the community, sharing the love of Christ, and providing support to those in need through various service activities.",
    imageUrl: outreach,
  },
  {
    titleText: "Women's Ministry",
    description:
      "Our Women's Ministry provides a supportive environment for women to grow in their faith, fellowship with one another, and engage in service projects that impact the community.",
    imageUrl: womens,
  },
  {
    titleText: "Men's Ministry",
    description:
      "Our Men's Ministry aims to strengthen men spiritually through Bible study, fellowship, and outreach activities that encourage godly living and leadership.",
    imageUrl: mens,
  },
  {
    titleText: "Compassion",
    description:
      "Our Compassion ministry focuses on meeting the physical and emotional needs of individuals and families in the community through acts of kindness, support, and outreach.",
    imageUrl: cfcp,
  },
  {
    titleText: "Bible Study",
    description:
      "Our Bible Study ministry offers a deeper understanding of God's Word through regular study groups, equipping individuals to live out their faith with wisdom and knowledge.",
    imageUrl: bible,
  },
  {
    titleText: "Sunday School",
    description:
      "Our Sunday School program provides age-appropriate teachings and activities for children, helping them build a strong foundation of faith and understanding of biblical principles.",
    imageUrl: sunday,
  },
  {
    titleText: "Junior Church",
    description:
      "Our Junior Church offers a fun and engaging environment for children to learn about Jesus, experience worship, and grow spiritually with their peers in a safe setting.",
    imageUrl: jr,
  },
  {
    titleText: "Youth Ministry",
    description:
      "Our Youth Ministry is dedicated to helping young people grow in their relationship with Christ through Bible study, fellowship, and exciting opportunities for service and outreach.",
    imageUrl: youth,
  },
  {
    titleText: "Prayer",
    description:
      "Our Prayer ministry is a vital part of our church, providing opportunities for individuals and groups to come together in prayer for personal needs, church events, and global issues.",
    imageUrl: prayer,
  },
  {
    titleText: "VBS",
    description:
      "Our Vacation Bible School (VBS) offers a fun and engaging week for children to learn about God's love, participate in activities, and make lasting memories in a safe environment.",
    imageUrl: vbs,
  },
];
