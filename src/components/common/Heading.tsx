import { Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

interface Headingprops {
  heading: string;
  color?: string; // Optional color for text
  borderColor?: string; // Optional color for the border
}

export default function Heading({ heading, color, borderColor }: Headingprops) {
  useEffect(() => {
    ScrollReveal().reveal(".heading", {
      delay: 400,
      duration: 2000,
      distance: "50px",
      origin: "top",
    });
  }, []);

  return (
    <Fragment>
      <h1
        className="heading text-5xl font-semibold my-20 custom-underline max-md:text-2xl max-md:my-10"
        style={{
          color, // Text color
          borderTopColor: borderColor, // Border color only
        }}
      >
        {heading}
      </h1>
    </Fragment>
  );
}
