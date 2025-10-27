import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forget.scss";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  //email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required!");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    setError("");
    console.log("Valid email:", email);
  };

  return (
    <div className="forget-container">
      <form className="forget-form" onSubmit={handleSubmit}>
        <h3 className="forget-header">Forget Password</h3>

        {error && <p className="error-message">{error}</p>}

        <div className="forget-form-group">
          <label htmlFor="email" className="forget-form-label">
            Email
          </label>
          <input
            className="forget-form-input"
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="verify">
          <button className="verification-button">Sent OTP</button>
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
