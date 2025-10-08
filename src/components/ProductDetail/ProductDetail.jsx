import React from "react";
import "./ProductDetail.css";
import Navbar from "../Navbar/Navbar";
const ProductDetail = () => {
  return (
    <div className="productdetail-component">
      <Navbar />
      <div className="product-detail-page">
        <div className="detail-left">
          <img
            // src={product.image}
            // alt={product.name}
            className="detail-image"
          />
        </div>
        <div className="detail-right">Order Summary</div>
      </div>
    </div>
  );
};

export default ProductDetail;
