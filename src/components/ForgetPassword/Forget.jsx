import React from "react";
import { Link } from "react-router-dom";
import "./Forget.scss";


const Forget = () => {
  return (
    <div className="forget-container">
      <form className="forget-form">
        <h3 className="forget-header">Reset your Password</h3>
        <p className="forget-info">
          We’ll send a verification code to this email if it matches an existing
          LinkedIn account.
        </p>

        <div className="forget-form-group">
          <label htmlFor="email" className="forget-form-label">
            Email
          </label>
          <input
            className="forget-form-input"
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="verify">
          <button className="verification-button">Sent OTP</button>
        </div>

        <div className="forget-form-group">
          <label htmlFor="otp" className="forget-form-label">
            Otp verify
          </label>
          <input
            className="forget-form-input"
            type="text"
            id="otp"
            placeholder="Enter your Otp sent in mail"
            required
          />
        </div>

        <div className="verify">
          <button className="verification-button">Verify OTP</button>
        </div>

        <div className="forget-form-group">
          <label htmlFor="new-password" className="forget-form-label">
            New Password
          </label>
          <input
            className="forget-form-input"
            type="password"
            id="new-password"
            placeholder="Enter your New Password"
            required
          />
        </div>

        <div className="forget-form-group">
          <label htmlFor="confirm-password" className="forget-form-label">
            Confirm Password
          </label>
          <input
            className="forget-form-input"
            type="password"
            id="confirm-password"
            placeholder="Confirm your New Password"
            required
          />
        </div>

        <div className="forget-form-bottom-button">
          <button className="next">Submit</button>
          <Link to="/login" className="back">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Forget;
