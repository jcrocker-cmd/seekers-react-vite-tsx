import "swiper/css";
import "swiper/css/effect-cards";
import Wrapper from "./Wrapper";
import { ministriesData, MinistriesDataProps } from "../data/ministriesData";
import Section from "./Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

function Gallery() {
  return (
    <Wrapper className="w-[100%]">
      <Section className="py-20 mx-auto max-w-custom flex flex-col justify-center max-sm:px-10">
        <h1 className="font-mont text-center text-6xl font-bold pb-20 max-lg:text-4xl max-md:pb-5">
          Gallery
        </h1>

        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
          {ministriesData.map(
            (ministry: MinistriesDataProps, index: number) => (
              <SwiperSlide
                key={index}
                className="custom-slide h-[500px] w-[300px]"
              >
                <img
                  src={ministry.imageUrl}
                  alt={ministry.titleText || `Slide ${index + 1}`}
                  className="object-cover h-full w-full"
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Section>
    </Wrapper>
  );
}

export default Gallery;
