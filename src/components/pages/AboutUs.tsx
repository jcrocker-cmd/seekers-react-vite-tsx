import Navbar from "../layout/Navbar";
import Principles from "../layout/Principles";
import Title from "../common/Title";
import Footer from "../layout/Footer";
// import BackgroundUrl from "../../images/ministry.jpg";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Title
        titleText="About Us"
        backgroundImageUrl={"../../images/ministry.jpg"}
      ></Title>
      <Principles></Principles>
      <Footer></Footer>
    </div>
  );
}

export default App;
