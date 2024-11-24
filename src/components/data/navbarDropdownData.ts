// Interface for dropdown item
export interface DropdownItemProps {
  label: string;
  link: string;
}

export const aboutUsItems: DropdownItemProps[] = [
  { label: "History", link: "/history" },
  { label: "Principles", link: "/mission" },
  { label: "Board Members", link: "/team" },
];

export const servicesItems: DropdownItemProps[] = [
  { label: "Baptismal Certificate", link: "/baptismal-certificate" },
  { label: "Child Dedication", link: "/child-dedication" },
  { label: "Bible Study", link: "/bible-study" },
];
