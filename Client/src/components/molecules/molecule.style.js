import styled from "styled-components"

export const SidebarStyle = styled.div`
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
            background-color: black;
        }

        .logo {
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
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

`;

