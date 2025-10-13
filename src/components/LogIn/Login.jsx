import React, { useState } from "react";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { createlogin } from "../../store/slice/registerSlice";
import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const handleLoginSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const result = await dispatch(createlogin(formData)).unwrap();
  //       if (result.success) {
  //         alert("Login successfully!");
  //         navigate("/feed");
  //       } else {
  //         alert("Email or password is incorrect!");
  //       }
  //     } catch (err) {
  //       alert("Login failed. Please check your credentials!");
  //       console.error(err);
  //     }
  //   };

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
              //   onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              //   onChange={handleChange}
              required
            />
          </div>

          <div className="form-footer">
            <Link to="/password-reset" className="forgot-link">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-button">
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
