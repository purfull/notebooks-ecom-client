import React, { useEffect, useState } from "react";
import "./Cart.scss";
import Navbar from "../Navbar/Navbar";
import { Card, Divider, Radio, Space } from "antd";
import Note from "../../assets/images/note.jpg";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]); // to store cart items
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartWithQuantity = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1, // default quantity = 1
    }));
    setCartItems(cartWithQuantity);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // const [amount, setAmount] = useState("");

  // const handleChange = (e) => {
  //   setAmount(e.target.value);
  // };

  const [formData, setFormData] = useState({
    // firstname: "",
    // lastname: "",
    address: "",
    // city: "",
    zipcode: "",
    // mobile: "",
    // email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Restrict zipcode to digits only
    if (id === "zipcode") {
      // Allow empty string to let user delete
      if (!/^\d*$/.test(value)) return;
      // Limit to max 6 digits
      if (value.length > 6) return;
    }

    setFormData({
      ...formData,
      [id]: value,
    });
    // setAmount(e.target.value);
  };

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.address.trim()) {
      errors.address = "Address is required.";
    }

    if (!/^\d{6}$/.test(formData.zipcode)) {
      errors.zipcode = "Pin code must be exactly 6 digits.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("Delivery Info Submitted:", formData);
    alert("Delivery Information Submitted!");
  };

  const increase = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const updateQuantity = (id, change) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, Math.min(10, item.quantity + change));
        return { ...item, quantity: newQty };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmitPayment = (e) => {
    e.preventDefault();

    // Validate form first
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Please fix errors in the form before proceeding!");
      return;
    }

    setErrors({}); // clear errors if valid

    if (paymentMethod === "Cash on Delivery") {
      alert("Order placed successfully with Cash on Delivery!");
      navigate("/success");
      return;
    }

    //payment integration
    var options = {
      key: "rzp_test_RURZe7RfRNLjyf",
      key_secret: "P1xhi1cmEU3lxvP1xllgmX3f",
      amount: "100",
      currency: "INR",
      name: "NoteBook",
      description: "Selling notebooks and stationery",
      handler: function (response) {
        console.log("Payment ID:", response.razorpay_payment_id);
        console.log("Order ID:", response.razorpay_order_id);
        console.log("Signature:", response.razorpay_signature);
      },
      callback_url: " ",
      prefill: {
        name: "Sanjay",
        email: "xyz@gmail.com",
        phone: "",
      },
      notes: {
        address: "Nagercoil",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options); //initialize
    pay.open(); //fn
  };
  return (
    <div className="cart-component">
      <div className="shopping-cart">
        <div className="review-container">
          {/* Review Item */}
          <Card className="review-item">
            <h3 className="summary-title">Review Item and Shipping</h3>
            <Divider />

            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div className="cart-display" key={item.id}>
                  <div className="for-image">
                    <img src={item.image} alt="cart-items-img" />
                  </div>
                  <div className="for-cart-details">
                    <h3 className="cart-details-title">{item.name}</h3>
                    <p>{item.description}</p>

                    <div className="cart-option-col">
                      <div className="quantity-selector">
                        <button
                          className="quantity-btn down"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={item.quantity}
                          min="1"
                          max="10"
                          step="1"
                          // readOnly
                        />
                        <button
                          className="quantity-btn up"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>

                      {/* dispatch delete cart in its onclick */}

                      <div className="delete-icon">
                        <MdDelete
                          onClick={() => removeItem(item.id)}
                          style={{
                            fontSize: "25px",
                            color: "black",
                            marginTop: "10px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="for-cart-details">
                    <h3 className="cart-details-title">Notebook</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>

                    <div className="cart-option-col">
                      <div className="quantity-selector">
                        <button
                          className="quantity-btn down"
                          onClick={decrease}
                        >
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

                      <div className="delete-icon">
                        <MdDelete
                          style={{
                            fontSize: "25px",
                            color: "black",
                            marginTop: "10px",
                          }}
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="for-price">₹{item.price * item.quantity}</div>
                </div>
              ))
            )}

            <Divider />
          </Card>
        </div>

        {/* Order Summary */}
        <Card className="summary">
          <h2 className="summary-title">Order summary</h2>
          <Divider />

          {/* Subtotal*/}
          <div className="subtotal-container">
            <div className="sub-div">
              <p className="subtotal">Subtotal(1 item):</p>
              <p className="subtotal-price">₹{subtotal.toFixed(2)}</p>
            </div>
          </div>

          {/* Delivery Info Form */}
          <div className="customer-info">
            <p className="summary-title">Delivery Address</p>
            <form
              id="userForm"
              onSubmit={handleSubmit}
              className="delivery-form"
            >
              {/* <label>First Name</label>
              <input
                type="text"
                id="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              /> */}

              {/* <label>Last Name</label>
              <input
                type="text"
                id="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              /> */}

              <label className="delivery-info-label" htmlFor="address">
                Address
              </label>
              <textarea
                id="address"
                className="delivery-info-input"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address with city"
                required
              />
              {errors.address && <p className="error-text">{errors.address}</p>}

              {/* <label>City</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
              /> */}

              <label className="delivery-info-label" htmlFor="zipcode">
                Pin Code
              </label>
              <input
                type="text"
                id="zipcode"
                className="delivery-info-input"
                value={formData.zipcode}
                onChange={handleChange}
                pattern="[0-9]{6}"
                placeholder="6 digit code"
                required
              />
              {errors.zipcode && <p className="error-text">{errors.zipcode}</p>}

              {/* <label>Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="10 digit number"
                required
              /> */}

              {/* <label>Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              /> */}
              <div className="submit-row">
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <h4 className="payment-details">Payment Details</h4>
          <div className="payment-options">
            <Radio.Group
              onChange={(e) => setPaymentMethod(e.target.value)}
              value={paymentMethod}
            >
              <Space direction="vertical">
                <Radio value="Cash on Delivery">Cash on Delivery</Radio>
                <Radio value="paynow">Pay Now</Radio>
                {/* <Radio value="Paypal">Paypal</Radio>
                <Radio value="Credit or Debit card">Credit or Debit card</Radio> */}
              </Space>
            </Radio.Group>
          </div>
          <div className="pay">
            <button
              className="proceedtopay"
              type="button"
              onClick={handleSubmitPayment}
            >
              Proceed to Pay
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
