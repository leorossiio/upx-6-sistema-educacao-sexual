// src/components/Particles.js

import React from 'react';
import '../styles/particles.scss'; // Importa o arquivo SCSS

const Particles = () => {
  return (
    <div id="particle-container">
      {/* Renderiza 30 divs com a classe particle */}
      {Array.from({ length: 30 }, (_, i) => (
        <div key={i} className="particle"></div>
      ))}
    </div>
  );
};

export default Particles;
