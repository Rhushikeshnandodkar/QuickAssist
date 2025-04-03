import styled from "styled-components"

export const CompanyFormStyle = styled.div`

        .auth-button{
            background-color : black;
            color : white;
            width: 100%;
        }
        .sidebar{
            margin-top: 0px;
        }
        .main-content {
            margin-left: 250px;
            padding: 30px;
        }

        .form-container {
            /* max-width: 800px; */
            width: 50%;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 10px;
            /* box-shadow: 0 2px 10px rgba(0,0,0,0.1); */
            border: 1px solid #8080803b;
        }

        .form-header {
            margin-bottom: 30px;
        }

        .form-header h1{
            font-size: 1.4rem;
            padding: 8px 0px;
        }
        .form-header p{
            color: gray;

        }
        .form-group {
            margin-bottom: 30px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--secondary);
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 8px;
            border: 1px solid #d2cece;
            border-radius: 3px;
            font-size: 14px;
        }

        .form-group textarea {
            min-height: 100px;
            resize: vertical;
        }

        .upload-area {
            border: 2px dashed var(--border);
            padding: 40px;
            text-align: center;
            margin: 20px 0;
            border-radius: 10px;
            cursor: pointer;
            transition: border-color 0.3s;
        }

        .upload-area:hover {
            border-color: var(--primary);
        }

        .upload-icon {
            font-size: 48px;
            color: var(--accent);
            margin-bottom: 10px;
        }
        .auth-button{
            padding: 15px;
            border-radius: 3px;
            background-color: var(--primary);
        }
        .btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 12px 40px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s;
        }

        .btn:hover {
            background: var(--secondary);
        }

        .btn-group {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            margin-top: 30px;
        }

        .btn-outline {
            background: transparent;
            border: 2px solid var(--primary);
            color: var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: white;
        }
`;

export const ProductsFormStyle = styled.div`
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
        
        .content {
            padding: 25px;
            margin-top: var(--header-height);
        }
        
        .form-card {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 25px;
            max-width: 700px;
            margin: 0 auto;
        }
        
        .form-header {
            margin-bottom: 25px;
        }
        
        .form-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        
        .form-description {
            font-size: 14px;
            color: #666;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            font-size: 14px;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #DDD;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            transition: var(--transition);
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--secondary);
            box-shadow: 0 0 0 2px rgba(46, 139, 192, 0.2);
        }
        
        .form-row {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .form-col {
            flex: 1;
        }
        
        .upload-area {
            border: 2px dashed #DDD;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            margin-bottom: 25px;
            transition: var(--transition);
            cursor: pointer;
        }
        
        .upload-area:hover, .upload-area.drag-over {
            border-color: var(--secondary);
            background-color: rgba(46, 139, 192, 0.05);
        }
        
        .upload-icon {
            font-size: 48px;
            color: var(--secondary);
            margin-bottom: 15px;
        }
        
        .upload-text {
            margin-bottom: 10px;
            font-weight: 500;
        }
        
        .upload-subtext {
            font-size: 14px;
            color: #777;
            margin-bottom: 15px;
        }
        
        .upload-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 20px;
            background-color: var(--secondary);
            color: var(--white);
            border: none;
            border-radius: 6px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .upload-btn:hover {
            background-color: #247aa6;
        }
        
        .upload-btn-icon {
            margin-right: 8px;
        }
        
        .file-list {
            margin-top: 25px;
            border-top: 1px solid #eee;
            padding-top: 20px;
        }
        
        .file-item {
            display: flex;
            align-items: center;
            padding: 12px;
            background-color: var(--background);
            border-radius: 8px;
            margin-bottom: 10px;
        }
        
        .file-icon {
            font-size: 24px;
            margin-right: 15px;
            color: var(--secondary);
        }
        
        .file-info {
            flex: 1;
        }
        
        .file-name {
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 4px;
        }
        
        .file-size {
            font-size: 12px;
            color: #777;
        }
        
        .file-actions {
            display: flex;
            gap: 8px;
        }
        
        .file-action-btn {
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 4px;
            color: #777;
            transition: var(--transition);
        }
        
        .file-action-btn:hover {
            background-color: rgba(0, 0, 0, 0.05);
            color: var(--text);
        }
        
        .file-action-btn.delete:hover {
            color: var(--accent);
        }
        
        .progress-bar {
            height: 6px;
            background-color: #f0f0f0;
            border-radius: 3px;
            overflow: hidden;
            margin-top: 8px;
        }
        
        .progress-fill {
            height: 100%;
            background-color: var(--secondary);
            width: 75%;
            border-radius: 3px;
            transition: width 0.3s ease;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 24px;
            background-color: var(--primary);
            color: var(--white);
            border: none;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .btn-icon {
            margin-right: 8px;
        }
        
        .btn:hover {
            background-color: #232746;
            transform: translateY(-2px);
        }
        
        .btn-secondary {
            background-color: var(--background);
            color: var(--text);
        }
        
        .btn-secondary:hover {
            background-color: #e5e5e5;
        }
        
        .form-actions {
            display: flex;
            justify-content: flex-end;
            gap: 15px;
            margin-top: 30px;
        }
        
        .material-symbols-rounded {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
        }
        
        .file-formats {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 15px;
        }
        
        .format-pill {
            font-size: 12px;
            padding: 4px 12px;
            border-radius: 100px;
            background-color: rgba(46, 139, 192, 0.1);
            color: var(--secondary);
        }
        
        @media (max-width: 768px) {
            .sidebar {
                transform: translateX(-100%);
            }
            
            .main-content, .header {
                left: 0;
                margin-left: 0;
            }
            
            .sidebar.mobile-open {
                transform: translateX(0);
            }
            
            .form-row {
                flex-direction: column;
                gap: 0;
            }
            
            .form-card {
                padding: 20px 15px;
            }
            
            .upload-area {
                padding: 20px 15px;
            }
            
            .file-formats {
                flex-wrap: wrap;
            }
        }
`;

