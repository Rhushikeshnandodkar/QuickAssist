import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const userData = response.data;
      dispatch(setUser(userData)); // Store user data in Redux
      localStorage.setItem("user", JSON.stringify(userData)); // Store in local storage for persistence

      navigate("/dashboard"); // Redirect after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="flex-1 bg-gray-200 p-10 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c1?q=80&w=1080&auto=format&fit=crop"
            alt="Robot illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 p-10 flex flex-col">
          <h1 className="text-3xl font-bold text-black mb-2">Login</h1>
          <p className="text-gray-600 mb-8">Turn Your manuals into conversation!</p>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-lg text-lg hover:bg-gray-800 transition duration-300"
            >
              Login Now
            </button>
          </form>

          <p className="text-gray-600 mt-6 text-center">
            Don't have an account? <a href="/register" className="text-black font-medium hover:underline">Signup!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
