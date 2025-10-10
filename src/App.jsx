import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
function App() {
  
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navHeight = document.getElementsByClassName("navbar")[0]
      console.log(navHeight.offsetHeight);
      
      setNavHeight(navHeight.offsetHeight);
  }, []);
  return (
    <>
      <div style={{paddingTop: navHeight, padding: "3% 5%"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
