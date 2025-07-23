import  { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import '../Styling/LoginPage.css';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginPage({ title = "Login" }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const isEmployeeLogin = location.pathname === '/employee-login';
  const navigate = useNavigate();

  const handleLogin = () => {
    let valid = true;

    if (!email.trim()) {
      setEmailError('Please enter your Email ID / Username');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Please enter your password');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      let url = `http://localhost:9090/login/userlogin?userName=${email}&password=${password}`;
      if (isEmployeeLogin) {
        url = `http://localhost:9090/login/employerLogin?employeeName=${email}&password=${password}`;
      }

      axios.post(url)
        .then((response) => {
          const loginUname = response.data.trim();
          if (loginUname !== "" && loginUname !== null) {
            alert("Login successful!");
            if (isEmployeeLogin) {
              localStorage.setItem("employeeLoggedIn", "true");
              localStorage.setItem("employeeName", loginUname); 
            } else {
              localStorage.setItem("loggedInUser", loginUname);
            }

            navigate('/');
          } else {
            alert("Login Failed!");
          }
        })
        .catch((error) => {
          alert("Login failed. Please check your credentials.");
          console.error(error);
        });
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="forms">
        <div className="form login">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="title"><span>{title}</span></div>

            <div className="input-field">
              <label>Email Id / Username</label><br />
              <input
                type="text"
                value={email}
                placeholder="Enter user name or email id"
                onChange={(e) => setEmail(e.target.value)}
                className={`custom-placeholder ${emailError ? 'input-error' : ''}`}
              />
              {emailError && <p className="error-text">{emailError}</p>}
            </div>

            <div className="input-field password-wrapper">
              <label>Password</label><br />
               <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={`custom-placeholder ${passwordError ? 'input-error' : ''}`}
                />
                <span
                  className="icon-eye"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
             </div>
            {passwordError && <p className="error-text">{passwordError}</p>}
            </div>
           <div className="checkbox-text">
              <Link to={isEmployeeLogin ? "/employee-forgotpassword" : "/forgotPassword"} className="textStyling">Forgot password?</Link>
            </div>

            <div className="input-field button">
              <input type="button" value="Login" onClick={handleLogin} />
            </div>
          </form>

          <div className="login-signup">
            <span className="text">
              Not a member?
              <Link to={isEmployeeLogin ? "/employeeRegistration" : "/userRegistration"} className="textStyling"> Register Now</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
