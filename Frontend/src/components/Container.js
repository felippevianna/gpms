import React from 'react';
import '../styles/Container.css'; // Importe o arquivo de estilos

const Container = ({ children }) => {
  return (
    <div className="center-container">
      {children}
    </div>
  );
};

export default Container;