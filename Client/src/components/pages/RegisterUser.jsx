import React, { useState, useEffect } from "react";
import { RegisterStyle } from "./Users.style";
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
      navigate("/create-company");
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
    <RegisterStyle>
    <div className="container">
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
    </div>
    </RegisterStyle>
  );
};

export default RegisterUser;
