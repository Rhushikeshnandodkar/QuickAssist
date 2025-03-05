import styled from "styled-components"

export const RegisterStyle = styled.div`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        body {
            background-color: #f5f5f5;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            width: 80%;
            margin: 5% auto;
            height: 100%;
            // max-width: 1200px;
            padding: 20px;
        }

        .auth-container {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            display: flex;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .image-section {
            flex: 1;
            background: #f8f9fa;
            padding: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .image-section img {
            max-width: 100%;
            height: auto;
        }

        .form-section {
            flex: 1;
            padding: 60px;
            display: flex;
            flex-direction: column;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 8px;
            color: #000;
        }

        .subtitle {
            color: #666;
            margin-bottom: 32px;
        }

        .auth-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        input {
            padding: 12px 16px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        input:focus {
            outline: none;
            border-color: #000;
        }

        .auth-button {
            background: #000;
            color: white;
            border: none;
            padding: 14px;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 8px;
            transition: background-color 0.3s ease;
        }

        .auth-button:hover {
            background: #333;
        }

        .switch-auth {
            margin-top: 24px;
            text-align: center;
            color: #666;
        }

        .switch-auth a {
            color: #000;
            text-decoration: none;
            font-weight: 500;
        }

        .switch-auth a:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            .auth-container {
                flex-direction: column;
            }

            .image-section {
                padding: 20px;
            }

            .form-section {
                padding: 30px;
            }
        }
`;

export const LoginStyle = styled.div`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        body {
            background-color: #f5f5f5;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            padding: 20px;
        }

        .auth-container {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            display: flex;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .image-section {
            flex: 1;
            background: #f8f9fa;
            padding: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .image-section img {
            max-width: 100%;
            height: auto;
        }

        .form-section {
            flex: 1;
            padding: 60px;
            display: flex;
            flex-direction: column;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 8px;
            color: #000;
        }

        .subtitle {
            color: #666;
            margin-bottom: 32px;
        }

        .auth-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        input {
            padding: 12px 16px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        input:focus {
            outline: none;
            border-color: #000;
        }

        .auth-button {
            background: #000;
            color: white;
            border: none;
            padding: 14px;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 8px;
            transition: background-color 0.3s ease;
        }

        .auth-button:hover {
            background: #333;
        }

        .switch-auth {
            margin-top: 24px;
            text-align: center;
            color: #666;
        }

        .switch-auth a {
            color: #000;
            text-decoration: none;
            font-weight: 500;
        }

        .switch-auth a:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            .auth-container {
                flex-direction: column;
            }

            .image-section {
                padding: 20px;
            }

            .form-section {
                padding: 30px;
            }
        }
`;
