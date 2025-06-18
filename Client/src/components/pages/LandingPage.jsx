import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function LandingPage() {
 

  const [sliderValue, setSliderValue] = useState(30);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  // Map slider value to a specific plan
  const getPlan = () => {
    if (sliderValue <= 20) return { queries: 500, price: 199 };
    if (sliderValue <= 40) return { queries: 1000, price: 300 };
    if (sliderValue <= 60) return { queries: 1500, price: 450 };
    if (sliderValue <= 80) return { queries: 2000, price: 499 };
    return { queries: 5000, price: 999 };
  };

  const plan = getPlan();
  return (
<div class="bg-gray-50 font-sans text-gray-800">
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
  <section class="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Turn Your Manuals into  <span class="text-primary-600">AI Support Agents</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
Stop overwhelming your customers with PDFs or Paper manuals. Let them talk to your product — and get instant, helpful answers anytime.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#" class="bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-700 transition-colors shadow-md inline-flex items-center justify-center">
              Start Free Trial
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#product" class="border border-gray-300 text-gray-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              See Demo
            </a>
          </div>
        </div>
        <div class="md:w-1/2 relative">
          <div class="bg-white p-2 rounded-2xl shadow-xl">
            <div class="bg-gray-50 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="AI Chatbot Interface" class="w-full h-auto object-cover rounded-lg shadow-inner" />
            </div>
          </div>
          <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-200 rounded-full opacity-60 z-0"></div>
          <div class="absolute -top-6 -right-6 w-36 h-36 bg-secondary-200 rounded-full opacity-60 z-0"></div>
        </div>
      </div>
    </div>
  </section>
  <section id="features" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
       Everything You Need to Support Customers at Scale
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
         HelpXpert gives your team AI tools to deliver faster, smarter, and more scalable support — powered by your own manuals.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="bg-primary-100 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
              <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">PDF Upload & Processing</h3>
          <p class="text-gray-600">
Upload your product manuals once — our AI instantly reads and understands them to build a knowledge base, saving hours of manual setup.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="bg-primary-100 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">AI-Powered Chatbots</h3>
          <p class="text-gray-600">
Turn your manuals into 24/7 AI assistants that instantly resolve customer queries — trained specifically on your product.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="bg-primary-100 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Analytics & Insights</h3>
          <p class="text-gray-600">
            Track performance metrics, identify common questions, and continuously improve your customer support experience.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="bg-primary-100 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Multi-Product Support</h3>
          <p class="text-gray-600">
        Manage support for all your products in one place — keep answers clean and accurate with separate knowledge bases.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="bg-primary-100 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Automated Bot Generation & Sharing</h3>
          <p class="text-gray-600">
         As soon as you add customer, we automatically generate a chatbot and send email with ready-to-use link to your customer 
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="bg-primary-100 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Easy to use</h3>
          <p class="text-gray-600">
Our simple interface ensures even non-technical teams can deploy and monitor chatbots without writing a single line of code.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="product" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          See ManualMind in Action
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Upload your manuals, create your chatbot, and start saving support time in minutes.
        </p>
      </div>

      <div class="max-w-5xl mx-auto relative">
        <div class="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div class="flex">
            <div class="hidden md:block w-60 bg-gray-100 p-4 border-r border-gray-200">
              <div class="flex items-center space-x-2 mb-6">
                {/* <div class="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center">
                  <span class="text-white font-bold">M</span>
                </div> */}
                <span class="font-semibold text-gray-800">HelpXpert</span>
              </div>
              <div class="space-y-2">
                <div class="bg-primary-50 text-primary-700 rounded-md px-3 py-2 font-medium">Products</div>
                <div class="text-gray-600 hover:bg-gray-200 rounded-md px-3 py-2">Analytics</div>
                <div class="text-gray-600 hover:bg-gray-200 rounded-md px-3 py-2">Team</div>
                <div class="text-gray-600 hover:bg-gray-200 rounded-md px-3 py-2">Settings</div>
              </div>
            </div>

            <div class="flex-1 p-6">
              <div class="mb-6">
                <h3 class="text-xl font-bold mb-4">Product Manuals</h3>
                <div class="flex flex-wrap gap-4">
                  <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 w-48">
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-red-500">PDF</span>
                      <span class="text-xs text-gray-500">2.4 MB</span>
                    </div>
                    <p class="font-medium">User Manual v2.1</p>
                    <p class="text-xs text-gray-500 mt-1">Uploaded 2 days ago</p>
                  </div>
                  
                  <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 w-48">
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-red-500">PDF</span>
                      <span class="text-xs text-gray-500">1.8 MB</span>
                    </div>
                    <p class="font-medium">Quick Start Guide</p>
                    <p class="text-xs text-gray-500 mt-1">Uploaded 5 days ago</p>
                  </div>
                  
                  <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 w-48">
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-red-500">PDF</span>
                      <span class="text-xs text-gray-500">3.2 MB</span>
                    </div>
                    <p class="font-medium">Technical Specs</p>
                    <p class="text-xs text-gray-500 mt-1">Uploaded 1 week ago</p>
                  </div>
                  
                  <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 w-48 flex flex-col items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span class="mt-2">Upload Manual</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div class="flex items-center justify-between mb-6">
                  <h4 class="font-bold">Live Chatbot Preview</h4>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                </div>
                
                <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-4 max-w-lg mx-auto">
                  <div class="flex items-center border-b border-gray-100 pb-4 mb-4">
                    <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span class="text-primary-600 font-semibold">AI</span>
                    </div>
                    <div>
                      <p class="font-medium text-sm">Product Assistant</p>
                      <p class="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                  
                  <div class="space-y-4 mb-4">
                    <div class="flex items-start">
                      <div class="bg-primary-100 rounded-lg rounded-tl-none p-3 max-w-xs">
                        <p class="text-sm">Hello! I'm your product assistant. How can I help you today?</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start justify-end">
                      <div class="bg-gray-100 rounded-lg rounded-tr-none p-3 max-w-xs">
                        <p class="text-sm">How do I reset my device to factory settings?</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start">
                      <div class="bg-primary-100 rounded-lg rounded-tl-none p-3 max-w-xs">
                        <p class="text-sm">To reset your device to factory settings, follow these steps:</p>
                        <ol class="text-sm list-decimal list-inside pl-1 mt-2 space-y-1">
                          <li>Go to Settings System</li>
                          <li>Select "Reset Options"</li>
                          <li>Tap "Erase All Content"</li>
                          <li>Confirm with your PIN</li>
                          <li>Wait for the device to restart</li>
                        </ol>
                        <p class="text-sm mt-2">Need anything else?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="relative">
                    <input type="text" placeholder="Type your question..." class="w-full border border-gray-200 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-primary-300" />
                    <button class="absolute right-1 top-1 bg-primary-500 text-white p-1.5 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-200 rounded-full opacity-60 z-0"></div>
        <div class="absolute -top-6 -left-6 w-36 h-36 bg-primary-200 rounded-full opacity-60 z-0"></div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Businesses of all sizes are saving time and improving customer satisfaction with ManualMind.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-50 p-8 rounded-xl">
          <div class="flex items-center mb-6">
            <div class="text-primary-600">
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <blockquote class="text-gray-700 mb-6">
            "ManualMind has reduced our support tickets by 45%. Our customers get instant answers 24/7, and our team can focus on more complex issues. The accuracy of the AI responses is impressive."
          </blockquote>
          <div class="flex items-center">
            <div class="mr-4">
              <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
            <div>
              <p class="font-semibold text-gray-900">Priya Sharma</p>
              <p class="text-gray-600 text-sm">Customer Support Lead, TechGadgets</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 p-8 rounded-xl">
          <div class="flex items-center mb-6">
            <div class="text-primary-600">
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <blockquote class="text-gray-700 mb-6">
            "The setup was incredibly easy. We uploaded our 200-page manual and within minutes had a working chatbot that could answer detailed technical questions. Our customers love it."
          </blockquote>
          <div class="flex items-center">
            <div class="mr-4">
              <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
            <div>
              <p class="font-semibold text-gray-900">Raj Patel</p>
              <p class="text-gray-600 text-sm">Product Manager, HomeAutomation</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 p-8 rounded-xl">
          <div class="flex items-center mb-6">
            <div class="text-primary-600">
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <blockquote class="text-gray-700 mb-6">
            "As a small business, we couldn't afford a 24/7 support team. ManualMind has changed the game for us. The ROI was clear within the first month as customer satisfaction scores improved dramatically."
          </blockquote>
          <div class="flex items-center">
            <div class="mr-4">
              <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
            <div>
              <p class="font-semibold text-gray-900">Aisha Khan</p>
              <p class="text-gray-600 text-sm">CEO, SmartHome Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your business needs, with no hidden fees or long-term commitments.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
          <div class="p-6 border-b border-gray-100">
            <h3 class="text-lg font-bold text-gray-900 mb-2">Basic</h3>
            <div class="flex items-baseline mb-4">
              <span class="text-3xl font-bold">₹199</span>
              <span class="text-gray-500 ml-1">/month</span>
            </div>
            <p class="text-gray-600 text-sm">Perfect for small businesses getting started with product documentation.</p>
          </div>
          <ul class="p-6 space-y-3 flex-grow">
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">10 product manuals</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">500 monthly queries</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Basic analytics</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Email support</span>
            </li>
          </ul>
          <div class="p-6 border-t border-gray-100">
            <a href="#" class="block text-center bg-white border border-primary-600 text-primary-600 px-6 py-2 rounded-md hover:bg-primary-50 transition-colors">
              Start Free Trial
            </a>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary-500 flex flex-col relative transform scale-105 z-10">
          <div class="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
            Popular
          </div>
          <div class="p-6 border-b border-gray-100 bg-primary-50">
            <h3 class="text-lg font-bold text-gray-900 mb-2">Growth</h3>
            <div class="flex items-baseline mb-4">
              <span class="text-3xl font-bold">₹499</span>
              <span class="text-gray-500 ml-1">/month</span>
            </div>
            <p class="text-gray-600 text-sm">For growing businesses with more product documentation needs.</p>
          </div>
          <ul class="p-6 space-y-3 flex-grow">
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">20 product manuals</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">2,000 monthly queries</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Advanced analytics</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Priority email support</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Custom chatbot branding</span>
            </li>
          </ul>
          <div class="p-6 border-t border-gray-100">
            <a href="#" class="block text-center bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors shadow">
              Start Free Trial
            </a>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
          <div class="p-6 border-b border-gray-100">
            <h3 class="text-lg font-bold text-gray-900 mb-2">Pro</h3>
            <div class="flex items-baseline mb-4">
              <span class="text-3xl font-bold">₹999</span>
              <span class="text-gray-500 ml-1">/month</span>
            </div>
            <p class="text-gray-600 text-sm">For businesses with extensive product documentation requirements.</p>
          </div>
          <ul class="p-6 space-y-3 flex-grow">
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">50 product manuals</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">5,000 monthly queries</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Full analytics suite</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Phone & email support</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Custom integrations</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Team management</span>
            </li>
          </ul>
          <div class="p-6 border-t border-gray-100">
            <a href="#" class="block text-center bg-white border border-primary-600 text-primary-600 px-6 py-2 rounded-md hover:bg-primary-50 transition-colors">
              Start Free Trial
            </a>
          </div>
        </div>
        
      </div>
      
       <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto mt-16">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Calculate Your Price</h3>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Queries Needed</label>
        <div className="relative">
          <input
            type="range"
            min="1"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div
            className="absolute pointer-events-none -top-2 w-4 h-4 bg-primary-600 rounded-full"
            style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
          ></div>
        </div>

        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>500</span>
          <span>1000</span>
          <span>1500</span>
          <span>2000</span>
          <span>5000+</span>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="space-y-3 border-t border-gray-100 pt-6">
        {[500, 1000, 1500, 2000, 5000].map((q, i) => {
          const prices = [199, 300, 450, 499, 999];
          const isActive = plan.queries === q;
          return (
            <div
              key={q}
              className={`flex justify-between items-center ${isActive ? 'bg-primary-50 p-3 rounded-lg' : ''}`}
            >
              <div className="text-gray-700">
                <span className="font-medium">{q} queries</span>
                <span className="text-gray-500 text-sm"> / month</span>
              </div>
              <div className="text-xl font-semibold">₹{prices[i]}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <a
          href="#"
          className="block text-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors shadow"
        >
          Start Your Free Trial
        </a>
        <p className="text-center text-sm text-gray-500 mt-3">14-day free trial. No credit card required.</p>
      </div>
    </div>
      
    </div>
  </section>

  <section id="faq" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-xl text-gray-600">
          Everything you need to know about ManualMind and our AI-powered chatbots.
        </p>
      </div>
      
      <div class="space-y-6">
        <div class="border border-gray-200 rounded-lg">
          <div class="px-6 py-4 cursor-pointer bg-gray-50 rounded-t-lg font-medium flex justify-between items-center">
            <span>What file formats do you support for manual uploads?</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="px-6 py-4 bg-white">
            <p class="text-gray-700">
              We currently support PDF format for manual uploads. We're working on adding support for DOCX, HTML, and Markdown formats in the future. If you have your documentation in another format, you can convert it to PDF before uploading.
            </p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <div class="px-6 py-4 cursor-pointer bg-gray-50 rounded-t-lg font-medium flex justify-between items-center">
            <span>How accurate is the AI chatbot in answering questions?</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="px-6 py-4 bg-white">
            <p class="text-gray-700">
              Our AI chatbots achieve over 90% accuracy for questions that have answers contained in your documentation. The system uses advanced language models and semantic search to understand user questions and match them with the most relevant information from your manuals.
            </p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <div class="px-6 py-4 cursor-pointer bg-gray-50 rounded-t-lg font-medium flex justify-between items-center">
            <span>How long does it take to set up a chatbot?</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="px-6 py-4 bg-white">
            <p class="text-gray-700">
              Setting up a chatbot takes just minutes. Simply upload your PDF manuals, and our system will automatically process and index the content. Most documents are processed within 5-10 minutes, after which your chatbot is ready to answer questions.
            </p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <div class="px-6 py-4 cursor-pointer bg-gray-50 rounded-t-lg font-medium flex justify-between items-center">
            <span>How do I integrate the chatbot with my website?</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="px-6 py-4 bg-white">
            <p class="text-gray-700">
              We provide a simple JavaScript snippet that you can add to your website to embed the chatbot. Alternatively, you can use our API to create custom integrations, or share a direct link to a hosted chatbot page. Our documentation provides step-by-step guidance for all integration options.
            </p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <div class="px-6 py-4 cursor-pointer bg-gray-50 rounded-t-lg font-medium flex justify-between items-center">
            <span>What happens if I exceed my monthly query limit?</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="px-6 py-4 bg-white">
            <p class="text-gray-700">
              If you reach your monthly query limit, you have two options: upgrade to a higher tier plan or purchase additional queries as needed. We'll notify you when you're approaching your limit so you can make an informed decision. We never abruptly cut off service without warning.
            </p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <div class="px-6 py-4 cursor-pointer bg-gray-50 rounded-t-lg font-medium flex justify-between items-center">
            <span>Is my data secure with ManualMind?</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="px-6 py-4 bg-white">
            <p class="text-gray-700">
              Yes, data security is our top priority. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Your documents are processed privately and are never used to train other models or shared with third parties.
            </p>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-4">Have more questions? We're here to help.</p>
        <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">
          Contact our support team
        </a>
      </div>
    </div>
  </section>

  <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Ready to Transform Your Product Support?
      </h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Join hundreds of businesses that are saving time and improving customer satisfaction with ManualMind.
      </p>
      <div class="inline-flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" class="bg-white text-primary-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors shadow-md inline-flex items-center justify-center">
          Start Your Free Trial
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" class="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center">
          Schedule a Demo
        </a>
      </div>
    </div>
  </section>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div class="lg:col-span-2">
          <a href="#" class="text-2xl font-bold">ManualMind</a>
          <p class="mt-4 text-gray-400">
            Transform your product manuals into intelligent AI chatbots that answer customer questions instantly.
          </p>
          <div class="mt-6 flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        
 <div>
    <h3 class="text-sm font-semibold uppercase tracking-wider">Product</h3>
    <ul class="mt-4 space-y-2">
      <li><a href="#" class="text-gray-400 hover:text-white">Features</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Pricing</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Case Studies</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Reviews</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Updates</a></li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-sm font-semibold uppercase tracking-wider">Company</h3>
    <ul class="mt-4 space-y-2">
      <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Careers</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Blog</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Press</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Partners</a></li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-sm font-semibold uppercase tracking-wider">Support</h3>
    <ul class="mt-4 space-y-2">
      <li><a href="#" class="text-gray-400 hover:text-white">Help Center</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Contact Us</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Documentation</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">API Status</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Community</a></li>
    </ul>
  </div>
</div>

<div class="mt-12 pt-8 border-t border-gray-800">
  <p class="text-gray-400 text-sm text-center">
    &copy; 2025 ManualMind. All rights reserved.
  </p>
</div>
</div>
</footer>
</div>

  )
}

export default LandingPage