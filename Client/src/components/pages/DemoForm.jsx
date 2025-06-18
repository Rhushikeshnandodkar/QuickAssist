import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Users, Building, Mail, User } from 'lucide-react';
import Navbar from '../molecules/Navbar';
import { Link } from 'react-router-dom';
import { url } from '../common/api';

import axios from 'axios';
const DemoForm = () => {
      const [menuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => setMenuOpen(!menuOpen);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    work_email: '',
    company_name: '',
    phone_number: '',
    challenges: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Demo Request Data:', formData);

    try {
      const response = await axios.post(`${url}/api/company/demo-form`, formData);
      console.log('Demo Request Submitted:', response.data);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission failed:', err);
      setError('Something went wrong. Please try again.');
    }
    
    // Here you can send the data to your backend
    // Example: await fetch('/api/demo-request', { method: 'POST', body: JSON.stringify(formData) })
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        


          <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-primary-600">HelpXpert</a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#product" className="text-gray-600 hover:text-primary-600 transition-colors">Product</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-primary-600 transition-colors">FAQ</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-primary-600 transition-colors">Login</Link>
            <Link to="/register" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors shadow-md">Sign Up</Link>
          </div>

          {/* Mobile Toggle Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
<div
  className={`md:hidden fixed left-0 w-full bg-white z-40 flex flex-col px-6 py-8 gap-4 shadow-lg transition-transform duration-300 ease-in-out ${
    menuOpen ? 'top-14 translate-y-0' : '-top-full -translate-y-full'
  }`}
>
          <a href="#features" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-primary-600">Features</a>
          <a href="#product" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-primary-600">Product</a>
          <a href="#pricing" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-primary-600">Pricing</a>
          <a href="#faq" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-primary-600">FAQ</a>
          <hr />
          <Link to="/login" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-primary-600">Login</Link>
          <Link to="/register" onClick={toggleMenu} className="bg-primary-600 text-white px-4 py-2 rounded-md text-center hover:bg-primary-700">Sign Up</Link>
        </div>
      )}
    </header>

    
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in HelpXpert. Our team will contact you within 24 hours to schedule your personalized demo.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    
          <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-primary-600">HelpXpert</a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#product" className="text-gray-600 hover:text-primary-600 transition-colors">Product</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-primary-600 transition-colors">FAQ</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-primary-600 transition-colors">Login</Link>
            <Link to="/register" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors shadow-md">Sign Up</Link>
          </div>

          {/* Mobile Toggle Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
<div
  className={`md:hidden fixed left-0 w-full bg-white z-40 flex flex-col px-6 py-8 gap-4 shadow-lg transition-transform duration-300 ease-in-out ${
    menuOpen ? 'top-14 translate-y-0' : '-top-full -translate-y-full'
  }`}
>
          <a href="#features" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-primary-600">Features</a>
          <a href="#product" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-primary-600">Product</a>
          <a href="#pricing" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-primary-600">Pricing</a>
          <a href="#faq" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-primary-600">FAQ</a>
          <hr />
          <Link to="/login" onClick={toggleMenu} className="text-lg text-gray-700 hover:text-primary-600">Login</Link>
          <Link to="/register" onClick={toggleMenu} className="bg-primary-600 text-white px-4 py-2 rounded-md text-center hover:bg-primary-700">Sign Up</Link>
        </div>
      )}
    </header>
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Personal Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto">
              See how HelpXpert can transform your customer support with AI-powered manual assistance
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <User className="w-4 h-4 mr-2 text-gray-500" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <User className="w-4 h-4 mr-2 text-gray-500" />
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Mail className="w-4 h-4 mr-2 text-gray-500" />
                  Work Email *
                </label>
                <input
                  type="email"
                  name="work_email"
                  value={formData.work_email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  placeholder="you@company.com"
                />
              </div>

              {/* Company and Job Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Building className="w-4 h-4 mr-2 text-gray-500" />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="Your company"
                  />
                </div>
                  <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Company Size and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Tell us about your current challenges (Optional)
                </label>
                <textarea
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
                  placeholder="Describe your current support challenges and what you'd like to see in the demo..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center group shadow-lg"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We'll only use your information to contact you about HelpXpert.
              </p>
            </form>
          </div>

          {/* Features Preview */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Instant Setup</h3>
              <p className="text-xs text-gray-600">Get started in minutes</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Team Collaboration</h3>
              <p className="text-xs text-gray-600">Built for teams</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Building className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Enterprise Ready</h3>
              <p className="text-xs text-gray-600">Scales with you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;