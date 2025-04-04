import styled from "styled-components"
export const ProductStyle = styled.div`
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
        
        .content {
            padding: 25px;
            margin-top: var(--header-height);
        }
        
        .page-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 25px;
        }
        
        .section-title {
            font-size: 20px;
            font-weight: 600;
        }
        
        .page-actions {
            display: flex;
            gap: 15px;
        }
        
        .search-box {
            position: relative;
            width: 250px;
        }
        
        .search-input {
            width: 100%;
            padding: 10px 15px 10px 40px;
            border: 1px solid #DDD;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            transition: var(--transition);
            background-color: var(--white);
        }
        
        .search-input:focus {
            outline: none;
            border-color: var(--secondary);
            box-shadow: 0 0 0 2px rgba(46, 139, 192, 0.2);
        }
        
        .search-icon {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: #777;
            font-size: 20px;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 20px;
            background-color: var(--primary);
            color: var(--white);
            border: none;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            gap: 8px;
        }
        
        .btn:hover {
            background-color: #232746;
            transform: translateY(-2px);
        }
        
        .btn-secondary {
            background-color: var(--white);
            color: var(--text);
            border: 1px solid #DDD;
        }
        
        .btn-secondary:hover {
            background-color: var(--background);
            border-color: #CCC;
        }
        
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
        }
        
        .product-card {
            background-color: var(--white);
            border-radius: 12px;
            /* box-shadow: var(--shadow); */
            border: 1px solid #80808040;
            overflow: hidden;
            transition: var(--transition);
        }
        
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
        }
        
        .product-image {
            height: 160px;
            background-color: #f0f0f0;
            position: relative;
            overflow: hidden;
        }
        
        .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .product-card:hover .product-image img {
            transform: scale(1.05);
        }
        
        .product-badge {
            position: absolute;
            top: 12px;
            right: 12px;
            background-color: var(--accent);
            color: var(--white);
            padding: 4px 10px;
            border-radius: 100px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .product-content {
            padding: 20px;
        }
        
        .product-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--text);
        }
        
        .product-category {
            font-size: 13px;
            color: #777;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .product-stats {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .stat {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 13px;
            color: #666;
        }
        
        .product-actions {
            display: flex;
            gap: 10px;
        }
        
        .product-btn {
            flex: 1;
            padding: 8px;
            border: none;
            border-radius: 6px;
            font-family: 'Poppins', sans-serif;
            font-size: 13px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            transition: var(--transition);
        }
        
        .product-btn.primary {
            background-color: var(--secondary);
            color: var(--white);
        }
        
        .product-btn.primary:hover {
            background-color: #247aa6;
        }
        
        .product-btn.secondary {
            background-color: var(--background);
            color: var(--text);
        }
        
        .product-btn.secondary:hover {
            background-color: #e5e5e5;
        }
        
        .material-symbols-rounded {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
        }
        
        .pagination {
            display: flex;
            justify-content: center;
            margin-top: 40px;
            gap: 8px;
        }
        
        .page-btn {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #DDD;
            border-radius: 6px;
            background-color: var(--white);
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .page-btn:hover {
            border-color: var(--secondary);
            color: var(--secondary);
        }
        
        .page-btn.active {
            background-color: var(--secondary);
            color: var(--white);
            border-color: var(--secondary);
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
            
            .product-grid {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            }
            
            .page-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }
            
            .page-actions {
                width: 100%;
                flex-direction: column;
            }
            
            .search-box {
                width: 100%;
            }
        }
`;

export const CreateLinkStyle = styled.div`
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background-color: #f5f5f5;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            max-width: 600px;
            width: 100%;
            margin: 5% auto;
            padding: 2rem;
        }

        .form-card {
            background: white;
            border-radius: 15px;
            border: 1px solid #8080803b;
            padding: 2rem;
        }

        .form-title {
            font-size: 2rem;
            color: #333;
            margin-bottom: 2rem;
            text-align: center;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
            color: #2d3436;
            font-weight: bold;
        }

        input, select {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        input:focus, select:focus {
            outline: none;
            border-color: #3498db;
        }

        .submit-button {
            width: 100%;
            padding: 1rem;
            background: black;
            color: white;
            border: none;
            border-radius: 2px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .submit-button:hover {
            background: white;
            border: 1px solid black;
            color: black;
        }

        .back-link {
            display: block;
            text-align: center;
            margin-top: 1rem;
            color: #636e72;
            text-decoration: none;
        }

        .back-link:hover {
            color: #2d3436;
        }

        .required {
            color: #e74c3c;
        }
`;

export const ProductDetailStyle = styled.div`
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
`

