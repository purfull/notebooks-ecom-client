import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Forget.scss";
import { sendotp } from "../../store/slice/otpslice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Forget = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  //email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//sumbitt for send otp forget password page 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        setError("Email is required!");
        return;
      }

      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address!");
        return;
      }
      const identifier = email;
      await dispatch(sendotp({ type: "reset-password", identifier: identifier })).unwrap();
      navigate(`/verify-otp?type=reset-password&identifier=${email}`);

      alert("otp sended successfully");
      console.log("Valid email:", email);
      setError("");
    } catch (err) {
      console.log(err, "error");
    }
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
          {/* <button className="next">Next</button> */}
          <Link to="/verify-otp" className="next">
            Next
          </Link>
          <Link to="/login" className="back">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Forget;
