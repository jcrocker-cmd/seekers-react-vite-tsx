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
import Gallery from "./components/pages/Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createGlobalStyle } from "styled-components";
import ScrollToTop from "./components/common/ScrollTop";
import InternalServerErrorPage from "./components/pages/InternalServerErrorPage";
import Counter from "./components/pages/Counter";
import Create from "./components/crud/Create";
import Index from "./components/crud/Index";
import View from "./components/crud/View";
import Edit from "./components/crud/Edit";
import Register from "../src/components/react-hook-form/register";
import GallerySwiper from "./components/common/Gallery";

function AppContent() {
  return (
    <>
      {/* <Navbar /> */}
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar></Navbar>
              <Homepage />
              <Principles />
              <BoardMember />
              <Statement />
              <GallerySwiper />
              <Affiliation />
              <ContactUsLayout />
              <Footer />
            </>
          }
        />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/index" element={<Index />} />
        <Route path="/customers/:id/view" element={<View />} />
        <Route path="/customers/:id/edit" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/500" element={<InternalServerErrorPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
