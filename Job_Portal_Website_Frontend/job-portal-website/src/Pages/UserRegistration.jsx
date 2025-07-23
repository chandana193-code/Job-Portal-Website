import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import '../Styling/UserRegistration.css';

const UserRegistration = ({ title = "Create your Job Portal Profile" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEmployeeRegistration = location.pathname === "/employeeRegistration";
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    emailId: "",
    password: "",
    mobileNumber: "",
    workStatus: "",
    companyName: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isEmployeeRegistration
      ? "http://localhost:9090/userregistration/saveemployeeinfo"
      : "http://localhost:9090/userregistration/saveuserinfo";

    axios.post(url, formData)
      .then(() => {
        alert("Registered successfully!");
        navigate(isEmployeeRegistration ? "/employee-login" : "/loginpage");
      })
      .catch((error) => {
        alert("Error registering");
        console.error(error);
      });
  };

  return (
    <div className="main-container1">
      <Header />
      <div className="userRegistrationform">
        <div className="registration-form">
          <form onSubmit={handleSubmit}>
            <div className="title">
              <span>{title}</span>
            </div>

            <div className="user-inputfield">
              <label>User Name</label>
              <input type="text" name="userName" placeholder="What is your name?" required onChange={handleChange} />
            </div>

            <div className="user-inputfield">
              <label>Email ID</label>
              <input type="email" name="emailId" placeholder="Tell us your Email ID" required onChange={handleChange} />
            </div>

            <div className="user-inputfield">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="(Minimum 8 characters)"
                  required
                  onChange={handleChange}
                />
                <span className="icon-eye" onClick={() => setShowPassword(prev => !prev)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="user-inputfield">
              <label>Mobile number</label>
              <input type="tel" name="mobileNumber" placeholder="Enter your mobile number" required onChange={handleChange} />
            </div>

            <div className="user-inputfield">
              <label>{isEmployeeRegistration ? "Company Name" : "Work Status"}</label>
              <div className="working-status">
                {isEmployeeRegistration ? (
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Enter your Company Name"
                    onChange={handleChange}
                  />
                ) : (
                  <>
                    <div className="radio-options">
                      <label>
                        <input
                          type="radio"
                          name="workStatus"
                          value="Fresher"
                          onChange={handleChange}
                        />
                        Fresher
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="workStatus"
                          value="Experienced"
                          onChange={handleChange}
                        />
                        Experienced
                      </label>
                    </div>
                    {formData.workStatus === "Experienced" && (
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, companyName: e.target.value }))
                        }
                      />
                    )}
                  </>
                )}
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>

          <div className="back-to-login">
            <span className="text">
              Already Registered?
              <Link to={isEmployeeRegistration ? "/employee-login" : "/loginpage"} className="logintextStyling">
                Login
              </Link> here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
