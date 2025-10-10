import React from "react";
import { Card, Button, Rate } from "antd";
import NoteImage from "../../assets/images/note.jpg";
import "./Listings.scss";
const Listings = () => {
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

  const products = [
    {
    id: 1,
    title: "Cursive Handwriting for Kids: Sentence Workbook (Ages 6–10) | Bestseller for Fluent Handwriting",
    price: 905,
      originalPrice: 925,
      discount: "2% off",
    quantity: "1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQc_sO6nvK0L0nGX5nnPZCZ6CqVWlz5voB0g&s",
    rating: 4.5,
  },
  {
    id: 1,
    title: "Cursive Handwriting for Kids: Sentence Workbook (Ages 6–10) | Bestseller for Fluent Handwriting",
    price: 905,
      originalPrice: 925,
      discount: "2% off",
    quantity: "1",
    image: "https://i.pinimg.com/1200x/9a/b1/d7/9ab1d789d8729d6cb8c60d9381395626.jpg",
    rating: 4.5,
  },
  {
    id: 1,
    title: "Cursive Handwriting for Kids: Sentence Workbook (Ages 6–10) | Bestseller for Fluent Handwriting",
    price: 905,
      originalPrice: 925,
      discount: "2% off",
    quantity: "1",
    image: "https://i.pinimg.com/1200x/20/96/07/209607a7971c00195fcc4eed09a97a58.jpg",
    rating: 4.5,
  },
  {
    id: 1,
    title: "Cursive Handwriting for Kids: Sentence Workbook (Ages 6–10) | Bestseller for Fluent Handwriting",
    price: 905,
      originalPrice: 925,
      discount: "2% off",
    quantity: "1",
    image: "https://i.pinimg.com/736x/f4/06/02/f4060297eb57d947fca9b9ec9e3b050c.jpg",
    rating: 4.5,
  },
    
  {
    id: 1,
    title: "Cursive Handwriting for Kids: Sentence Workbook (Ages 6–10) | Bestseller for Fluent Handwriting",
    price: 905,
      originalPrice: 925,
      discount: "2% off",
    quantity: "1",
    image: "https://i.pinimg.com/1200x/20/96/07/209607a7971c00195fcc4eed09a97a58.jpg",
    rating: 4.5,
  },
  {
    id: 1,
    title: "Cursive Handwriting for Kids: Sentence Workbook (Ages 6–10) | Bestseller for Fluent Handwriting",
    price: 905,
      originalPrice: 925,
      discount: "2% off",
    quantity: "1",
    image: "https://i.pinimg.com/736x/f4/06/02/f4060297eb57d947fca9b9ec9e3b050c.jpg",
    rating: 4.5,
  },
  {
    id: 1,
    title: "Cursive Handwriting for Kids: Sentence Workbook (Ages 6–10) | Bestseller for Fluent Handwriting",
    price: 905,
      originalPrice: 925,
      discount: "2% off",
    quantity: "1",
    image: "https://i.pinimg.com/1200x/9a/b1/d7/9ab1d789d8729d6cb8c60d9381395626.jpg",
    rating: 4.5,
  },
  {
    id: 1,
    title: "Cursive Handwriting for Kids: Sentence Workbook (Ages 6–10) | Bestseller for Fluent Handwriting",
    price: 905,
      originalPrice: 925,
      discount: "2% off",
    quantity: "1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQc_sO6nvK0L0nGX5nnPZCZ6CqVWlz5voB0g&s",
    rating: 4.5,
  },
  ];

  return (
    <div className="listings-component">
      <h2>Explore our Notebooks!</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
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
