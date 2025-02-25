import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";  // Import Redux action
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Dispatch user details to Redux store
      dispatch(setUser({
        _id: data._id,
        email: data.email,
        token: data.token
      }));

      setSuccessMessage("Registration successful! You can now log in.");
      setFormData({ name: "", email: "", password: "" });
      navigate("/");
      
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container max-w-6xl px-6">
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
          {/* Left Image Section */}
          <div className="flex-1 bg-gray-100 p-10 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c1?q=80&w=1080&auto=format&fit=crop" 
              alt="Robot illustration" 
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Form Section */}
          <div className="flex-1 p-10 flex flex-col">
            <h1 className="text-3xl font-bold mb-2">Join Us Now</h1>
            <p className="text-gray-600 mb-4">Turn your manuals into conversation!</p>

            {error && <p className="text-red-500 mb-2">{error}</p>}
            {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                required 
                className="p-3 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                className="p-3 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                required 
                className="p-3 border border-gray-300 rounded-md"
                value={formData.password}
                onChange={handleChange}
              />
              <button 
                type="submit" 
                className="bg-black text-white py-3 rounded-md mt-2 hover:bg-gray-800">
                Create Account
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6">
              Already have an account? <a href="/login" className="text-black font-medium hover:underline">Login!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
