import React from "react";
import Banner from "../Banner/Banner";
import Listings from "../Listings/Listings";
import Navbar from "../Navbar/Navbar";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-page">
        <Banner />
        <Listings />
        {/* <ProductCarousel /> */}
      </div>
    </div>
  );
};

export default Home;
