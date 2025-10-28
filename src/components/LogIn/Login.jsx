import React, { useState } from "react";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { createlogin } from "../../store/slice/registerSlice";
import "./Login.scss";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    navigate("/verify-otp?type=forget");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Sign in to access your account</p>

        {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(jwtDecode(credentialResponse.credential));
            navigate("/feed");
          }}
          onError={() => console.log("Login failed")}
        /> */}

        {/* <div className="divider">or</div> */}

        <form className="login-form">
          {/* <form className="login-form" onSubmit={handleLoginSubmit}> */}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            {/* <div className="password-wrapper"> */}
              <input
                className="login-password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {/* <span
                className="toggle-eye-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span> */}
            {/* </div> */}
          </div>

          <div className="form-footer">
            <Link to="/forgetpassword?type=forget" className="forgot-link">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="login-button"
            onClick={handleLoginSubmit}
          >
            Sign In
          </button>
        </form>

        <div className="register-link">
          <p>New here?</p>
          <Link to="/register">Join Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
