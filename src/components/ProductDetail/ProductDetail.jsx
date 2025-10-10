import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import Navbar from "../Navbar/Navbar";
import Note from "../../assets/images/note.jpg";
import { products } from "../../data/productData";
import { Button, Rate } from "antd";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const [productData, setProductData] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    const productData = products.find((el) => el.id == id);
    setProductData(productData);
  }, []);

  return (
    <div className="productdetail-component">
      <Navbar />
      <div className="product-detail-page">
        <div className="detail-left">
          <img
            src={productData?.image} // src={product.image} // alt={product.name}
            className="detail-image"
          />
        </div>
        <div className="detail-right">
          <h1>{productData?.title} </h1>
          <div className="rating">
            <Rate allowHalf disabled defaultValue={productData?.rating} />
            <span className="rating-text">{productData?.rating}</span>
          </div>
          <p className="description">{productData?.description}</p>

          <div className="price-section">
            <span className="current-price">₹{productData?.price}</span>
            <span className="original-price">
              ₹{productData?.originalPrice}
            </span>
            <span className="discount">{productData?.discount}</span>
          </div>
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
