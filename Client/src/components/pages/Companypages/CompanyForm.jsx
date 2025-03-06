import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompanyFormStyle } from "./company.styled";
import Sidebar from "../../molecules/Sidebar";
import { getUserInfo } from "../../../features/userAuth/authSlice";
import { useNavigate } from "react-router-dom";
import { createCompany } from "../../../features/company/companySlice";
const CompanyForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state) =>(state.user))
  const [formData, setFormData] = useState({
    company_name: "",
    description: "",
    address: "",
  });
  useEffect(() =>{
    dispatch(getUserInfo())
    console.log(user.data.role)
    if(user.data.role != "company"){
      console.log('not company')
      navigate('/login')
    }
  }, [user])
  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const {company_name, description, address} = formData
    dispatch(createCompany({company_name, description, address}))
    navigate('/dashboard')
    console.log("Form Data:", formData);
  };

  return (
    <CompanyFormStyle>
        <Sidebar/>
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
              placeholder="Enter product name"
              value={formData.company_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productDescription">Company Description</label>
            <textarea
              id="description"
              placeholder="Enter product description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productDescription">Company Address</label>
            <textarea
              id="address"
              placeholder="Enter product description"
              value={formData.address}
              onChange={handleChange}
            />
          </div>



          <div className="btn-group">
          <button type="submit" className="auth-button">
              Create company
            </button>
            <button type="submit" className="btn">Create Product & Generate Chatbot</button>
          </div>
        </form>
      </div>
    </main>
    </CompanyFormStyle>
  );
};

export default CompanyForm;
