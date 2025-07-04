import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompanyFormStyle } from "./company.styled";
import Sidebar from "../../molecules/Sidebar";
import { getUserInfo } from "../../../features/userAuth/authSlice";
import { useNavigate } from "react-router-dom";
import { companyInfo, createCompany } from "../../../features/company/companySlice";
import GlobalStyle from "../../molecules/gloable.style";
import Loader from "../../molecules/Loader";

const CompanyForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state) =>(state.user))
  const { isLoading, company} = useSelector((state) => state.company)
  const [formData, setFormData] = useState({
    company_name: "",
    description: "",
    address: "",
    company_email : "",
    company_website : "",
    company_contact : ""
  });

  useEffect(() =>{
    if(!user){
      return navigate("/login")
    }
    // dispatch(companyInfo())
    // if(company){
    //   return navigate("/Dashboard")
    // }
  }, [dispatch, company])
  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {company_name, description, address, company_email, company_website, company_contact} = formData
    // dispatch(createCompany({company_name, description, address}))
    try {
            const response = await dispatch(createCompany({company_name, description, address, company_email, company_website, company_contact}));
            console.log(response)
            if(response.meta.requestStatus === "pending"){
              return <h2>Loading PDF please wait.....</h2>
            }
            if (response.meta.requestStatus === 'fulfilled') {
                // ✅ Redirect on success
                navigate(`/thanks`);
            } else {
                console.error('Failed to create link:', response.error.message);
                alert('Failed to submit. Please try again.');
            }
    } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
  };
  // if(isLoading) return <><Loader/></>
  return (
    <CompanyFormStyle>
      <GlobalStyle/>
        {/* <Sidebar/> */}
    <main className="main-content">
      <div className="form-container">
        <div className="form-header">
          <h1>Create Company Profile</h1>
          <p>Fill in the product details and upload the user manual to create a new chatbot.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Company Name</label>
            <input
              type="text"
              id="company_name"
              required
              placeholder="Enter company name"
              value={formData.company_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productDescription">Company Description</label>
            <textarea
              id="description"
              placeholder="Enter company description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productDescription">Company Email</label>
            <input
              type="email"
              id="company_email"
              placeholder="Enter company Email"
              value={formData.company_email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productDescription">Company website</label>
            <input
            type="url"
              id="company_website"
              placeholder="Enter company website url"
              value={formData.company_website}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productDescription">Company Contact No.</label>
            <input
              id="company_contact"
              placeholder="Enter company contact number"
              value={formData.company_contact}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productDescription">Company Address</label>
            <textarea
              id="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>



          <div className="btn-group">
          <button type="submit" className="auth-button">
              Create company
            </button>
            {/* <button type="submit" className="btn">Create Product & Generate Chatbot</button> */}
          </div>
        </form>
      </div>
    </main>
    </CompanyFormStyle>
  );
};

export default CompanyForm;
