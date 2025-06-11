
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUserInfo } from "../features/userAuth/authSlice";
import { useNavigate } from "react-router-dom";
// import { company} from "../features/company/companySlice";
import { createCompany } from "../../../features/company/companySlice";
import { Building2, Mail, Globe, Phone, MapPin, FileText, Loader2 } from "lucide-react";
import Navbar from "../../molecules/Navbar";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false)
//   const { isLoading, company } = useSelector((state) => state.company);
  const [formData, setFormData] = useState({
    company_name: "",
    description: "",
    address: "",
    company_email: "",
    company_website: "",
    company_contact: ""
  });

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [dispatch, navigate, user]);

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { company_name, description, address, company_email, company_website, company_contact } = formData;
    
    try {
      const response = await dispatch(createCompany({ 
        company_name, 
        description, 
        address, 
        company_email, 
        company_website, 
        company_contact 
      }));
      setIsLoading(true)
      console.log(response);
      
      if (response.meta.requestStatus === 'fulfilled') {
        // ✅ Redirect to thanks page on success
        navigate('/thanks-page');
      } else {
        console.error('Failed to create company:', response.error.message);
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 animate-spin text-primary-600 mx-auto mb-4" />
//           <p className="text-gray-600 text-lg">Creating your company profile...</p>
//         </div>
//       </div>
//     );
//   }

  return (
    <>
    {/* <Navbar/> */}
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
              <Building2 className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Create Company Profile
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fill in your company details to create a comprehensive profile. 
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company_name" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Building2 className="w-4 h-4 mr-2 text-primary-600" />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    required
                    placeholder="Enter your company name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Company Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <FileText className="w-4 h-4 mr-2 text-primary-600" />
                    Company Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    placeholder="Tell us about your company, what you do, and your mission"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Two Column Layout for Contact Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company Email */}
                  <div className="space-y-2">
                    <label htmlFor="company_email" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 mr-2 text-primary-600" />
                      Company Email
                    </label>
                    <input
                      type="email"
                      id="company_email"
                      placeholder="company@example.com"
                      value={formData.company_email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  {/* Company Website */}
                  <div className="space-y-2">
                    <label htmlFor="company_website" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Globe className="w-4 h-4 mr-2 text-primary-600" />
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="company_website"
                      placeholder="https://www.company.com"
                      value={formData.company_website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Company Contact */}
                <div className="space-y-2">
                  <label htmlFor="company_contact" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 mr-2 text-primary-600" />
                    Company Contact Number
                  </label>
                  <input
                    type="tel"
                    id="company_contact"
                    placeholder="+1 (555) 123-4567"
                    value={formData.company_contact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Company Address */}
                <div className="space-y-2">
                  <label htmlFor="address" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                    Company Address
                  </label>
                  <textarea
                    id="address"
                    rows="3"
                    placeholder="Enter your complete business address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    // disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Creating Company...
                      </>
                    ) : (
                      'Create Company Profile'
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
              <p className="text-sm text-gray-600 text-center">
                By creating a company profile, you agree to our{" "}
                <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileForm;