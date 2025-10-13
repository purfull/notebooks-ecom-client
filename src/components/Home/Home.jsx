import React from "react";
import Banner from "../Banner/Banner";
import Listings from "../Listings/Listings";

import "./home.css";
import NavBar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-page">
        <Banner />
        <Listings />

        {/* <ProductCarousel /> */}
      </div>
    </div>
  );
};

export default Home;
