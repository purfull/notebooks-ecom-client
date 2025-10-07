import React from "react";
import { Card, Button } from "antd";
import NoteImage from "../../assets/images/note.jpg";
import "./Listings.css";
const Listings = () => {
  const products = Array(7).fill({
    id: 1,
    name: "Notebook A",
    price: "₹100",
    quantity: "1",
    image: NoteImage,
  });

  return (
    <div className="listings-component" style={{ padding: "20px" }}>
      <h2>Explore our Notebooks!</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <Card className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <span>{product.quantity}</span>
            <p>{product.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Listings;
