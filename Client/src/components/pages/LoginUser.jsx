import React, { useState, useEffect } from "react";
import { LoginStyle } from "./Users.style";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/userAuth/authSlice";
import { useNavigate } from "react-router-dom";
const LoginUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, userToken, status} = useSelector((state) =>(
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
    if (status === 200) {
      navigate("/dashboard");
    }
  }, [status, navigate]);

  return (
    <LoginStyle>
    <div className="container">
      <div className="auth-container">
        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c1?q=80&w=1080&auto=format&fit=crop"
            alt="Robot illustration"
          />
        </div>
        <div className="form-section">
          <h1>Login</h1>
          <p className="subtitle">Turn Your manuals into conversation!</p>
          {status==401 ? <><div className="alert"><h6>Please Enter Valid Details</h6></div></> : <></>}
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
            <button type="submit" className="auth-button">
              Login Now
            </button>
          </form>

          <p className="switch-auth">
            Already have an account? <a href="register.html">Signup!</a>
          </p>
        </div>
      </div>
    </div>
    </LoginStyle>
  );
};

export default LoginUser;