export const ChatbotListStyle = styled.div`
        /* Main Content Area */
        .main {
            flex: 1;
            margin-left: 280px;
            padding: 30px;
            transition: var(--transition);
            margin-top: 70px;
        }
        
        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .page-title {
            font-size: 26px;
            font-weight: 600;
            color: var(--primary);
        }
        
        .page-actions {
            display: flex;
            gap: 15px;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 24px;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 14px;
            cursor: pointer;
            transition: var(--transition);
            border: none;
            outline: none;
        }
        
        .btn-primary {
            background-color: var(--primary);
            color: var(--white);
        }
        
        .btn-primary:hover {
            background-color: var(--primary-light);
            box-shadow: 0 6px 15px rgba(42, 47, 79, 0.2);
            transform: translateY(-2px);
        }
        
        .btn-icon {
            padding: 10px;
        }
        
        /* Search Box */
        .search-box {
            position: relative;
            margin-bottom: 25px;
        }
        
        .search-input {
            width: 100%;
            padding: 15px 20px 15px 45px;
            border-radius: 10px;
            border: 1px solid var(--border);
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            transition: var(--transition);
            background-color: var(--white);
        }
        
        .search-input:focus {
            outline: none;
            border-color: var(--secondary);
            box-shadow: 0 0 0 3px rgba(46, 139, 192, 0.1);
        }
        
        .search-icon {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--muted);
            font-size: 20px;
        }
        
        /* Table Styles */
        .table-container {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            overflow: hidden;
            margin-bottom: 30px;
        }
        
        .table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .table th, .table td {
            padding: 16px 20px;
            text-align: left;
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        
        .table th {
            font-weight: 600;
            color: var(--primary);
            background-color: rgba(0,0,0,0.01);
            position: sticky;
            top: 0;
        }
        
        .table tr:last-child td {
            border-bottom: none;
        }
        
        .table tr:hover {
            background-color: rgba(0,0,0,0.01);
        }
        
        .status-badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 12px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .status-active {
            background-color: rgba(76, 175, 80, 0.1);
            color: var(--success);
        }
        
        .status-inactive {
            background-color: rgba(244, 67, 54, 0.1);
            color: var(--danger);
        }
        
        .status-pending {
            background-color: rgba(255, 193, 7, 0.1);
            color: var(--warning);
        }
        
        .status-badge::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            margin-right: 5px;
        }
        
        .status-active::before {
            background-color: var(--success);
        }
        
        .status-inactive::before {
            background-color: var(--danger);
        }
        
        .status-pending::before {
            background-color: var(--warning);
        }
        
        .actions {
            display: flex;
            gap: 10px;
        }
        
        .action-btn {
            width: 32px;
            height: 32px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
            transition: var(--transition);
            font-size: 16px;
        }
        
        .action-btn-primary {
            background-color: rgba(46, 139, 192, 0.1);
            color: var(--secondary);
        }
        
        .action-btn-primary:hover {
            background-color: var(--secondary);
            color: var(--white);
        }
        
        .action-btn-danger {
            background-color: rgba(244, 67, 54, 0.1);
            color: var(--danger);
        }
        
        .action-btn-danger:hover {
            background-color: var(--danger);
            color: var(--white);
        }
        
        .action-btn-success {
            background-color: rgba(76, 175, 80, 0.1);
            color: var(--success);
        }
        
        .action-btn-success:hover {
            background-color: var(--success);
            color: var(--white);
        }
        
        /* Pagination */
        .pagination {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 5px;
        }
        
        .pagination-btn {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            border: 1px solid var(--border);
            background-color: var(--white);
            color: var(--text);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transition);
            font-size: 14px;
        }
        
        .pagination-btn:hover, .pagination-btn.active {
            background-color: var(--primary);
            color: var(--white);
            border-color: var(--primary);
        }
        
        /* Floating Action Button */
        .fab {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background-color: var(--primary);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(42, 47, 79, 0.3);
            transition: var(--transition);
            border: none;
            font-size: 24px;
            z-index: 99;
        }
        
        .fab:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 8px 25px rgba(42, 47, 79, 0.4);
        }
        
        /* Utility Classes */
        .truncate {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 200px;
        }
        
        /* Help Widget */
        .help-widget {
            position: fixed;
            bottom: 30px;
            right: 100px;
            z-index: 98;
        }
        
        .help-trigger {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: var(--secondary);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(46, 139, 192, 0.3);
            transition: var(--transition);
            border: none;
            font-size: 20px;
        }
        
        .help-trigger:hover {
            transform: scale(1.1);
        }
        
        /* Responsive styles */
        @media (max-width: 1200px) {
            .sidebar {
                width: 80px;
            }
            
            .sidebar.expanded {
                width: 280px;
            }
            
            .sidebar-logo span, .user-details, .sidebar-nav-link span {
                display: none;
            }
            
            .sidebar.expanded .sidebar-logo span, 
            .sidebar.expanded .user-details, 
            .sidebar.expanded .sidebar-nav-link span {
                display: inline-block;
            }
            
            .main {
                margin-left: 80px;
            }
            
            .sidebar.expanded + .main {
                margin-left: 280px;
            }
        }
        
        @media (max-width: 768px) {
            .sidebar {
                width: 0;
                transform: translateX(-100%);
            }
            
            .sidebar.mobile-visible {
                width: 280px;
                transform: translateX(0);
            }
            
            .main {
                margin-left: 0;
                padding: 20px;
            }
            
            .mobile-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .mobile-toggle {
                display: block;
            }
            
            .table-container {
                overflow-x: auto;
            }
            
            .table {
                min-width: 800px;
            }
        }
`;

export const AnalyticsStyle = styled.div`
    .main-content {
            margin-left: 250px;
            padding: 30px;
            margin-top: 70px;
        }
        .main {
            flex: 1;
            margin-left: 280px;
            padding: 30px;
            transition: var(--transition);
            margin-top: 70px;
        }

        .analytics-header {
            margin-bottom: 30px;
        }

        .analytics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .metric-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .metric-title {
            font-size: 16px;
            color: var(--accent);
            margin-bottom: 10px;
        }

        .metric-value {
            font-size: 32px;
            font-weight: bold;
            color: var(--primary);
        }

        .chart-container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }

        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .chart-placeholder {
            width: 100%;
            height: 300px;
            background: #f5f5f5;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent);
        }

        .queries-list {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .query-item {
            padding: 15px;
            border-bottom: 1px solid var(--border);
        }

        .query-item:last-child {
            border-bottom: none;
        }

        .query-meta {
            display: flex;
            justify-content: space-between;
            color: var(--accent);
            font-size: 14px;
            margin-top: 5px;
        }

        .accuracy-badge {
            background: #e8f5e9;
            color: #2e7d32;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
        }
`;