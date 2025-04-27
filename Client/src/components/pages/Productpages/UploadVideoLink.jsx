import React from 'react'
import { useParams } from 'react-router-dom'
import GlobalStyle from '../../molecules/gloable.style'
import Sidebar from '../../molecules/Sidebar'
import Navbar from '../../molecules/Navbar'
import { UploadVideoLinkStyle } from './Products.style'
import { Link } from 'react-router-dom'
function UploadVideoLink() {
    const {productId} = useParams()
    console.log(productId)
  return (
    <UploadVideoLinkStyle>
        <GlobalStyle/>
        <Sidebar/>
        <Navbar page={`Add Video`} />

        <div className="main-content">
        <div className="header">
            <button className="mobile-menu-toggle action-button">
            <span className="material-symbols-rounded">menu</span>
            </button>
            <div className="page-title">Upload Video Tutorials</div>
            <div className="header-actions">
            <button className="action-button">
                <span className="material-symbols-rounded">help</span>
            </button>
            </div>
        </div>
        <div className="content">
            <div className="form-card">
            <div className="form-header">
                <div className="form-title">Product Video Tutorials</div>
                <div className="form-description">Add video tutorials and guides for your product</div>
            </div>
            <form>
                <div className="form-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" defaultValue="Smart Home Hub X1" readOnly />
                </div>
                <div className="form-group">
                <label>Video Tutorials</label>
                <div className="video-links">
                    <div className="video-item">
                    <input type="url" placeholder="Enter video URL (YouTube, Vimeo, etc.)" defaultValue="https://youtube.com/watch?v=abc123" />
                    <div className="video-actions">
                        <button type="button" className="action-button">
                        <span className="material-symbols-rounded">visibility</span>
                        </button>
                        <button type="button" className="action-button delete">
                        <span className="material-symbols-rounded">delete</span>
                        </button>
                    </div>
                    </div>
                    <div className="video-item">
                    <input type="url" placeholder="Enter video URL (YouTube, Vimeo, etc.)" defaultValue="https://youtube.com/watch?v=xyz789" />
                    <div className="video-actions">
                        <button type="button" className="action-button">
                        <span className="material-symbols-rounded">visibility</span>
                        </button>
                        <button type="button" className="action-button delete">
                        <span className="material-symbols-rounded">delete</span>
                        </button>
                    </div>
                    </div>
                    <button type="button" className="btn btn-add-video">
                    <span className="material-symbols-rounded" style={{marginRight: 8}}>add</span>
                    Add Video
                    </button>
                </div>
                </div>
                <div className="form-group">
                <label htmlFor="description">Notes (Optional)</label>
                <textarea id="description" rows={3} placeholder="Add any notes about the video tutorials" defaultValue={""} />
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


    </UploadVideoLinkStyle>
  )
}

export default UploadVideoLink