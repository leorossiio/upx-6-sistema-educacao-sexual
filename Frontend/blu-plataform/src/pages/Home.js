import React from "react";
import "../styles/home.css"; // Estilos adicionais específicos da home
import "../styles/particles.scss"; // Reutiliza o estilo de partículas
import PostImage from "../assets/illustrations/girl.svg";
import Post2Image from "../assets/illustrations/Group.svg";
import FixedLogo from "../components/FixedLogo"; // Importa o logo fixo do canto inferior direito

const Home = () => {
  const handlePostClick = () => {
    window.location.href = "/post1"; // Redireciona para a página do post
  };

  return (
    <div className="home-container">
      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="welcome-container">
        <div className="welcome">
          <div className="welcome-content">
            <h2 className="welcome-title">Bem-vindo(a/e)!</h2>
            <p className="welcome-description">
              Seu espaço de apoio e conhecimento.
            </p>
          </div>
        </div>
      </div>

      {/* Primeira postagem */}
      <div className="post-container">
        <div className="post">
          <img src={PostImage} alt="Ilustração do Post" className="post-image" />
          <div className="post-content">
            <h2 className="post-title">Xiii, será que engravidei?</h2>
            <p className="post-description">
              Esqueceu de tomar a pílula? A camisinha estourou? Essas situações, além de comuns, 
              podem trazer muita ansiedade e levantar várias perguntas. Mesmo com acesso a informações 
              e métodos contraceptivos, o tema ainda é cercado por dúvidas.
            </p>
            <button className="b1 button-19" onClick={handlePostClick}>
              SABER MAIS
            </button>
          </div>
        </div>
      </div>
      
      <div className="post-container">
        <div className="post-2">
          <div className="post-content">
            <h2 className="post-title">Proteção e Curtição!</h2>
            <p className="post-description">
              Não precisa se esconder. Aprenda a curtir sem preocupação e culpa, conhecendo seu corpo!
            </p>
            <button className="b1 button-19" onClick={handlePostClick}>
              DESCUBRA
            </button>
          </div>
          <img src={Post2Image} alt="Ilustração do Post" className="post-image" />
        </div>
      </div>

      {/* Logo fixo no canto inferior direito */}
      <FixedLogo />
    </div>
  );
};

export default Home;
