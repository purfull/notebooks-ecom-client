import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
