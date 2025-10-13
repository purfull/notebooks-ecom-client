import React, { useState } from "react";
import "./Cart.scss";
import Navbar from "../Navbar/Navbar";
import { Card, Divider, Radio, Space } from "antd";
import Note from "../../assets/images/note.jpg";

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [quantity, setQuantity] = useState(0);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zipcode: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Delivery Info Submitted:", formData);
    alert("Delivery Information Submitted!");
  };

  const increase = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="cart-component">
      <div className="shopping-cart">
        <div className="review-container">
          {/* Review Item */}
          <Card className="review-item">
            <h3 className="summary-title">Review Item and Shipping</h3>
            <div className="cart-display">
              <div className="for-image">
                <img src={Note} alt="Notebook" />
              </div>
              <div className="for-cart-details">
                <h3>Notebook</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="quantity-selector">
                  <button className="quantity-btn down" onClick={decrease}>
                    -
                  </button>
                  <input
                    type="number"
                    className="quantity-input"
                    value={quantity}
                    min="0"
                    max="10"
                    step="1"
                    // readOnly
                  />
                  <button className="quantity-btn up" onClick={increase}>
                    +
                  </button>
                </div>
              </div>
              <div className="for-price">$100</div>
            </div>
          </Card>

          {/* Delivery Info Form */}
          <Card className="customer-info">
            <h4 className="summary-title">Delivery Information</h4>
            <form
              id="userForm"
              onSubmit={handleSubmit}
              className="delivery-form"
            >
              <label>First Name</label>
              <input
                type="text"
                id="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />

              <label>Last Name</label>
              <input
                type="text"
                id="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />

              <label>Address</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <label>City</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
              />

              <label>Zip Code</label>
              <input
                type="text"
                id="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                pattern="[0-9]{6}"
                placeholder="6 digit code"
                required
              />

              <label>Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="10 digit number"
                required
              />

              <label>Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </form>
            <div className="submit-row">
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </Card>
        </div>

        {/* Order Summary */}
        <Card className="summary">
          <h2 className="summary-title">Order summary</h2>
          <Divider />
          <h4 className="payment-details">Payment Details</h4>
          <div className="payment-options">
            <Radio.Group
              onChange={(e) => setPaymentMethod(e.target.value)}
              value={paymentMethod}
            >
              <Space direction="vertical">
                <Radio value="Cash on Delivery">Cash on Delivery</Radio>
                <Radio value="Shopcart Card">Upi</Radio>
                <Radio value="Paypal">Paypal</Radio>
                <Radio value="Credit or Debit card">Credit or Debit card</Radio>
              </Space>
            </Radio.Group>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
