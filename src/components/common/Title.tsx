import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../../assets/css/main.scss";
// import BackgroundUrl from "../../images/ministry.jpg";

interface TitlePageProps {
  titleText: string;
  backgroundImageUrl?: string;
}

export default function TitlePage({
  titleText,
  backgroundImageUrl = require("../../images/ministry.jpg"),
}: TitlePageProps) {
  useEffect(() => {
    ScrollReveal().reveal(".title", {
      delay: 400,
      duration: 2000,
      distance: "50px",
      origin: "bottom",
    });
  }, []);
  return (
    <div>
      <div className="title-wrapper w-full bg-neutral-900 min-h-[100%]">
        <div
          className="title-section mx-auto max-w-custom w-full flex h-[30vh] justify-center items-center"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
          }}
        >
          <h1 className="title text-8xl text-white font-mont font-semibold z-10 title-glow">
            {titleText}
          </h1>
        </div>
      </div>
    </div>
  );
}
