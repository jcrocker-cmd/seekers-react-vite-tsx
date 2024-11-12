import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../../assets/css/main.css";
// import BackgroundUrl from "../../images/ministry.jpg";

// interface CardProps {
//   titleText: string;
//   backgroundImageUrl?: string;
// }

function Card() {
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
      <div className="card-wrapper w-full bg-neutral-900 min-h-[100%]">
        <div className="card-section mx-auto max-w-custom w-full flex h-[30vh] justify-center items-center">
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
