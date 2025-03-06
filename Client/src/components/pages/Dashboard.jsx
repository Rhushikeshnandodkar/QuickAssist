import React from 'react'
import Sidebar from '../molecules/Sidebar'
import { DashboardStyle } from './Dashboard.style';
function Dashboard() {
  return (
    <>
    <Sidebar />
    <DashboardStyle>
   <main className="main-content">
  <div className="dashboard-header">
    <h1>Dashboard</h1>
    <a href="add-product.html" className="btn">Add New Product</a>
  </div>
  <div className="stats-container">
    <div className="stat-card">
      <h3>Total Products</h3>
      <div className="number">24</div>
    </div>
    <div className="stat-card">
      <h3>Active Chatbots</h3>
      <div className="number">18</div>
    </div>
    <div className="stat-card">
      <h3>Total Customers</h3>
      <div className="number">156</div>
    </div>
  </div>
  <h2>Recent Products</h2>
  <div className="products-grid">
    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Smart Watch" className="product-image" />
      <div className="product-info">
        <div className="product-title">Smart Watch Pro</div>
        <p>Manual Version: 2.1</p>
        <div className="product-status">
          <span className="status-badge">Active Chatbot</span>
          <a href="edit-product.html" className="btn">Edit</a>
        </div>
      </div>
    </div>
  </div>
</main>


    </DashboardStyle>
    </>
  )
}

export default Dashboard;