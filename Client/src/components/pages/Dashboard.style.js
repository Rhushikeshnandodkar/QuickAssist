import styled from "styled-components"
export const DashboardStyle = styled.div`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', system-ui, sans-serif;
        }

        :root {
            --primary: #000000;
            --secondary: #333333;
            --accent: #666666;
            --background: #ffffff;
            --border: #e0e0e0;
        }

        body {
            background-color: var(--background);
        }

        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 250px;
            height: 100vh;
            background-color: var(--primary);
            padding: 20px 0;
            color: white;
        }

        .logo {
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid var(--accent);
            margin-bottom: 20px;
        }

        .nav-links {
            list-style: none;
        }

        .nav-links li {
            padding: 15px 25px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .nav-links li a {
            color: white;
            text-decoration: none;
            display: block;
        }

        .nav-links li:hover {
            background-color: var(--secondary);
        }

        .nav-links li.active {
            background-color: var(--secondary);
            border-left: 4px solid white;
        }

        .main-content {
            margin-left: 250px;
            padding: 30px;
        }

        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .stat-card h3 {
            color: var(--secondary);
            margin-bottom: 10px;
        }

        .stat-card .number {
            font-size: 32px;
            font-weight: bold;
            color: var(--primary);
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
        }

        .product-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
            background: var(--primary);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s;
            text-decoration: none;
        }

        .btn:hover {
            background: var(--secondary);
        }
`;