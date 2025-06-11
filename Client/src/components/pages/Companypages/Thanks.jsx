
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Home, Building2 } from "lucide-react";

const Thanks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Auto-redirect after 10 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 20000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-emerald-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                <Building2 className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold text-emerald-600 mb-6">
            Company Profile Created Successfully
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Your company profile has been created and is now being processed. 
            You'll receive a confirmation email shortly with next steps.
          </p>

          {/* Features List */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                <span>Profile verification (usually within 24 hours)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                <span>Access to your company dashboard</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                <span>Email confirmation with login details</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Go to Dashboard
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </button>
          </div>

          {/* Auto-redirect notice */}
          <p className="text-sm text-gray-500 mt-6">
            You'll be automatically redirected to the dashboard in 10 seconds
          </p>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-blue-800 font-medium mb-2">Need Help?</p>
          <p className="text-blue-700 text-sm">
            Contact our support team at{" "}
            <a href="mailto:support@company.com" className="underline hover:text-blue-900">
              support@company.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
