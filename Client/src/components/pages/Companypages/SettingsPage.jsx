import React, { useEffect, useState } from 'react'
import Navbar from '../../molecules/Navbar'
import Sidebar from '../../molecules/Sidebar'
import GlobalStyle from '../../molecules/gloable.style'
import { SettingStyle } from './company.styled'
import { useDispatch, useSelector } from 'react-redux'
import { companyInfo, updateCompanyProfile } from '../../../features/company/companySlice'
import { Link } from 'react-router-dom'

function SettingsPage() {
    const {isLoading, company} = useSelector((state) => state.company)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        company_name : "",
        description : "",
        address : "",
        company_website : "",
        company_email : "",
        company_contact : ""
    })
    useEffect(() => {
        if(!company){
            dispatch(companyInfo())
        }
        if(company?.data){
            setFormData({
                company_name : company.data.company_name || "",
                description : company.data.description || "",
                address : company.data.address || "",
                company_website : company.data.company_website || "",
                company_email : company.data.company_email || "",
                company_contact : company.data.company_contact || "",

            })
        }
    }, [company, isLoading, dispatch]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSave = async () => {
        dispatch(updateCompanyProfile(formData))
    }
  return (
    <>
    <GlobalStyle/>
    {/* <Navbar/> */}
    <Sidebar/>
    <SettingStyle>
    <div className="main-content">
                <Navbar page="Settings" />
                <div className="content">
                {isLoading ? (
                            <div className="loading">Loading...</div>
                        ) : (
                            <div className="settings-container">
                                <div className="settings-content">
                                    <div className="tabs-container">
                                        <div className="tabs">
                                            <Link to={'/subscription-info'} className="tab">Subscription</Link>
                                            <Link to={'/settings'} className="tab active">Company Profile</Link>
                                        </div>
                                    </div>
                                    <div className="settings-header">
                                        <div className="settings-title">Company Profile</div>
                                        <div className="settings-description">Manage your company information and details</div>
                                    </div>
                                    <div className="settings-body">
                                        <div className="form-group">
                                            <label htmlFor="company-name" className="form-label">Company Name</label>
                                            <input type="text" id="company-name" name="company_name" className="form-control"
                                                value={formData.company_name} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company-description" className="form-label">Company Description</label>
                                            <textarea id="company-description" name="description" className="form-control"
                                                value={formData.description} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company-address" className="form-label">Company Address</label>
                                            <textarea id="company-address" name="address" className="form-control"
                                                value={formData.address} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company-website" className="form-label">Website</label>
                                            <input type="url" id="company-website" name="company_website" className="form-control"
                                                value={formData.company_website} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company-email" className="form-label">Contact Email</label>
                                            <input type="email" id="company-email" name="company_email" className="form-control"
                                                value={formData.company_email} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company-contact" className="form-label">Phone number</label>
                                            <input type="text" id="company-contact" name="company_contact" className="form-control"
                                                value={formData.company_contact} onChange={handleChange} />
                                        </div>
                                        <div className="actions-container">
                                            <button className="btn btn-outline">Cancel</button>
                                            <button className="btn btn-primary" onClick={handleSave}>
                                                <span className="material-symbols-rounded">save</span>
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>

    </SettingStyle>
    </>
  )
}

export default SettingsPage