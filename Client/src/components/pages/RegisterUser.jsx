import React, { useState, useEffect } from "react";
import { LoginStyle, RegisterStyle } from "./Users.style";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../features/userAuth/authSlice";
import { useNavigate } from "react-router-dom";
import chatimage from "../../images/chat2.png"
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, userToken, status} = useSelector((state) =>(
    state.user))
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (status === 200) {
      navigate("/purchase-item");
    }
  }, [status, navigate]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password} = formData
    dispatch(userSignup({name, email, password}))
    console.log("Form Data:", formData);
    // Call API here
  };

  return (
    <LoginStyle>
    {/* <div className="container">
      <div className="auth-container">
        <div className="image-section">
          <img
            src={chatimage}
            alt="Robot illustration"
          />
        </div>
        <div className="form-section">
          <h1>Join Us Now</h1>
          <p className="subtitle">Turn Your manuals into conversation!</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="auth-button">
              Create Account
            </button>
          </form>

          <p className="switch-auth">
            Allready have account? <Link to={'/login'}>Login</Link>
          </p>
        </div>
      </div>
    </div> */}


        <div className="container-main">
    <div className="login-container">
          <div className="login-card">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
    
            <div className="login-logo">
              <h1>ChatbotManuals</h1>
              <p>Transform manuals into interactive experiences</p>
            </div>
    
            <div className="auth-container">
              <div className="form-section">
                <h2 className="login-heading">Welcome back</h2>
                <p className="login-subheading">Enter your credentials to access your account</p>
    
                {status === 401 && (
                  <div className="alert">
                    <h6>Please Enter Valid Details</h6>
                  </div>
                )}
    
                <form className="auth-form" onSubmit={handleSubmit}>
                <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
    
                  <button type="submit" className="btn">Sign up</button>
                </form>
    
                <div className="divider">or continue with</div>
                <div className="social-login">
                  <div className="social-btn">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
                  </div>
                </div>
                <br />
                <p className="switch-auth">
                  Allready have an account? <Link to="/register">Signup</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </LoginStyle>
  );
};

export default RegisterUser;