export const ChatbotStyle = styled.div`
        .chat-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            background-color: var(--background);
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .chat-header {
            padding: 15px 25px;
            background-color: var(--white);
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
        }
        
        .chat-title {
            font-weight: 500;
            font-size: 16px;
        }
        
        .chat-title-addon {
            font-size: 12px;
            color: #777;
            margin-left: 8px;
        }
        
        .chat-actions {
            margin-left: auto;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .chat-action-btn {
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
        
        .chat-action-btn:hover {
            background-color: var(--background);
            color: var(--text);
        }
        
        .chat-messages {
            flex: 1;
            padding: 25px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .message {
            display: flex;
            max-width: 80%;
        }
        
        .message.user {
            align-self: flex-end;
            flex-direction: row-reverse;
        }
        
        .message-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            margin: 0 10px;
            flex-shrink: 0;
        }
        .feedback-buttons ul{
            display: flex;
            margin-top: -10px;
        }
        .feedback-buttons ul li{
           margin-right: 1%;
           font-size: 14px;
           padding:8px 12px;
           cursor: pointer;
        }
        .work {
        background-color: #d8fad8;
        color: green;
        border:
        1px solid #96c796;
       
        border-radius:10px;
        }
        .not-work {
        background-color:rgb(242, 211, 211);
        color: red;
        border:
        1px solid rgb(233, 52, 52);
        padding:12px;
        border-radius:10px;
        }
        .user .message-avatar {
            background-color: var(--accent);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 500;
        }
        .btn-connect.visible{
            display: block;
            margin: auto;
            width: 40%;
            background-color: white;
            padding: 1%;
            color: black;
            font-weight: 400;
            font-size: 1.4rem;
            align-items: center;
            display: flex;
            /* justify-content: space-around; */
            text-align: center;

        }

        .btn-connect{
            display: none;
        }
        .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 44
        }
        .material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 32px;
        }
        
        .bot .message-avatar {
            background-color: var(--secondary);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }
        
        .message-content {
            background-color: var(--white);
            padding: 12px 16px;
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            font-size: 18px;
            line-height: 1.5;
        }
        
        .user .message-content {
            background-color: var(--primary);
            color: var(--white);
            border-bottom-right-radius: 0;
        }
        
        .bot .message-content {
            background-color: var(--white);
            border-bottom-left-radius: 0;
        }
        
        .message-meta {
            margin-top: 6px;
            font-size: 11px;
            color: #999;
            text-align: right;
        }
        
        .typing-indicator {
            display: flex;
            align-items: center;
            gap: 4px;
            margin-top: 5px;
            padding-left: 5px;
        }
        
        .typing-dot {
            width: 8px;
            height: 8px;
            background-color: #ccc;
            border-radius: 50%;
            animation: typing-animation 1.4s infinite ease-in-out;
        }
        
        .typing-dot:nth-child(1) {
            animation-delay: 0s;
        }
        
        .typing-dot:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .typing-dot:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes typing-animation {
            0%, 100% {
                transform: scale(0.75);
                opacity: 0.5;
            }
            50% {
                transform: scale(1);
                opacity: 1;
            }
        }
        
        .chat-input-container {
            padding: 15px 25px;
            background-color: var(--white);
            border-top: 1px solid #eee;
        }
        
        .chat-input-wrapper {
            display: flex;
            align-items: center;
            background-color: var(--background);
            border-radius: 24px;
            padding: 0 15px;
        }
        
        .chat-input {
            flex: 1;
            height: 46px;
            border: none;
            background: none;
            padding: 0 10px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
        }
        
        .chat-input:focus {
            outline: none;
        }
        
        .input-actions {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .input-action-btn {
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            color: #777;
            transition: var(--transition);
        }
        
        .input-action-btn:hover {
            background-color: rgba(0, 0, 0, 0.05);
            color: var(--text);
        }
        
        .send-btn {
            background-color: var(--secondary);
            color: var(--white);
        }
        
        .send-btn:hover {
            background-color: #247aa6;
            color: var(--white);
        }
        
        /* Floating Chatbot */
        .floating-chatbot {
            position: fixed;
            right: 25px;
            bottom: 25px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: var(--primary);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            z-index: 999;
        }
        
        .floating-chatbot:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
        }
        
        .material-symbols-rounded {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
        }
        
        @media (max-width: 900px) {
            .chatbot-sidebar {
                width: 250px;
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
            
            .chatbot-sidebar {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                z-index: 90;
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }
            
            .chatbot-sidebar.open {
                transform: translateX(0);
            }
            
            .chat-container {
                width: 100%;
            }
            
            .chat-toggle-btn {
                display: block;
            }
        }
`