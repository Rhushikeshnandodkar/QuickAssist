import React from 'react'
import { SidebarStyle } from './molecule.style'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
<SidebarStyle>
 <nav className="navbar">
  <div className="logo">ManualMate</div>
  <ul className="nav-links">
    <li><Link to={`/dashboard`}>Dashboard</Link></li>
    <li><Link to={`/products`}>Products</Link></li>
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