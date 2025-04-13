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
            width: 60%;
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
            color: var(--text);
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #d2cece;
            border-radius: 3px;
            font-size: 16px;
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
            /* font-size: 26px; */
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
        }
        
        .analytics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 25px;
        }
        
        .analytics-card {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
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

        .card-icon.green {
            background-color: rgba(76, 175, 80, 0.1);
            color: var(--success);
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
        
        .chart-container {
            height: 200px;
            margin-top: 20px;
            display: flex;
            align-items: flex-end;
            gap: 12px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .chart-bar {
            flex: 1;
            background-color: rgba(46, 139, 192, 0.2);
            border-radius: 6px 6px 0 0;
            position: relative;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .chart-bar:hover {
            background-color: rgba(46, 139, 192, 0.4);
        }
        
        .chart-bar-value {
            position: absolute;
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 12px;
            color: #666;
        }
        
        .chart-legend {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #666;
        }
        
        .legend-color {
            width: 12px;
            height: 12px;
            border-radius: 3px;
            margin-right: 6px;
        }
        
        .section-title {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 15px;
        }
        
        .filter-bar {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .filter-select {
            padding: 8px 15px;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
            background-color: var(--white);
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            color: var(--text);
            cursor: pointer;
            transition: var(--transition);
        }
        
        .filter-select:focus {
            outline: none;
            border-color: var(--secondary);
        }
        
        .product-analysis-container {
            margin-bottom: 30px;
        }
        
        .product-list {
            margin-top: 15px;
        }
        
        .product-item {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 20px;
            margin-bottom: 15px;
            transition: var(--transition);
        }
        
        .product-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        
        .product-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .product-name {
            font-size: 16px;
            font-weight: 500;
        }
        
        .product-stats {
            display: flex;
            gap: 15px;
        }
        
        .stat-item {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #666;
        }
        
        .stat-icon {
            font-size: 20px;
            margin-right: 6px;
            color: var(--secondary);
        }
        
        .progress-container {
            margin: 15px 0;
        }
        
        .progress-label {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            margin-bottom: 5px;
        }
        
        .progress-label span:last-child {
            color: #666;
        }
        
        .progress-bar {
            height: 8px;
            background-color: #e0e0e0;
            border-radius: 4px;
            overflow: hidden;
        }
        
        .progress-fill {
            height: 100%;
            border-radius: 4px;
            transition: width 0.5s ease;
        }
        
        .progress-fill.high {
            background-color: var(--success);
        }
        
        .progress-fill.medium {
            background-color: var(--warning);
        }
        
        .progress-fill.low {
            background-color: var(--danger);
        }
        
        .confusion-points {
            margin-top: 15px;
        }
        
        .confusion-title {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 10px;
        }
        
        .confusion-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .confusion-tag {
            padding: 5px 12px;
            border-radius: 20px;
            background-color: rgba(46, 139, 192, 0.1);
            color: var(--secondary);
            font-size: 12px;
            transition: var(--transition);
        }
        
        .confusion-tag:hover {
            background-color: rgba(46, 139, 192, 0.2);
        }
        
        .product-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #eee;
        }
        
        .btn {
            padding: 8px 15px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            border: none;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .btn-primary {
            background-color: var(--primary);
            color: var(--white);
        }
        
        .btn-primary:hover {
            background-color: var(--primary-light);
        }
        
        .btn-secondary {
            background-color: #f0f0f0;
            color: var(--text);
        }
        
        .btn-secondary:hover {
            background-color: #e0e0e0;
        }
        
        .queries-container {
            margin-top: 30px;
        }
        
        .query-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 20px;
            margin-top: 15px;
        }
        
        .query-card {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 20px;
            transition: var(--transition);
            position: relative;
        }
        
        .query-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        
        .query-content {
            font-size: 16px;
            margin-bottom: 15px;
            color: var(--text);
        }
        
        .query-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #666;
            font-size: 13px;
        }
        
        .query-product {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .query-status {
            position: absolute;
            top: 15px;
            right: 15px;
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .status-answered {
            background-color: rgba(76, 175, 80, 0.1);
            color: var(--success);
        }
        
        .status-unanswered {
            background-color: rgba(244, 67, 54, 0.1);
            color: var(--danger);
        }
        
        .improvements-container {
            margin-top: 30px;
        }
        
        .improvement-card {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 20px;
            margin-bottom: 20px;
            transition: var(--transition);
            border-left: 4px solid;
        }
        
        .improvement-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        
        .improvement-high {
            border-left-color: var(--danger);
        }
        
        .improvement-medium {
            border-left-color: var(--warning);
        }
        
        .improvement-low {
            border-left-color: var(--success);
        }
        
        .improvement-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .improvement-title {
            font-weight: 500;
            font-size: 16px;
        }
        
        .priority-badge {
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .priority-high {
            background-color: rgba(244, 67, 54, 0.1);
            color: var(--danger);
        }
        
        .priority-medium {
            background-color: rgba(255, 193, 7, 0.1);
            color: var(--warning);
        }
        
        .priority-low {
            background-color: rgba(76, 175, 80, 0.1);
            color: var(--success);
        }
        
        .improvement-description {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
            line-height: 1.5;
        }
        
        .improvement-stats {
            display: flex;
            gap: 20px;
            margin-bottom: 15px;
        }
        
        .improvement-stat {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .stat-value {
            font-size: 24px;
            font-weight: 600;
        }
        
        .stat-label {
            font-size: 12px;
            color: #666;
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
            
            .analytics-grid {
                grid-template-columns: 1fr;
            }
            
            .query-list {
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

export const SettingStyle = styled.div`
        /* Main Content Area */
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
        }
        
        .settings-container {
            /* display: grid; */
            /* grid-template-columns: ; */
            width: 90%;
            margin: auto;
            gap: 25px;
        }
        
        .settings-sidebar {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            overflow: hidden;
        }
        
        .settings-nav {
            list-style: none;
        }
        
        .settings-nav-item {
            padding: 15px 20px;
            cursor: pointer;
            transition: var(--transition);
            font-size: 14px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .settings-nav-item:hover {
            background-color: rgba(0, 0, 0, 0.02);
        }
        
        .settings-nav-item.active {
            background-color: rgba(0, 0, 0, 0.05);
            border-left: 3px solid var(--primary);
            font-weight: 500;
        }
        
        .settings-content {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            overflow: hidden;
        }
        
        .settings-header {
            padding: 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .settings-title {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 5px;
        }
        
        .settings-description {
            font-size: 14px;
            color: #666;
        }
        
        .settings-body {
            padding: 20px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 8px;
        }
        
        .form-control {
            width: 100%;
            padding: 10px 15px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            transition: var(--transition);
        }
        
        .form-control:focus {
            outline: none;
            border-color: var(--secondary);
            box-shadow: 0 0 0 2px rgba(46, 139, 192, 0.1);
        }
        
        textarea.form-control {
            min-height: 100px;
            resize: vertical;
        }
        
        .file-upload-container {
            border: 2px dashed #e0e0e0;
            border-radius: 8px;
            padding: 30px 20px;
            text-align: center;
            transition: var(--transition);
            cursor: pointer;
        }
        
        .file-upload-container:hover {
            border-color: var(--secondary);
            background-color: rgba(46, 139, 192, 0.02);
        }
        
        .file-upload-icon {
            font-size: 40px;
            color: #999;
            margin-bottom: 10px;
        }
        
        .file-upload-text {
            font-size: 14px;
            color: #666;
            margin-bottom: 5px;
        }
        
        .file-upload-subtext {
            font-size: 12px;
            color: #999;
        }
        
        .file-upload-link {
            color: var(--secondary);
            text-decoration: none;
            transition: var(--transition);
        }
        
        .file-upload-link:hover {
            text-decoration: underline;
        }
        
        .uploaded-files {
            margin-top: 20px;
        }
        
        .file-item {
            display: flex;
            align-items: center;
            padding: 12px 15px;
            background-color: #f9f9f9;
            border-radius: 8px;
            margin-bottom: 10px;
            transition: var(--transition);
        }
        
        .file-item:hover {
            background-color: #f0f0f0;
        }
        
        .file-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(46, 139, 192, 0.1);
            color: var(--secondary);
            border-radius: 8px;
            margin-right: 15px;
            font-size: 20px;
        }
        
        .file-info {
            flex: 1;
        }
        
        .file-name {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 3px;
        }
        
        .file-meta {
            font-size: 12px;
            color: #666;
        }
        
        .file-actions {
            display: flex;
            gap: 5px;
        }
        
        .file-action-btn {
            background: none;
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .file-action-btn:hover {
            background-color: rgba(0, 0, 0, 0.05);
            color: var(--text);
        }
        
        .btn {
            padding: 10px 20px;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            border: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        
        .btn-primary {
            background-color: var(--primary);
            color: var(--white);
        }
        
        .btn-primary:hover {
            background-color: var(--primary-light);
        }
        
        .btn-outline {
            background-color: transparent;
            color: var(--text);
            border: 1px solid #e0e0e0;
        }
        
        .btn-outline:hover {
            background-color: rgba(0, 0, 0, 0.02);
            border-color: #ccc;
        }
        
        .actions-container {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .tabs-container {
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .tabs {
            display: flex;
            overflow-x: auto;
        }
        
        .tab {
            padding: 15px 20px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            white-space: nowrap;
            border-bottom: 2px solid transparent;
        }
        
        .tab.active {
            border-bottom-color: var(--primary);
            color: var(--primary);
        }
        
        .tab:hover:not(.active) {
            background-color: rgba(0, 0, 0, 0.02);
            border-bottom-color: #e0e0e0;
        }
        
        .product-card {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            transition: var(--transition);
        }
        
        .product-card:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        
        .product-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .product-card-title {
            font-size: 16px;
            font-weight: 500;
        }
        
        .product-card-subtitle {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
        }
        
        .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .badge-success {
            background-color: rgba(76, 175, 80, 0.1);
            color: #4CAF50;
        }
        
        .badge-warning {
            background-color: rgba(255, 193, 7, 0.1);
            color: #FFC107;
        }
        
        .badge-danger {
            background-color: rgba(244, 67, 54, 0.1);
            color: #F44336;
        }
        
        .toggle-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .toggle-container:last-child {
            border-bottom: none;
        }
        
        .toggle-info {
            max-width: 80%;
        }
        
        .toggle-label {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 3px;
        }
        
        .toggle-description {
            font-size: 12px;
            color: #666;
        }
        
        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 46px;
            height: 24px;
        }
        
        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #e0e0e0;
            transition: .4s;
            border-radius: 24px;
        }
        
        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
        
        input:checked + .toggle-slider {
            background-color: var(--primary);
        }
        
        input:checked + .toggle-slider:before {
            transform: translateX(22px);
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
            
            .settings-container {
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

export const ProductQuestionsStyle = styled.div`
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
        
        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 20px;
            color: var(--secondary);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: var(--transition);
        }
        
        .back-link:hover {
            color: var(--primary);
        }
        
        .product-detail-container {
            display: grid;
            /* grid-template-columns: 1fr 2fr; */
            gap: 30px;
            margin-bottom: 30px;
        }
        
        .product-image-container {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 20px;
            overflow: hidden;
        }
        
        .product-image-main {
            border-radius: 8px;
            overflow: hidden;
            width: 100%;
            height: 300px;
            margin-bottom: 15px;
        }
        
        .product-image-main img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .product-image-gallery {
            display: flex;
            gap: 10px;
        }
        
        .gallery-item {
            width: 70px;
            height: 70px;
            border-radius: 6px;
            overflow: hidden;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .gallery-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .product-info {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 25px;
        }
        
        .product-title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 10px;
            color: var(--text);
        }
        
        .product-meta {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .meta-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
            color: #666;
        }
        
        .product-badge {
            background-color: var(--accent);
            color: var(--white);
            padding: 4px 10px;
            border-radius: 100px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .product-description {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 25px;
            color: #555;
        }
        
        .product-features {
            margin-bottom: 25px;
        }
        
        .feature-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 15px;
        }
        
        .feature-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
        }
        
        .feature-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
        }
        
        .feature-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 6px;
            background-color: rgba(46, 139, 192, 0.1);
            color: var(--secondary);
            font-size: 18px;
        }
        
        .product-actions {
            display: flex;
            gap: 15px;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            gap: 8px;
        }
        
        .btn-primary {
            background-color: var(--secondary);
            color: var(--white);
        }
        
        .btn-primary:hover {
            background-color: #247aa6;
            transform: translateY(-2px);
        }
        
        .btn-secondary {
            background-color: var(--background);
            color: var(--text);
        }
        
        .btn-secondary:hover {
            background-color: #e5e5e5;
            transform: translateY(-2px);
        }
        
        .tab-container {
            margin-top: 30px;
        }
        
        .tab-nav {
            display: flex;
            gap: 2px;
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .tab-btn {
            padding: 12px 20px;
            background: none;
            border: none;
            border-bottom: 2px solid transparent;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 500;
            color: #777;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .tab-btn.active {
            color: var(--secondary);
            border-bottom-color: var(--secondary);
        }
        
        .tab-content {
            background-color: var(--white);
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 25px;
        }
        
        .manual-item {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .manual-item:last-child {
            border-bottom: none;
        }
        
        .manual-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background-color: rgba(42, 47, 79, 0.1);
            color: var(--primary);
            margin-right: 15px;
        }
        
        .manual-info {
            flex: 1;
        }
        
        .manual-title {
            font-weight: 500;
            margin-bottom: 5px;
        }
        
        .manual-meta {
            display: flex;
            font-size: 12px;
            color: #777;
            gap: 15px;
        }
        
        .manual-actions {
            display: flex;
            gap: 10px;
        }
        
        .manual-btn {
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 6px;
            color: #777;
            transition: var(--transition);
        }
        
        .manual-btn:hover {
            background-color: var(--background);
            color: var(--text);
        }
        
        .material-symbols-rounded {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
        }
        .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
        }
        @media (max-width: 900px) {
            .product-detail-container {
                grid-template-columns: 1fr;
            }
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
            
            .feature-list {
                grid-template-columns: 1fr;
            }
            
            .product-actions {
                flex-direction: column;
            }
            
            .tab-nav {
                overflow-x: auto;
                white-space: nowrap;
                padding-bottom: 5px;
            }
            
            .tab-btn {
                padding: 12px 15px;
            }
        }
`;