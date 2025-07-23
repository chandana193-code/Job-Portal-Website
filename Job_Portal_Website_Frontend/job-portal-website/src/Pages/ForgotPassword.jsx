import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import '../Styling/ForgotPassword.css';
import Header from "../Components/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPassword = () => {
  const [emailId, setEmailId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const location = useLocation();
  const isEmployeeReset = location.pathname === "/employee-forgotpassword";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        isEmployeeReset
          ? "http://localhost:9090/login/employerresetpassword"
          : "http://localhost:9090/login/userresetpassword",
        null,
        {
          params: {
            emailId,
            newPassword
          }
        }
      );

      if (response.data === "Success") {
        alert("Password successfully updated.");
      } else {
        alert(response.data);
      }
    } catch (error) {
      alert("Error resetting password. Please try again.");
    }
  };

  return (
    <div className="maincontainer">
      <div className="forgot-password-form">
        <Header />
        <div className="forgot-password-container">
          <h2>{isEmployeeReset ? "Employer Password Reset" : "Reset your password"}</h2>
          <p>Please choose a new password to finish signing in.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Your Email ID"
              required
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
              <span
                className="icon-eye"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter New Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="icon-eye"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit">Reset Password</button>
           </form>
          <div className="back-link"><a href="/loginpage">Back to Login</a></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
