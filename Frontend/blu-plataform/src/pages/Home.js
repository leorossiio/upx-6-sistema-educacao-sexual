import React, { useState, useEffect } from "react";
import "../styles/home.css"; // Estilos adicionais específicos da home
import "../styles/particles.scss"; // Reutiliza o estilo de partículas
import PostImage from "../assets/illustrations/girl.svg";
import Post2Image from "../assets/illustrations/Group.svg";
import Post3Image from "../assets/illustrations/pesquisa.svg";
import FixedLogo from "../components/FixedLogo"; // Importa o logo fixo do canto inferior direito
import Footer from "../components/Footer";

const Home = () => {
  const [showBalloons, setShowBalloons] = useState(true);
  const [hideBalloons, setHideBalloons] = useState(false); // Estado para ativar a animação de fade-out

  const handlePostClick = () => {
    window.location.href = "/post1"; // Redireciona para a página do post
  };

  const handleUserInteraction = () => {
    setHideBalloons(true); // Aplica a classe "hidden" para animação de fade-out
    setTimeout(() => setShowBalloons(false), 500); // Remove os balões após 500ms (tempo da animação)
  };

  useEffect(() => {
    // Adiciona listeners para clique e scroll
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    return () => {
      // Remove os listeners ao desmontar o componente
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  return (
    <div className="home-container">
      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {showBalloons && (
        <>
          <div className={`balloon post-balloon ${hideBalloons ? "hidden" : ""}`}>
            Confira as publicações em destaque!
          </div>
          <div className={`balloon navbar-balloon ${hideBalloons ? "hidden" : ""}`}>
            Ou explore o site para descobrir conteúdos feitos especialmente para você!
          </div>
        </>
      )}

      <div className="welcome-container">
        <div className="welcome">
          <div className="welcome-content">
          <h2 className="welcome-title">
            Bem-vind<span className="animated-letters"></span>!
          </h2>
            <h2 className="welcome-subtitle">Ao seu espaço de apoio e conhecimento.</h2>
            <p className="welcome-description">
              Aqui você encontra informações e suporte para lidar com saúde íntima, sexualidade e gênero, em um ambiente seguro e inclusivo.
            </p>
          </div>
        </div>
      </div>

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
            <a href="/gravidez">
              <button className="b1 button-19" onClick={handlePostClick}>
                SABER MAIS
              </button>
            </a>
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

      <div className="post-container">
        <div className="post post-3">
          <img src={Post3Image} alt="Ilustração do Post" className="post-image" />
          <div className="post-content">
            <h2 className="post-title">Desmistificação sobre IST.</h2>
            <p className="post-description">
            Isso mesmo, IST! Prevenção é nosso segundo nome, mas preconceito não! Aprenda sobre como a vida pode continuar e os 
            métodos para proteção.
            </p>
            <button className="b1 button-19" onClick={handlePostClick}>
              SABER MAIS
            </button>
          </div>
        </div>
      </div>

      {/* Logo fixo no canto inferior direito */}
      <FixedLogo />
      <div style={{ height: "20px", background: "transparent" }}></div>
      <Footer />
    </div>
  );
};

export default Home;
