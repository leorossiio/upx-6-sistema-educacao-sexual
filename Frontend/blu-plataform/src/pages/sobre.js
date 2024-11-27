import React from "react";
import "../styles/sobre.css"; // Estilo específico para a página Sobre
import "../styles/particles.scss"; // Partículas reutilizadas
import FixedLogo from "../components/FixedLogo"; // Importa o logo fixo no canto inferior direito

const Sobre = () => {
  const handleContactClick = () => {
    window.location.href = "/contato"; // Redireciona para a página de contato
  };

  return (
    <div>
      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      <div className="sobre-container">
        {/* Seção com a onda e o título */}
        <div className="wave-section">
          <h1 className="sobre-title">Sobre Nós</h1>
        </div>

        {/* Texto explicativo */}
        <div className="sobre-text">
          <p>
            O projeto BLU foi criado para promover a saúde íntima e fornecer
            informações acessíveis e inclusivas. Queremos criar um espaço
            seguro, onde todos possam aprender e se sentir acolhidos,
            independentemente de gênero, orientação ou contexto social.
          </p>
        </div>

        {/* Trecho para contato */}
        <div className="contact-section">
            <br></br>
          <p className="contact-text">
            Não se sentiu incluído? Nos diga como podemos melhorar!
          </p>
          <button
            className="button-19 contact-button"
            onClick={handleContactClick}
          >
            Entrar em Contato
          </button>
        </div>

        {/* Logo fixo no canto inferior direito */}
        <FixedLogo />
      </div>
    </div>
  );
};

export default Sobre;
