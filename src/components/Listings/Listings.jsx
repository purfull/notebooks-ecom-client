import React from "react";
import { Card, Button, Rate } from "antd";
import NoteImage from "../../assets/images/note.jpg";
import {products} from "../../data/productData";
import "./Listings.scss";
import { useNavigate } from "react-router-dom";
const Listings = () => {
  const navigate = useNavigate()
  // const products = Array(7).fill({
  //   id: 1,
  //   title: "Cursive Handwriting for Kids: Sentence Workbook (Ages 6–10) | Bestseller for Fluent Handwriting",
  //   price: 905,
  //     originalPrice: 925,
  //     discount: "2% off",
  //   quantity: "1",
  //   image: NoteImage,
  //   rating: 4.5,
  // });


  const handleProductCardClick = (productId) => {
    navigate(`product-detail/${productId}`)
  }
  return (
    <div className="listings-component">
      <h2>Explore our Notebooks!</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index} onClick={() => handleProductCardClick(product.id)}>
            <img src={product.image} alt={product.title} />
            <div className="product-card-content">
              
            <h3>{product.title}</h3>
            {/* <span>{product.quantity}</span> */}
            
              <div className="rating">
                <Rate allowHalf disabled defaultValue={product.rating} />
                <span className="rating-text">{product.rating}</span>
              </div>
            <div className="price-section">
                <span className="current-price">₹{product.price}</span>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discount">{product.discount}</span>
              </div>
            {/* <Button className="add-cart-button">Add to Cart</Button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
