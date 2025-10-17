import React from "react";
import "./Success.scss";
import SuccessImg from "../../assets/icon/greentick.jpg";
const Success = () => {
  return (
    <div className="success-wrapper">
      <div className="success-card">
        <img src={SuccessImg} alt="Success" className="success-icon" />
        <h1 className="success-title">Payment Successful</h1>
        <p className="success-message">
          Thank you, <strong>Customer Name</strong>!
        </p>
        <p className="success-subtext">
          A receipt has been sent to <strong>your email</strong>
        </p>

        <div className="success-summary">
          <p>
            <strong>Total Paid:</strong> 100
          </p>
          <p>
            <strong>Status:</strong> Success
          </p>
          <p>
            <strong>Address:</strong> xyz Nagar
          </p>
        </div>

        <div className="success-items">
          <h3>Order Summary</h3>
          {/* {session.line_items?.data.map((item, index) => ( */}
          <div className="item-row">
            <div className="item-info">
              {/* <p className="item-name">{item.description}</p>
                <p className="item-qty">Qty: {item.quantity}</p> */}
              <p className="item-name">Description</p>
              <p className="item-qty">Qty: 2</p>
            </div>
            <p className="item-price">
              {/* ${(item.amount_total / 100).toFixed(2)}{" "}
              {item.currency.toUpperCase()} */}
              100
            </p>
          </div>
          {/* ))} */}
        </div>

        <a href="/" className="back-home-button">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Success;
