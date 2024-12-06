import React, { useContext } from 'react';
import '../styles/navbar.css';
import userIcon from '../assets/navIcons/user.svg';
import logoutIcon from '../assets/navIcons/user-remove.svg';
import homeIcon from '../assets/navIcons/proibido.svg';
import infoIcon from '../assets/navIcons/info-circle.svg';
import sexualidadeIcon from '../assets/navIcons/sexualidadeIcon.svg';
import locationIcon from '../assets/navIcons/location.svg';
import forumIcon from '../assets/navIcons/device-message.svg';
import { AuthContext } from '../context/AuthContext'; // Importa o contexto de autenticação

function Navbar() {
  const { user, logout } = useContext(AuthContext); // Usa o contexto de autenticação

  return (
    <nav>
      <ul>
        <li>
          {user ? (
            <a>
              <img className="nav-icon" src={userIcon} alt="User Icon" />
              <span className="nav-item nav-login">{user ? `Olá, ${user.nome}` : "Login e Cadastro"}</span>
            </a>
          ) : (
            <a href="/login">
              <img className="nav-icon" src={userIcon} alt="User Icon" />
              <span className="nav-item nav-login">Login e Cadastro</span>
            </a>
          )}
        </li>
        <li>
          <a href="/sexualidade">
            <img className="nav-icon" src={sexualidadeIcon} alt="Sexualidade" />
            <span className="nav-item">Sexualidade e Gênero</span>
          </a>
        </li>
        <li>
          <a href="/contraceptivos">
            <img className="nav-icon" src={homeIcon} alt="home" />
            <span className="nav-item">Contraceptivos</span>
          </a>
        </li>
        <li>
          <a href="/coleta">
            <img className="nav-icon" src={locationIcon} alt="Pontos de Coleta" />
            <span className="nav-item">Pontos de Coleta</span>
          </a>
        </li>
        <li>
          <a href="/forum">
            <img className="nav-icon" src={forumIcon} alt="Fórum" />
            <span className="nav-item">Fórum</span>
          </a>
        </li>
        <li>
          <a href="/sobre">
            <img className="nav-icon" src={infoIcon} alt="Sobre nós" />
            <span className="nav-item">Sobre nós</span>
          </a>
        </li>
        {/* Botão de logout */}
        {user && (
          <li className="logout-section">
            <button onClick={logout} className="logout-button">
              <img className="nav-icon" src={logoutIcon} alt="Logout" />
              <span className="nav-item">Logout</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;



