import React from 'react';
import '../styles/login.css';
import LoginImage from '../assets/loginImg.svg'; // Importando a imagem
import homeIcon from '../assets/navIcons/home.svg';
import infoIcon from '../assets/navIcons/info-circle.svg';
import sexualidadeIcon from '../assets/navIcons/sexualidadeIcon.svg';
import locationIcon from '../assets/navIcons/location.svg';
import forumIcon from '../assets/navIcons/device-message.svg';
import '../styles/particles.scss'; // Importa o SCSS das partículas
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap" rel="stylesheet"></link>

function Login() {
  return (
    <div className="login-page">
      {/* Contêiner de partículas para cobrir toda a tela */}
      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Navegação e conteúdo de login */}
      <div className="login-container">
        <nav>
          <ul>
            <li><a href="#"><img className="nav-icon" src={homeIcon} alt="inicioIcon" /><span className="nav-item">Início</span></a></li>
            <li><a href="#"><img className="nav-icon" src={infoIcon} alt="infoIcon" /><span className="nav-item">Sobre nós</span></a></li>
            <li><a href="#"><img className="nav-icon" src={sexualidadeIcon} alt="sexualidadeIcon" /><span className="nav-item">Sexualidade e Gênero</span></a></li>
            <li><a href="#"><img className="nav-icon" src={locationIcon} alt="locationIcon" /><span className="nav-item">Pontos de Coleta</span></a></li>
            <li><a href="#"><img className="nav-icon" src={forumIcon} alt="contatoIcon" /><span className="nav-item">Nosso Fórum</span></a></li>
          </ul>
        </nav>

        <div className="login-form">
          <div className="hvr-grow">
            <h1>Faça Login</h1>
            <p>e transforme sua relação com sua saúde íntima.</p>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="" />
          </div>

          <button className="hvr-grow">Acessar</button>
        </div>

        <div className="login-image hvr-grow">
          <img src={LoginImage} alt="Login Visual" />
        </div>
      </div>
    </div>
  );
}

export default Login;


