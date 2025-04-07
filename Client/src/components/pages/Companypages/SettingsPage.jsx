import React from 'react'
import Navbar from '../../molecules/Navbar'
import Sidebar from '../../molecules/Sidebar'
import GlobalStyle from '../../molecules/gloable.style'
import { SettingStyle } from './company.styled'

function SettingsPage() {
  return (
    <>
    <GlobalStyle/>
    {/* <Navbar/> */}
    <Sidebar/>
    <SettingStyle>
        <div className="main-content">
        <Navbar page="Settings" />
        <div className="content">
            <div className="settings-container">
            <div className="settings-content">
                <div className="tabs-container">
                <div className="tabs">
                    <div className="tab active">Company Profile</div>
                </div>
                </div>
                <div className="settings-header">
                <div className="settings-title">Company Profile</div>
                <div className="settings-description">Manage your company information and details</div>
                </div>
                <div className="settings-body">
                <div className="form-group">
                    <label htmlFor="company-name" className="form-label">Company Name</label>
                    <input type="text" id="company-name" className="form-control" defaultValue="TechGuide Solutions" />
                </div>
               
                <div className="form-group">
                    <label htmlFor="company-description" className="form-label">Company Description</label>
                    <textarea id="company-description" className="form-control" defaultValue={"TechGuide Solutions specializes in creating intelligent documentation systems for consumer electronics and smart devices. Our ChatbotManuals platform transforms traditional manuals into interactive AI assistants."} />
                </div>
                <div className="form-group">
                    <label htmlFor="company-description" className="form-label">Company Address</label>
                    <textarea id="company-description" className="form-control" defaultValue={"TechGuide Solutions specializes in creating intelligent documentation systems for consumer electronics and smart devices. Our ChatbotManuals platform transforms traditional manuals into interactive AI assistants."} />
                </div>
                <div className="form-group">
                    <label htmlFor="company-website" className="form-label">Website</label>
                    <input type="url" id="company-website" className="form-control" defaultValue="https://techguidesolutions.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="company-email" className="form-label">Contact Email</label>
                    <input type="email" id="company-email" className="form-control" defaultValue="contact@techguidesolutions.com" />
                </div>
               
               
               
               
                <div className="settings-header">
                    <div className="settings-title">Chatbot Configuration</div>
                    <div className="settings-description">Customize your chatbot behavior and settings</div>
                </div>
                <div className="toggle-container">
                    <div className="toggle-info">
                    <div className="toggle-label">Enable AI Chatbot</div>
                    <div className="toggle-description">Allow AI to automatically answer customer queries</div>
                    </div>
                    <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider" />
                    </label>
                </div>
                <div className="toggle-container">
                    <div className="toggle-info">
                    <div className="toggle-label">Log Unanswered Questions</div>
                    <div className="toggle-description">Save questions that the AI couldn't answer</div>
                    </div>
                    <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider" />
                    </label>
                </div>
                <div className="toggle-container">
                    <div className="toggle-info">
                    <div className="toggle-label">Human Fallback</div>
                    <div className="toggle-description">Redirect to human support when AI can't answer</div>
                    </div>
                    <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider" />
                    </label>
                </div>
                <div className="toggle-container">
                    <div className="toggle-info">
                    <div className="toggle-label">Custom Chatbot Greeting</div>
                    <div className="toggle-description">Use personalized welcome message</div>
                    </div>
                    <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider" />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="greeting-message" className="form-label">Greeting Message</label>
                    <textarea id="greeting-message" className="form-control" defaultValue={"👋 Hello! I'm your product assistant. How can I help you today with your [Product Name]?"} />
                </div>
                <div className="actions-container">
                    <button className="btn btn-outline">Cancel</button>
                    <button className="btn btn-primary">
                    <span className="material-symbols-rounded">save</span>
                    Save Changes
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    </SettingStyle>
    </>
  )
}

export default SettingsPage