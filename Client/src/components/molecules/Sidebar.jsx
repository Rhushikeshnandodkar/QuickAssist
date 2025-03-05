import React from 'react'
import { SidebarStyle } from './molecule.style'

function Sidebar() {
  return (
    <>
<SidebarStyle>
 <nav className="navbar">
  <div className="logo">ManualMate</div>
  <ul className="nav-links">
    <li><a href="dashboard.html">Dashboard</a></li>
    <li><a href="products.html">Products</a></li>
    <li><a href="chatbots.html">Chatbots</a></li>
    <li><a href="customers.html">Customers</a></li>
    <li><a href="settings.html">Settings</a></li>
  </ul>
</nav>
</SidebarStyle>
    </>
  )
}

export default Sidebar