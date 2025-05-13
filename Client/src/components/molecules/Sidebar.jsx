import React from 'react'
import { SidebarStyle } from './molecule.style'
import { Link } from 'react-router-dom'
import GlobalStyle from './gloable.style'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()
    const {user} = useSelector((state) => (state.user))
    const {company} = useSelector((state) => (state.company))
    useEffect(() =>{
        if(!user){
            navigate('/login')
        }
    }, [user])
    // console.log(company)
  return (
    <>
<SidebarStyle>
<GlobalStyle/>
<div class="sidebar">
        <div class="sidebar-header">
            <div class="sidebar-logo">HelpXpert</div>
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
            <Link to={'/chatbots'} class={`menu-item ${window.location.pathname === "/chatbots" ? "active" : ""}`}>
                <span class="menu-icon">
                    <span class="material-symbols-rounded">smart_toy</span>
                </span>
                <span class="menu-text">Chatbots</span>
            </Link>
            <Link to={`/analytics`} class={`menu-item ${window.location.pathname === "/analytics" ? "active" : ""}`}>
                <span class="menu-icon">
                    <span class="material-symbols-rounded">analytics</span>
                </span>
                <span class="menu-text">Analytics</span>
            </Link>
            <Link to={`/settings`} class={`menu-item ${window.location.pathname === "/settings" ? "active" : ""}`}>
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
                {user && user.data ?              
                    <div class="user-name">{user.data.name}</div>
                            : <h4>loading...</h4>}
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