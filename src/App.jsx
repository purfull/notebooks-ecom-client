import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
      <div>
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
