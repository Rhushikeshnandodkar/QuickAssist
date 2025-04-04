import React from "react";
import { Link } from "react-router-dom";
import { NotFoundPageStyle } from "./Dashboard.style";

function NotFoundPage() {
  return (
    <NotFoundPageStyle>
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/dashboard" className="back-home">
        Go Back Home
      </Link>
    </div>
    </NotFoundPageStyle>
  );
}

export default NotFoundPage;
