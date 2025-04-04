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
            margin: 3% auto;
            /* max-width: 1200px; */
            padding: 20px;
        }

        .auth-container {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            display: flex;
            /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
            border: 1px solid #8080803b;
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
       

        
        .container-main {
            /* font-family: 'Poppins', sans-serif; */
            min-height: 100vh;
            overflow-x: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            /* background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'); */
            background-size: cover;
            background-position: center;
            position: relative;
        }
        
        .container-main::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            /* background: linear-gradient(135deg, rgba(42, 47, 79, 0.9), rgba(46, 139, 192, 0.8)); */
            z-index: 1;
        }
           .login-container {
            width: 100%;
            max-width: 500px;
            position: relative;
            z-index: 2;
            display: flex;
        }
        
        .login-card {
            width: 100%;
            background-color: var(--white);
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            padding: 40px;
            position: relative;
            overflow: hidden;
        }
        .byvBev .btn{
            background-color: #232746;
        }
        .login-card::before {
            content: '';
            position: absolute;
            top: -100px;
            left: -100px;
            width: 250px;
            height: 250px;
            border-radius: 50%;
            background-color: rgba(42, 47, 79, 0.05);
            z-index: -1;
        }
        
        .login-card::after {
            content: '';
            position: absolute;
            bottom: -100px;
            right: -100px;
            width: 250px;
            height: 250px;
            border-radius: 50%;
            background-color: rgba(46, 139, 192, 0.05);
            z-index: -1;
        }
        
        .login-logo {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .login-logo h1 {
            color: var(--primary);
            font-weight: 700;
            font-size: 28px;
            letter-spacing: 0.5px;
        }
        
        .login-logo p {
            color: var(--secondary);
            margin-top: 10px;
            font-size: 14px;
            letter-spacing: 0.2px;
        }
        
        .login-heading {
            font-size: 24px;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 10px;
        }
        
        .login-subheading {
            color: #666;
            font-size: 14px;
            margin-bottom: 25px;
        }
        
        .form-group {
            margin-bottom: 20px;
            position: relative;
        }
        
        .form-group.focused label {
            transform: translateY(-20px);
            font-size: 12px;
            color: var(--secondary);
        }
        
        label {
            position: absolute;
            left: 15px;
            top: 13px;
            font-size: 14px;
            color: #888;
            transition: var(--transition);
            pointer-events: none;
        }
        
        input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #DDD;
            margin-bottom: 15px;
            border-radius: 10px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            transition: var(--transition);
            background-color: #F9FAFC;
        }
        
        input:focus {
            outline: none;
            border-color: var(--secondary);
            box-shadow: 0 0 0 3px rgba(46, 139, 192, 0.1);
            background-color: var(--white);
        }
        
        .password-toggle {
            position: absolute;
            right: 15px;
            top: 13px;
            color: #888;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .password-toggle:hover {
            color: var(--primary);
        }
        
        .remember-forgot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            font-size: 13px;
        }
        
        .remember-me {
            display: flex;
            align-items: center;
        }
        
        .remember-me input {
            width: auto;
            margin-right: 8px;
        }
        
        .forgot-password {
            color: var(--secondary);
            text-decoration: none;
            transition: var(--transition);
        }
        
        .forgot-password:hover {
            color: var(--primary);
            text-decoration: underline;
        }
        
        .btn {
            display: block;
            width: 100%;
            padding: 14px;
            background-color: #232746;
            color: white;
            border: none;
            border-radius: 10px;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            position: relative;
            overflow: hidden;
            z-index: 1;
        }
        
        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: var(--transition);
            z-index: -1;
        }
        
        .btn:hover {
            background-color: #232746;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(42, 47, 79, 0.2);
        }
        
        .btn:hover::before {
            left: 100%;
            transition: 0.7s;
        }
        
        .social-login {
            display: flex;
            gap: 15px;
            margin-top: 25px;
        }
        
        .social-btn {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            border-radius: 8px;
            background-color: var(--white);
            border: 1px solid #EEE;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .social-btn:hover {
            background-color: #F9FAFC;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        
        .social-btn img {
            width: 20px;
            height: 20px;
        }
        
        .divider {
            display: flex;
            align-items: center;
            margin: 25px 0;
            color: #AAA;
            font-size: 13px;
        }
        
        .divider::before,
        .divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background-color: #EEE;
        }
        
        .divider::before {
            margin-right: 10px;
        }
        
        .divider::after {
            margin-left: 10px;
        }
        
        .login-footer {
            text-align: center;
            margin-top: 25px;
            font-size: 14px;
        }
        
        .login-footer a {
            color: var(--secondary);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
        }
        
        .login-footer a:hover {
            color: var(--primary);
        }
        
        .floating-circle {
            position: absolute;
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            opacity: 0.1;
        }
        
        .circle-1 {
            top: -80px;
            right: -80px;
            width: 160px;
            height: 160px;
        }
        
        .circle-2 {
            bottom: -10px;
            left: -10px;
            width: 120px;
            height: 120px;
            animation-delay: 1s;
        }
        
        .circle-3 {
            top: 50%;
            right: -30px;
            width: 60px;
            height: 60px;
            animation-delay: 2s;
        }
        
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(5deg);
            }
            100% {
                transform: translateY(0) rotate(0deg);
            }
        }
        
        @media (max-width: 480px) {
            .login-container {
                padding: 20px;
                max-width: 100%;
            }
            
            .login-card {
                padding: 30px 20px;
            }
            
            .social-login {
                flex-direction: column;
            }
        }
`;
