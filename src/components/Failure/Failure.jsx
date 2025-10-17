import React from "react";
import "./Failure.scss";
import FailureIcon from "../../assets/icon/cancelled.png";
export default function Failure() {
  return (
    <div className="failure-wrapper">
      <div className="failure-card">
        <img src={FailureIcon} alt="Payment Failed" className="failure-icon" />
        <h1 className="failure-title">Payment Failed</h1>
        <p className="failure-message">
          Oops! Something went wrong while processing your payment.
        </p>
        <p className="failure-subtext">
          Please try again or choose a different payment method.
        </p>

        <div className="failure-summary">
          <p>
            <strong>Status:</strong> Failed
          </p>
          <p>
            <strong>Reason:</strong> Transaction declined or cancelled
          </p>
        </div>

        <div className="failure-buttons">
          <a href="/cart" className="retry-button">
            ↻ Try Again
          </a>
          <a href="/" className="back-home-button">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
