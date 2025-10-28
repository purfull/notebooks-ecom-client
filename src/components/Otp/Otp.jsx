import React, { useState } from "react";
import "./Otp.scss";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // get query param
  const type = searchParams.get("type");

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP!");
      return;
    }

    //fake condition
    if (otp === "123456") {
      console.log("OTP verified successfully");

      
      if (type === "register") {
        navigate("/register?step=2");
      } else if (type === "forget") {
        navigate("/forgetpassword");
      } else {
        alert("OTP verified successfully!");
      }
    }
  };

  return (
    <div className="otp-container">
      <form className="otp-form" onSubmit={handleSubmit}>
        <h3 className="otp-header">Verify your Password</h3>
        <p className="otp-info">
          {type === "register"
            ? "We’ve sent a verification code to your email for registration."
            : type === "forget"
            ? "We’ve sent a verification code to your email for password reset."
            : "We’ve sent a verification code to your email."}
        </p>

        <div className="otp-form-group">
          <label htmlFor="otp" className="otp-form-label">
            Verify OTP
          </label>
          <div className="verify">
            <input
              className="otp-form-input"
              type="text"
              id="otp"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={handleOtpChange}
              inputMode="numeric"
              maxLength={6}
              required
            />
            <button className="verification-button">Verify</button>
          </div>
        </div>

        <div className="otp-form-bottom-button">
          {/* <button className="next">Submit</button> */}
          <Link to="/login" className="back">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Otp;
