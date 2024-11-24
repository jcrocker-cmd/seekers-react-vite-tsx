import "./App.css";
import Homepage from "./components/layout/Homepage";
import Navbar from "./components/layout/Navbar";
import Principles from "./components/layout/Principles";
import Footer from "./components/layout/Footer";
import Statement from "./components/layout/Statement";
import Ministries from "./components/pages/Ministries";
import Affiliation from "./components/layout/Affiliations";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import ContactUsLayout from "./components/layout/ContactUs";
import NotFoundPage from "./components/pages/NotFoundPage";
import ServicesPage from "./components/pages/ServicesPage";
import BoardMember from "./components/layout/BoardMember";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import ScrollToTop from "./components/common/ScrollTop";
import InternalServerErrorPage from "./components/pages/InternalServerErrorPage";

// Correct way to include Google Fonts in styled-components
const GlobalStyle = createGlobalStyle`
  /* Importing Google Fonts URL */
  body {
    font-family: 'Roboto', sans-serif;
  }

  .alt-font {
    font-family: 'Open Sans', sans-serif;
  }
`;

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GlobalStyle />
                <Navbar></Navbar>
                <Homepage></Homepage>
                <Principles></Principles>
                <BoardMember></BoardMember>
                <Statement></Statement>
                <Affiliation></Affiliation>
                <ContactUsLayout></ContactUsLayout>
                <Footer></Footer>
              </>
            }
          />

          <Route
            path="/ministries"
            element={
              <>
                <Ministries></Ministries>
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <AboutUs></AboutUs>
              </>
            }
          />

          <Route
            path="/contact-us"
            element={
              <>
                <ContactUs></ContactUs>
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <ServicesPage></ServicesPage>
              </>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/500" element={<InternalServerErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
