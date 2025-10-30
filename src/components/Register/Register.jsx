import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
import "./Register.scss";
import { ClipLoader, PulseLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { createCustomers } from "../../store/slice/customerSlice";
import { sendotp } from "../../store/slice/otpslice";
import { saveRegisterData } from "../../store/slice/customerSlice";

const Register = () => {

  const customerdataSelector = useSelector((state) => state.customer.formData);

  useEffect(() => {
    if (customerdataSelector && Object.keys(customerdataSelector).length > 0) {
      setFormData((prev) => ({ ...prev, ...customerdataSelector }));
    }
  }, [customerdataSelector]);



  const [searchParams] = useSearchParams();

  //selectors 
  const customerSelector = useSelector((state) => state.customer);


  //getstypes 
  const type = searchParams.get("type");
  const identifier = searchParams.get("identifier")

  //dispatch
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  //err message To display
  const [error, setError] = useState("");

  useEffect(() => {
    const stepFromQuery = searchParams.get("step");
    if (stepFromQuery === "2") {
      setStep(2);
    }
  }, [searchParams]);


  const [formData, setFormData] = useState({
    name: "",
    orderchoice: "",
    email: "",
    password: "",
    orgName: "",
    position: "",
    phone: "",
    state: "",
    city: "",
    country: "",
    address: "",
    zip_code: "",
    isB2B: false,

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //continue for otp page and validations
  const handleContinue = async (e) => {
    e.preventDefault();

    try {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!passwordRegex.test(formData.password)) {
        alert(
          "Password must be at least 8 characters long, include one uppercase, one lowercase, one number, and one special character."
        );
      }
      await dispatch(sendotp({ type: "register", identifier: formData.email })).unwrap();
      dispatch(saveRegisterData(formData));

      alert("otp sended successfully");
      navigate(`/verify-otp?type=register&identifier=${formData.email}`);

      return;

    } catch (err) {
      console.log(err, "err");

    }
    // setStep(2);
  };

  //navigate property
  const navigate = useNavigate();

  //onlick for create  customer in db 
  const createcustomerSumbit = async (e) => {
    e.preventDefault();

    //token set to local using get
    const resetToken = localStorage.getItem("resetToken");
    const accestoken = localStorage.getItem("accessToken");

    console.log({ accestoken: accestoken, resttoken: resetToken },);

    if (!resetToken) {
      alert("Please verify OTP before completing registration.");
      return;
    }

    try {
      const payload = {
        "userName": formData.name,
        "name": formData.name,
        "email": formData.email,
        "phone": formData.phone,
        "password": formData.password,
        "address": formData.address,
        "city": formData.city,
        "state": formData.state,
        "country": formData.country,
        "postalCode": formData.zip_code,
        "isB2B": true,
        "businessName": formData.orgName,
        "role": formData.position,
        // "isb2b": formData.isB2B,
        "otpToken": resetToken,

      }
      const response = await dispatch(createCustomers(payload)).unwrap();
      //save accestoke at local storage
      if (response && response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
      }
      alert("welcome to our book store")

      localStorage.removeItem("resetToken");
      navigate("/")
    } catch (err) {
      console.error("Registration error:", error);
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    //loader
    setLoading(true);

    const response = {
      success: false,
      message: "User Already exists",
    };
    setLoading(false);

    if (!response.success) {
      setError(response.message);
      return;
    }

    //if success
    navigate("/");
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="register-title">Create your account</h2>
        <p className="register-subtitle">Enjoy shopping!</p>
        {error && <p className="err-message">{error}</p>}

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
                      setFormData({ ...formData, orderchoice: e.target.value, isB2B: true })
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
                      setFormData({ ...formData, orderchoice: e.target.value, isB2B: false })
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
              <label>city</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city "
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter your state "
                value={formData.state}
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

            <button type="submit" className="submit-button" disabled={loading} onClick={createcustomerSumbit} >
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
