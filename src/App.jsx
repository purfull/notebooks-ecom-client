import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Navbar/Navbar";
import Tracking from "./components/OrderTracking/OrderTracking";
import UserProfile from "./components/UserProfile/UserProfile";
import Login from "./components/LogIn/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Support from "./components/Support/Support";
import Success from "./components/Success/Success";
import Failure from "./components/Failure/Failure";
import Detail from "./components/ProductDetail/ProductDetail";
import store from "./store/store";
import { Provider } from "react-redux";
import Forget from "./components/ForgetPassword/Forget";

function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navHeight = document.getElementsByClassName("navbar")[0];
    console.log(navHeight.offsetHeight);

    setNavHeight(navHeight.offsetHeight);
  }, []);
  return (
    <Provider store={store}>
      <NavBar />
      <div style={{ paddingTop: navHeight, padding: "3% 5%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forgetpassword" element={<Forget />} />
          <Route path="/product-detail/:id" element={<Detail />} />
          {/* <Route path="/product-detail/:id" element={<ProductDetail />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/ordertracking" element={<Tracking />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support" element={<Support />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
