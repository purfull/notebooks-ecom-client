import React, { useState } from "react";
import "./Otp.scss";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../store/slice/otpslice";

const Otp = () => {

  //selectors 
  const otpselectors = useSelector((state) => state.otp)

  //dispatch
  const dispatch = useDispatch();

  const [otp, setOtp] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // get query param
  const type = searchParams.get("type");
  const identifier = searchParams.get("identifier");

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 6) {
      setOtp(value);
    }
  };

const verifysumbit = async (e) => {
  e.preventDefault();

  if (otp.length !== 6) {
    alert("Please enter a valid 6-digit OTP!");
    return;
  }

  try {
    // store the response returned from the thunk
    const response = await dispatch(
      verifyOtp({ otp:otp, type:type, identifier:identifier ,})
    ).unwrap();

    console.log("OTP verify response:", response);

    if (response.success) {
      // ✅ save token locally
      localStorage.setItem("resetToken", response.resetToken);

      alert("OTP verified successfully!");
        
      // ✅ navigate according to type
      if (type === "register") {
        navigate("/register?step=2");
      } else if (type === "forget") {
        navigate("/forgetpassword");
      } else {
        navigate("/");
      }
    } else {
      alert("OTP verification failed!");
    }
  } catch (err) {
    console.error("Verification failed:", err);
    alert("OTP verification failed!");
  }
};


  return (
    <div className="otp-container">
      <form className="otp-form" onSubmit={verifysumbit}>
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
