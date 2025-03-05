import React from 'react'
import Sidebar from '../molecules/Sidebar'
function Dashboard() {
  return (
    <>
    <Sidebar />
    <main className="main-content">
      <div className="form-container">
        <div className="form-header">
          <h1>Add New Product</h1>
          <p>Fill in the product details and upload the user manual to create a new chatbot.</p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input type="text" id="productName" required placeholder="Enter product name" />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Product Description</label>
            <textarea id="productDescription" placeholder="Enter product description" defaultValue={""} />
          </div>
          <div className="form-group">
            <label htmlFor="manualVersion">Manual Version</label>
            <input type="text" id="manualVersion" required placeholder="e.g., 1.0" />
          </div>
          <div className="form-group">
            <label>Product Manual</label>
            <div className="upload-area">
              <div className="upload-icon">📄</div>
              <h3>Drop your manual file here</h3>
              <p>or click to browse</p>
              <p className="text-sm">Supported formats: PDF, DOCX (max 10MB)</p>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="chatbotName">Chatbot Name</label>
            <input type="text" id="chatbotName" required placeholder="Enter chatbot name" />
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-outline" onclick="window.location.href='products.html'">Cancel</button>
            <button type="submit" className="btn">Create Product &amp; Generate Chatbot</button>
          </div>
        </form>
      </div>
    </main>

    </>
  )
}

export default Dashboard;