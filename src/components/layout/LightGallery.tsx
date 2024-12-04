// Import necessary styles and plugins
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import "../../assets/css/gallery.css";
import Section from "../common/Section";
import Wrapper from "../common/Wrapper";
import bcp from "../../images/mens.jpg";
import img_2 from "../../images/outreach.jpg";
import img_3 from "../../images/vbs.jpg";
import img_4 from "../../images/ministry.jpg";
import img_5 from "../../images/music.jpg";
import img_6 from "../../images/compassion.jpg";
import img_7 from "../../images/sunday.jpg";
import img_8 from "../../images/prayer.jpg";

const ResponsiveGallery = () => {
  const onInit = () => {
    console.log("LightGallery initialized");
  };

  return (
    <Wrapper className="w-[100%]">
      <Section className="py-10 mx-auto max-w-custom flex flex-wrap">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="custom-lightgallery flex flex-wrap gap-4 justify-center gap-1"
        >
          {/* Gallery Images */}
          <a href={bcp}>
            <img
              alt="Gallery Image 1"
              src={bcp}
              className="gallery-image w-40 h-40 object-cover"
            />
          </a>
          <a href={img_2}>
            <img
              alt="Gallery Image 2"
              src={img_2}
              className="gallery-image w-40 h-40 object-cover"
            />
          </a>
          <a href={img_3}>
            <img
              alt="Gallery Image 3"
              src={img_3}
              className="gallery-image w-40 h-40 object-cover"
            />
          </a>
          <a href={img_4}>
            <img
              alt="Gallery Image 3"
              src={img_4}
              className="gallery-image w-40 h-40 object-cover"
            />
          </a>
          <a href={img_5}>
            <img
              alt="Gallery Image 3"
              src={img_5}
              className="gallery-image w-40 h-40 object-cover"
            />
          </a>
          <a href={img_6}>
            <img
              alt="Gallery Image 3"
              src={img_6}
              className="gallery-image w-40 h-40 object-cover"
            />
          </a>
          <a href={img_7}>
            <img
              alt="Gallery Image 3"
              src={img_7}
              className="gallery-image w-40 h-40 object-cover"
            />
          </a>
          <a href={img_8}>
            <img
              alt="Gallery Image 3"
              src={img_8}
              className="gallery-image w-40 h-40 object-cover"
            />
          </a>
        </LightGallery>
      </Section>
    </Wrapper>
  );
};

export default ResponsiveGallery;
