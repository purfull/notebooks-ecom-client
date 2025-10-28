import React, { useState } from "react";
import "./Newpassword.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Newpassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //validation
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (newPassword.length !== 8) {
      setError("Password must be exactly 8 characters long!");
      return;
    }

    if (!passwordRegex.test(newPassword)) {
      setError(
        "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    setError("cvb");
    console.log("Password reset successfully:", newPassword);
    navigate("/login");
  };

  return (
    <div className="new-password-container">
      <form className="new-password-form" onSubmit={handleSubmit}>
        <h3 className="new-password-header">Reset your Password</h3>

        {error && <p className="error-message">{error}</p>}

        <div className="new-password-form-group">
          <label htmlFor="new-password" className="new-password-form-label">
            New Password
          </label>
          <input
            className="new-password-form-input"
            type="password"
            id="new-password"
            placeholder="Enter your New Password"
            value={newPassword}
            maxLength={8}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="new-password-form-group">
          <label htmlFor="confirm-password" className="new-password-form-label">
            Confirm Password
          </label>
          <input
            className="new-password-form-input"
            type="password"
            id="confirm-password"
            placeholder="Confirm your New Password"
            value={confirmPassword}
            maxLength={8}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required
          />
        </div>

        <div className="new-password-form-bottom-button">
          <button className="next">Submit</button>
          <Link to="/login" className="back">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Newpassword;
