import React from "react";
import "./ProductDetail.scss";
import Navbar from "../Navbar/Navbar";
import Note from "../../assets/images/note.jpg";
import { Button } from "antd";
const ProductDetail = () => {
  return (
    <div className="productdetail-component">
      <Navbar />
      <div className="product-detail-page">
        <div className="detail-left">
          <img
            src={Note} // src={product.image} // alt={product.name}
            className="detail-image"
          />
        </div>
        <div className="detail-right">
          <h1>Cursive Notebook </h1>
          <p className="description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p className="price">$100</p>
          <div className="purchase-butons">
            <Button className="buynow">Buy Now</Button>
            <Button className="addcart">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
