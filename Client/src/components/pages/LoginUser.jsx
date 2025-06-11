import React, { useState, useEffect } from "react";
import { LoginStyle } from "./Users.style";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/userAuth/authSlice";
import { useNavigate } from "react-router-dom";
import chatimage from "../../images/chat3.png"
import { Link } from "react-router-dom";
import GlobalStyle from "../molecules/gloable.style";

const LoginUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, isAuthenticated,  userToken, status} = useSelector((state) =>(
    state.user))
    
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = formData
    dispatch(userLogin({email, password}))
    console.log("Form Data:", formData);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);



  return (
    <LoginStyle>
      <GlobalStyle/>
    <div className="container-main">
<div className="login-container">
      <div className="login-card">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>

        <div className="login-logo">
          <h1>HelpXpert</h1>
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

              <button type="submit" className="btn">Login Now</button>
            </form>

            {/* <div className="divider">or continue with</div>
            <div className="social-login">
              <div className="social-btn">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
              </div>
            </div> */}
            <br />
            <p className="switch-auth">
              Don't have an account? <Link to="/register">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </LoginStyle>
  );
};

export default LoginUser;
