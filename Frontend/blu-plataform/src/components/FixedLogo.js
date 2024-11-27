import React from 'react';
import '../styles/fixedLogo.css';
import BluLogo from '../assets/BluLogo.svg'; // Caminho fornecido

function FixedLogo() {
  return (
    <div className="fixed-logo">
      <a href='/'>
        <img src={BluLogo} alt="Logo Blu" />
      </a>
    </div>
  );
}

export default FixedLogo;
