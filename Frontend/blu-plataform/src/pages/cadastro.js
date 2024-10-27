import React from 'react';
import '../styles/cadastro.css';
import CadastroImage from '../assets/cadastroImg.svg'; // Importando a imagem
import homeIcon from '../assets/navIcons/home.svg';
import infoIcon from '../assets/navIcons/info-circle.svg';
import sexualidadeIcon from '../assets/navIcons/sexualidadeIcon.svg';
import locationIcon from '../assets/navIcons/location.svg';
import forumIcon from '../assets/navIcons/device-message.svg';
import '../styles/particles.scss'; // Importa o SCSS das partículas
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap" rel="stylesheet"></link>

function Cadastro() {
  return (
    <div className='cadastro-page'>
        {/* Contêiner de partículas para cobrir toda a tela */}
        <div id="particle-container">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="particle"></div>
          ))}
    </div>

    {/* Navegação e conteúdo de login */}
    <nav>
      <ul>
        <li><a href="#"><img className="nav-icon" src={homeIcon} alt="inicioIcon" /><span className="nav-item">Início</span></a></li>
        <li><a href="#"><img className="nav-icon" src={infoIcon} alt="infoIcon" /><span className="nav-item">Sobre nós</span></a></li>
        <li><a href="#"><img className="nav-icon" src={sexualidadeIcon} alt="sexualidadeIcon" /><span className="nav-item">Sexualidade e Gênero</span></a></li>
        <li><a href="#"><img className="nav-icon" src={locationIcon} alt="locationIcon" /><span className="nav-item">Pontos de Coleta</span></a></li>
        <li><a href="#"><img className="nav-icon" src={forumIcon} alt="contatoIcon" /><span className="nav-item">Nosso Fórum</span></a></li>
      </ul>
    </nav>

    <div className="cadastro-container">
      <div className="cadastro-card">
        <h2 className='hvr-grow'>CADASTRO</h2>
        <form>

            <div className="form-group">
                <label>Nome de Usuário</label>
                <input type="text" placeholder="" />
            </div>  

            <div className="form-group">
                <label>E-mail</label>
                <input type="email" placeholder="" />
            </div>

            <div className="form-group">
                <label>Senha</label>
                <input type="password" placeholder="" />
            </div>

            <div className="form-group">
                <label>Confirme a Senha</label>
                <input type="password" placeholder="" />
            </div>

          <button type="submit" className='hvr-grow'>Cadastrar</button>
        </form>
      </div>

      <div className="cadastro-image">
        <img src={CadastroImage} alt="Cadastro Visual" className='hvr-grow'/>
      </div>
    </div>
  </div>
  );
}

export default Cadastro;
