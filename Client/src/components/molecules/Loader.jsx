import React from 'react';
import { LoaderStyle } from './molecule.style';
// import './Loader.css'; // We'll create this CSS file

function Loader(props) {
  return (
    <LoaderStyle>
    <div className="loader-container">
      <div className="spinner"></div>
      <h3>{props.message}</h3>
    </div>
    </LoaderStyle>
  );
}

export default Loader;
