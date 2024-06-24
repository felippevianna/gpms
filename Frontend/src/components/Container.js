import React from 'react';
import '../styles/Container.css';

const Container = ({ children }) => {
  return (
    <div className="center-container">
      {children}
    </div>
  );
};

export default Container;