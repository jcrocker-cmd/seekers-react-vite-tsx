import Navbar from "../layout/Navbar";
import ContactUs from "../layout/ContactUs";
import Title from "../common/Title";
import Footer from "../layout/Footer";
// import BackgroundUrl from "../../images/ministry.jpg";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Title
        titleText="Contact Us"
        backgroundImageUrl={"../../images/ministry.jpg"}
      ></Title>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
