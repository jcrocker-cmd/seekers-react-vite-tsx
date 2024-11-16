import Navbar from "../layout/Navbar";
import Ministry from "../layout/Ministry";
import Title from "../common/Title";
import Footer from "../layout/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Title
        titleText="Ministries"
        backgroundImageUrl={"../../images/ministry.jpg"}
      ></Title>
      <Ministry></Ministry>
      <Footer></Footer>
    </div>
  );
}

export default App;
