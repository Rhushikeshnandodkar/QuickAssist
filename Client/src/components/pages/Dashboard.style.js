import styled from "styled-components"
export const DashboardStyle = styled.div`
        .main-content {
            flex: 1;
            margin-left: var(--sidebar-width);
            transition: var(--transition);
        }
        
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
        
        .content {
            padding: 25px;
            margin-top: var(--header-height);
            margin-left: 250px;
        }
        
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 25px;
        }
        
        .analytics-card {
            background-color: var(--white);
            border-radius: 12px;
            /* box-shadow: var(--shadow); */
            border: 1px solid #80808040;
            padding: 20px;
            transition: var(--transition);
        }
        
        .analytics-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        
        .card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        
        .card-title {
            font-size: 16px;
            font-weight: 500;
            color: var(--text);
        }
        
        .card-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            font-size: 20px;
        }
        
        .card-icon.blue {
            background-color: rgba(46, 139, 192, 0.1);
            color: var(--secondary);
        }
        
        .card-icon.purple {
            background-color: rgba(42, 47, 79, 0.1);
            color: var(--primary);
        }
        
        .card-icon.coral {
            background-color: rgba(255, 111, 97, 0.1);
            color: var(--accent);
        }
        
        .card-value {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .card-description {
            font-size: 14px;
            color: #666;
        }
        
        .quick-actions {
            background-color: var(--white);
            border-radius: 12px;
            /* box-shadow: var(--shadow); */
            border: 1px solid #80808040;
            padding: 20px;
            margin-bottom: 25px;
        }
        
        .section-title {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 15px;
        }
        
        .actions-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 15px;
        }
        
        .action-card {
            background-color: var(--background);
            border-radius: 10px;
            padding: 15px;
            text-align: center;
            transition: var(--transition);
            cursor: pointer;
            text-decoration: none;
            color: var(--text);
        }
        
        .action-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }
        
        .action-icon {
            width: 50px;
            height: 50px;
            background-color: var(--white);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 10px;
            font-size: 24px;
            color: var(--secondary);
        }
        
        .action-label {
            font-size: 14px;
            font-weight: 500;
        }
        
        .recent-activity {
            background-color: var(--white);
            border-radius: 12px;
            /* box-shadow: var(--shadow); */
            border: 1px solid #80808040;
            padding: 20px;
        }
        
        .activity-list {
            margin-top: 15px;
        }
        
        .activity-item {
            display: flex;
            align-items: flex-start;
            padding: 12px 0;
            border-bottom: 1px solid #eee;
        }
        
        .activity-item:last-child {
            border-bottom: none;
        }
        
        .activity-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background-color: rgba(46, 139, 192, 0.1);
            color: var(--secondary);
            margin-right: 12px;
            flex-shrink: 0;
        }
        
        .activity-details {
            flex: 1;
        }
        
        .activity-title {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 3px;
        }
        
        .activity-meta {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #777;
        }
        
        .activity-time {
            margin-right: 10px;
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

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .sidebar {
                width: var(--sidebar-collapsed);
                transform: translateX(-100%);
            }
            
            .menu-text, 
            .user-details, 
            .sidebar-logo {
                display: none;
            }
            
            .sidebar.mobile-open {
                transform: translateX(0);
                width: var(--sidebar-width);
            }
            
            .sidebar.mobile-open .menu-text, 
            .sidebar.mobile-open .user-details, 
            .sidebar.mobile-open .sidebar-logo {
                display: block;
            }
            
            .sidebar.mobile-open .sidebar-toggle {
                margin-left: auto;
            }
            
            .main-content, .header {
                left: 0;
                margin-left: 0;
            }
            
            .dashboard-grid {
                grid-template-columns: 1fr;
            }
            
            .mobile-menu-toggle {
                display: block;
            }
        }
        
        .material-symbols-rounded {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
        }
`;