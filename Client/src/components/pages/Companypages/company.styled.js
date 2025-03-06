import styled from "styled-components"

export const CompanyFormStyle = styled.div`

        .auth-button{
            background-color : black;
            color : white;
            width: 100%;
        }
        .main-content {
            margin-left: 250px;
            padding: 30px;
        }

        .form-container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .form-header {
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 20px;
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
            padding: 10px;
            border: 1px solid #d2cece;
            border-radius: 5px;
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

        .btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 12px 24px;
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