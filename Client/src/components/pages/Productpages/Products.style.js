import styled from "styled-components"
export const ProductStyle = styled.div`
        .main-content {
            margin-left: 250px;
            padding: 30px;
        }

        .products-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .products-header h1{
            font-size: 2rem;
            font-weight: 700;
        }
        .search-bar {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .search-input {
            padding: 10px;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            width: 500px;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 15px;
        }

        .product-card {
            background: white;
            border-radius: 2px;
            overflow: hidden;
            border: 1px solid #8080803b;
        }

        .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .product-info {
            padding: 20px;
        }

        .product-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .product-meta {
            color: var(--accent);
            font-size: 14px;
            margin-bottom: 15px;
        }

        .product-status {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .status-badge {
            background: #e8f5e9;
            color: #2e7d32;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 14px;
        }

        .btn {
            background: black;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s;
            text-decoration: none;
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
            padding: 2rem;
        }

        .form-card {
            background: white;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
            border: 2px solid #e0e0e0;
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
            background: #3498db;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .submit-button:hover {
            background: #2980b9;
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
           .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .product-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 30px;
            margin-top: 30px;
        }

        .product-info, .customer-section, .analytics, .customer-list {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            border: 1px solid #8080803b;
            margin-bottom: 20px;
        }

        .product-title {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #222;
        }

        .product-meta {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 20px 0;
            padding: 20px 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }

        .meta-item {
            text-align: center;
        }

        .meta-item span {
            display: block;
            color: #666;
        }

        .meta-item strong {
            display: block;
            font-size: 1.2em;
            color: #222;
            margin-top: 5px;
        }

        .add-customer-form {
            margin-top: 20px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: 500;
        }

        .form-group input {
            width: 100%;
            padding: 10px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            color: #333;
        }

        .form-group input:focus {
            border-color: #000;
            outline: none;
        }

        .btn {
            background-color: #000;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
            transition: all 0.3s ease;
        }

        .btn:hover {
            background-color: #333;
            transform: translateY(-1px);
        }

        .analytics-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 20px;
        }

        .analytics-card {
            background-color: #f8f8f8;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .analytics-card:hover {
            transform: translateY(-2px);
        }

        .analytics-card h3 {
            color: #666;
            font-size: 0.9em;
            margin-bottom: 10px;
        }

        .analytics-card .value {
            font-size: 2em;
            color: #000;
            font-weight: bold;
        }

        .status-badge {
            display: inline-block;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.8em;
            background-color: #000;
            color: white;
        }

        .customer-list {
            margin-top: 20px;
        }

        .customer-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }

        .customer-table th,
        .customer-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #eee;
        }

        .customer-table th {
            background-color: #f8f8f8;
            font-weight: 600;
            color: #333;
        }

        .customer-table tr:hover {
            background-color: #f9f9f9;
        }

        .section-title {
            font-size: 1.5em;
            margin-bottom: 20px;
            color: #222;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .tab-container {
            margin-bottom: 20px;
        }

        .tab-buttons {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .tab-btn {
            padding: 10px 20px;
            background-color: #f0f0f0;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            color: #333;
            font-weight: 500;
        }

        .tab-btn.active {
            background-color: #000;
            color: #fff;
        }

        .engagement-stats {
            display: flex;
            gap: 20px;
            margin-top: 20px;
        }

        .stat-card {
            flex: 1;
            padding: 15px;
            background-color: #f8f8f8;
            border-radius: 8px;
            text-align: center;
        }

        .stat-card h4 {
            color: #666;
            font-size: 0.9em;
            margin-bottom: 5px;
        }

        .stat-card .stat-value {
            font-size: 1.5em;
            color: #000;
            font-weight: bold;
        }
`