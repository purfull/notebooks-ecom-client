import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
import "./Register.scss";
import { ClipLoader, PulseLoader } from "react-spinners";
import axios from "axios";

const Register = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  //err message
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    orderchoice: "",
    email: "",
    password: "",
    orgName: "",
    position: "",
    phone: "",
    address: "",
    zip_code: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = (e) => {
    e.preventDefault();

    //password validation 8 character needed
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must be at least 8 characters long, include one uppercase, one lowercase, one number, and one special character."
      );
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //loader
    setLoading(true);

    // console.log("Registration Data:", formData);
    // alert("Registration submitted!");

    try {
      const response = await axios.post("https://api/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Form submitted successfully:", response.data);
      alert("Registration submitted!");
    } catch (err) {
      console.log("error", err.response?.data || err.message);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  // };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="register-title">Create your account</h2>
        <p className="register-subtitle">Enjoy shopping!</p>

        {step === 1 && (
          <form className="register-form" onSubmit={handleContinue}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
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
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Are looking to purchase in Bulk Orders?</label>

              <div>
                <label>
                  <input
                    type="radio"
                    name="orderchoice"
                    value="yes"
                    checked={formData.orderchoice === "yes"}
                    onChange={(e) =>
                      setFormData({ ...formData, orderchoice: e.target.value })
                    }
                    required
                  />
                  Yes
                </label>

                <label>
                  <input
                    type="radio"
                    name="orderchoice"
                    value="no"
                    checked={formData.orderchoice === "no"}
                    onChange={(e) =>
                      setFormData({ ...formData, orderchoice: e.target.value })
                    }
                    required
                  />
                  No
                </label>
              </div>
            </div>

            {formData.orderchoice === "yes" && (
              <>
                <div className="form-group">
                  <label>Your Organisation Name</label>
                  <input
                    type="text"
                    name="orgName"
                    placeholder="Enter your Organisation Name"
                    value={formData.orgName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Position in the Organisation</label>
                  <input
                    type="text"
                    name="position"
                    placeholder="Enter your Position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            <button type="submit" className="continue-button">
              Continue
            </button>
          </form>
        )}

        {step === 2 && (
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Zip-code</label>
              <input
                type="text"
                name="zip_code"
                placeholder="Enter your zip code"
                value={formData.zip_code}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="Enter your country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? (
                <PulseLoader
                  height="10"
                  width="40"
                  radius="9"
                  color="#ffffff"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        )}

        {/* <div className="register-google">
          <p>or continue with Google</p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Google login:", credentialResponse);
            }}
            onError={() => console.log("Login failed")}
          />
        </div> */}

        <p className="already-registered">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
