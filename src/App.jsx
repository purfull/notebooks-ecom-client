import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Navbar/Navbar";
import Tracking from "./components/OrderTracking/OrderTracking";
import UserProfile from "./components/UserProfile/UserProfile";
import Login from "./components/LogIn/Login";
import Register from "./components/Register/Register";
function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navHeight = document.getElementsByClassName("navbar")[0];
    console.log(navHeight.offsetHeight);

    setNavHeight(navHeight.offsetHeight);
  }, []);
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: navHeight, padding: "3% 5%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Cart />} />
          <Route path="/ordertracking" element={<Tracking />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
