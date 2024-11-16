import SP from "../../images/moloy.png";

// Interface for statement data
export interface BoardMemberDataProps {
  name: string;
  position: string;
  imageUrl: string;
}

// Array of statements data
export const boardMemberData: BoardMemberDataProps[] = [
  {
    name: "Ptr. Romulo Rosales",
    position: "Senior Pastor",
    imageUrl: SP,
  },
  {
    name: "Oscar Dante",
    position: "Chairman",
    imageUrl: SP,
  },
  {
    name: "Gregorio Rosales",
    position: "Vice Chairman",
    imageUrl: SP,
  },
  {
    name: "Fatih Villaruz",
    position: "Secretary",
    imageUrl: SP,
  },
  {
    name: "Dionesia Rosales",
    position: "Treasurer",
    imageUrl: SP,
  },
  {
    name: "Nemesio Rosales",
    position: "Infrastracture",
    imageUrl: SP,
  },
];
