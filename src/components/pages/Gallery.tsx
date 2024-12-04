import LightGallery from "../layout/LightGallery";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Title from "../common/Title";

function Gallery() {
  return (
    <>
      <Navbar></Navbar>
      <Title
        titleText="Gallery"
        backgroundImageUrl={"../../images/ministry.jpg"}
      ></Title>
      <LightGallery></LightGallery>
      <Footer></Footer>
    </>
  );
}

export default Gallery;
