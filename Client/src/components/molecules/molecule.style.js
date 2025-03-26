import styled from "styled-components"

export const SidebarStyle = styled.div`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--background);
            color: var(--text);
            min-height: 100vh;
            display: flex;
        }
        
        .sidebar {
            width: var(--sidebar-width);
            background-color: var(--primary);
            color: var(--white);
            height: 100vh;
            position: fixed;
            transition: var(--transition);
            z-index: 100;
            overflow-y: auto;
            margin-top: -70px;
        }
        
        .sidebar-header {
            display: flex;
            align-items: center;
            padding: 20px;
            height: var(--header-height);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .sidebar-logo {
            font-weight: 600;
            font-size: 20px;
        }
        
        .sidebar-toggle {
            margin-left: auto;
            background: none;
            border: none;
            color: var(--white);
            cursor: pointer;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: var(--transition);
        }
        
        .sidebar-toggle:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .sidebar-menu {
            padding: 15px 0;
        }
        
        .menu-item {
            display: flex;
            align-items: center;
            padding: 12px 20px;
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: var(--transition);
        }
        
        .menu-item:hover, .menu-item.active {
            background-color: var(--primary-light);
            color: var(--white);
        }
        
        .menu-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
            font-size: 20px;
        }
        
        .menu-text {
            font-size: 14px;
        }
        
        .sidebar-footer {
            padding: 15px 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            position: absolute;
            bottom: 0;
            width: 100%;
        }
        
        .user-info {
            display: flex;
            align-items: center;
        }
        
        .user-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: var(--secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            margin-right: 12px;
        }
        
        .user-details {
            overflow: hidden;
        }
        
        .user-name {
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .user-role {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .body-collapsed .sidebar {
            width: var(--sidebar-collapsed);
        }
        
        .body-collapsed .main-content, 
        .body-collapsed .header {
            left: var(--sidebar-collapsed);
        }
        
        .body-collapsed .menu-text, 
        .body-collapsed .user-details, 
        .body-collapsed .sidebar-logo {
            display: none;
        }
        
        .body-collapsed .sidebar-toggle {
            margin-left: 0;
        }
        
        .body-collapsed .sidebar-header, 
        .body-collapsed .sidebar-footer {
            justify-content: center;
        }
        
        .body-collapsed .user-avatar {
            margin-right: 0;
        }

`;

export const NavbarStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

    .header {
            height: var(--header-height);
            background-color: var(--white);
            box-shadow: var(--shadow);
            display: flex;
            align-items: center;
            padding: 0 25px;
            position: fixed;
            top: 0;
            right: 0;
            left: var(--sidebar-width);
            z-index: 99;
            transition: var(--transition);
        }
        
        .page-title {
            font-weight: 600;
            font-size: 18px;
        }
        
        .header-actions {
            margin-left: auto;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .action-button {
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 6px;
            color: var(--text);
            transition: var(--transition);
        }
        
        .action-button:hover {
            background-color: var(--background);
        }
        
        .notification-indicator {
            position: relative;
        }
        
        .notification-indicator::after {
            content: '';
            position: absolute;
            top: 8px;
            right: 8px;
            width: 8px;
            height: 8px;
            background-color: var(--accent);
            border-radius: 50%;
        }

`;

