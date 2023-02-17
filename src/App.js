import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header.js";
import HomePage from "./pages/HomePage";
import SeeAllCities from "./pages/SeeAllCities";
import CityDetails from "./pages/CityDetails";
import HomeDetail from "./pages/HomeDetail";
import BookViewingModal from "./pages/BookViewingModal";
import ContactUsModal from "./pages/ContactUsModal";
import Footer from "./components/Footer/Footer.js";

export default function App() {
  const apiKey = "";
  const baseUrl = "https://unilife-server.herokuapp.com/";

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage apiKey={apiKey} baseUrl={baseUrl} />}
        />
        <Route path="/seeallcities/" element={<SeeAllCities />} />
        <Route path="/citydetails/" element={<CityDetails />} />
        <Route path="/homedetail/" element={<HomeDetail />} />
        <Route path="/bookviewingmodal/" element={<BookViewingModal />} />
        <Route path="contactusmodal/" element={<ContactUsModal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
