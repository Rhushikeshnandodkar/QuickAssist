// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
       :root {
            --primary: #2A2F4F;
            --secondary: #2E8BC0;
            --accent: #FF6F61;
            --background: #F5F5F5;
            --text: #333333;
            --white: #FFFFFF;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            --transition: all 0.25s ease;
            --primary: #2A2F4F;
            --primary-light: #3d4270;
            --secondary: #2E8BC0;
            --accent: #FF6F61;
            --background: #F5F5F5;
            --text: #333333;
            --white: #FFFFFF;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            --transition: all 0.25s ease;
            --sidebar-width: 250px;
            --sidebar-collapsed: 70px;
            --header-height: 70px;
            --accent: #FF6F61;
            --success: #4CAF50;
            --warning: #FFC107;
            --danger: #F44336;
        }
       * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            /* font-family: 'Poppins', sans-serif; */
        }
`;

export default GlobalStyle;
