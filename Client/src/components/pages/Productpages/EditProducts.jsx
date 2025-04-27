import React from 'react'
import { useParams } from 'react-router-dom'
import GlobalStyle from '../../molecules/gloable.style'
import Sidebar from '../../molecules/Sidebar'
import Navbar from '../../molecules/Navbar'
import { EditProductStyle } from './Products.style'
import { Link } from 'react-router-dom'
function EditProducts() {
    const {productId} = useParams()
    console.log(productId)
  return (
    <EditProductStyle>
        <GlobalStyle/>
        <Sidebar/>
        <Navbar page={`Edit Product`} />

        <div className="main-content">
        <div className="header">
            <div className="page-title">Edit Product</div>
            <div className="header-actions">
            <button className="action-button">
                <span className="material-symbols-rounded">help</span>
            </button>
            </div>
        </div>
        <div className="content">
            <div className="form-card">
            <div className="form-header">
                <div className="form-title">Edit Product Details</div>
                <div className="form-description">Update product information and manage video tutorials</div>
            </div>
            <form>
                <div className="form-section">
                <div className="section-title">Basic Information</div>
                <div className="form-row">
                    <div className="form-col">
                    <div className="form-group">
                        <label htmlFor="product-name">Product Name</label>
                        <input type="text" id="product-name" placeholder="Enter product name" defaultValue="Smart Home Hub X1" />
                    </div>
                    </div>
                    <div className="form-col">
                    <div className="form-group">
                        <label htmlFor="product-category">Category</label>
                        <select id="product-category">
                        <option value="electronics" selected>Electronics</option>
                        <option value="software">Software</option>
                        <option value="appliances">Appliances</option>
                        <option value="tools">Tools</option>
                        <option value="other">Other</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Product Description</label>
                    <textarea id="description" rows={4} placeholder="Enter product description" defaultValue={"The Smart Home Hub X1 is a central control system for managing all your smart home devices. Compatible with multiple protocols including WiFi, Zigbee, and Z-Wave."} />
                </div>
                </div>
                <div className="form-section">
                <div className="section-title">Video Tutorials</div>
                <div className="form-description" style={{marginBottom: 20}}>Add video tutorials and guides for your product</div>
                <div className="video-links">
                    
                    
                    <Link to={`/upload-video-link/${productId}`} type="button" className="btn btn-add-video">
                    <span className="material-symbols-rounded" style={{marginRight: 8}}>add</span>
                    Add Video
                    </Link>
                </div>
                </div>
                <div className="form-actions">
                <button type="button" className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn">
                    <span className="btn-icon material-symbols-rounded">save</span>
                    Save Changes
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>

    </EditProductStyle>
  )
}

export default EditProducts