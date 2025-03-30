import React from 'react'
import { SidebarStyle } from './molecule.style'
import { Link } from 'react-router-dom'
import GlobalStyle from './gloable.style'

function Sidebar() {
  return (
    <>
<SidebarStyle>
 {/* <nav className="navbar">
  <div className="logo">ManualMate</div>
  <ul className="nav-links">
    <li><Link to={`/dashboard`}>Dashboard</Link></li>
    <li><Link to={`/products`}>Products</Link></li>
    <li><a href="chatbots.html">Chatbots</a></li>
    <li><a href="customers.html">Customers</a></li>
    <li><a href="settings.html">Settings</a></li>
  </ul>
</nav> */}
<GlobalStyle/>
<div class="sidebar">
        <div class="sidebar-header">
            <div class="sidebar-logo">Quickassits.Ai</div>
            {/* <button class="sidebar-toggle" onclick="toggleSidebar()"> */}
                {/* <span class="material-symbols-rounded">menu</span> */}
            {/* </button> */}
        </div>
        
        <div class="sidebar-menu">
            <Link to={'/dashboard'} class={`menu-item ${window.location.pathname === "/dashboard" ? "active" : ""}`}>
                <span class="menu-icon">
                    <span class="material-symbols-rounded">dashboard</span>
                </span>
                <span class="menu-text">Dashboard</span>
            </Link>
            <Link 
  to={'/products'} 
  className={`menu-item ${window.location.pathname === "/products" || window.location.pathname.startsWith("/product-details/") ? "active" : ""}`}
>
                <span class="menu-icon">
                    <span class="material-symbols-rounded">apps</span>
                </span>
                <span class="menu-text">Products</span>
            </Link>
            {/* <a href="upload-manual.html" class="menu-item">
                <span class="menu-icon">
                    <span class="material-symbols-rounded">upload_file</span>
                </span>
                <span class="menu-text">Upload Manuals</span>
            </a> */}
            {/* <a href="create-customer.html" class="menu-item">
                <span class="menu-icon">
                    <span class="material-symbols-rounded">person_add</span>
                </span>
                <span class="menu-text">Customers</span>
            </a> */}
            <Link to={'/chatbots'} class={`menu-item ${window.location.pathname === "/chatbots" ? "active" : ""}`}>
                <span class="menu-icon">
                    <span class="material-symbols-rounded">smart_toy</span>
                </span>
                <span class="menu-text">Chatbots</span>
            </Link>
            <a href="#" class="menu-item">
                <span class="menu-icon">
                    <span class="material-symbols-rounded">analytics</span>
                </span>
                <span class="menu-text">Analytics</span>
            </a>
            <Link to={`/create-company`} class={`menu-item ${window.location.pathname === "/create-company" ? "active" : ""}`}>
                <span class="menu-icon">
                    <span class="material-symbols-rounded">settings</span>
                </span>
                <span class="menu-text">Settings</span>
            </Link>
        </div>
        
        <div class="sidebar-footer">
            <div class="user-info">
                <div class="user-avatar">JD</div>
                <div class="user-details">
                    <div class="user-name">John Doe</div>
                    <div class="user-role">Administrator</div>
                </div>
            </div>
        </div>
    </div>
</SidebarStyle>
    </>
  )
}

export default Sidebar