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
            width: 300px;
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