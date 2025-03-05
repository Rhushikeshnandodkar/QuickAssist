import React, { useState } from "react";
import { RegisterStyle } from "./Users.style";
import { useDispatch } from "react-redux";
import { userSignup } from "../../features/userAuth/authSlice";
const RegisterUser = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c1?q=80&w=1080&auto=format&fit=crop"
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
            Already have an account? <a href="login.html">Login!</a>
          </p>
        </div>
      </div>
    </div>
    </RegisterStyle>
  );
};

export default RegisterUser;
