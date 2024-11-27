import React, { useState, useContext } from 'react';
import Navbar from '../components/navbar'; // Importando o componente Navbar
import '../styles/login.css';
import '../styles/navbar.css';
import LoginImage from '../assets/loginImg.svg';
import API_BASE_URL from '../apiConfig';
import { AuthContext } from '../context/AuthContext'; // Importa o AuthContext

function Login() {
  const { login, isLoggedIn } = useContext(AuthContext); // Usa o contexto para login global
  const [credentials, setCredentials] = useState({ email: '', senha: '' });
  const [loading, setLoading] = useState(false); // Controla o efeito de carregamento
  const [loginSuccess, setLoginSuccess] = useState(false); // Exibição local

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Ativa o carregamento
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      setLoading(false); // Desativa o carregamento após a resposta

      if (response.ok) {
        login({ nome: data.nome }, data.token); // Atualiza o AuthContext globalmente
        setLoginSuccess(true); // Exibe mensagem localmente
      } else {
        alert(data.mensagem || 'Erro ao fazer login');
      }
    } catch (error) {
      setLoading(false); // Desativa o carregamento em caso de erro
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login');
    }
  };

  return (
    <div className="login-page">
      <Navbar /> {/* Inclui a Navbar */}

      {/* Contêiner de partículas para cobrir toda a tela */}
      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {loginSuccess && (
        <div className="login-success-message">
          <h1>Login bem-sucedido!</h1>
          <button
            type="button"
            className="button-19"
            onClick={() => (window.location.href = '/forum')} // Redireciona para o fórum
          >
            Ir ao Fórum
          </button>
        </div>
      )}

      {!loginSuccess && (
        <div className={`login-container ${loading ? 'hidden' : ''}`}>
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Carregando...</p>
            </div>
          ) : (
            <div className="login-form">
              <div>
                <h1>Faça Login</h1>
                <p>e transforme sua relação com sua saúde íntima.</p>
              </div>

              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    className="hvr-grow"
                    type="email"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    className="hvr-grow"
                    type="password"
                    id="password"
                    name="senha"
                    value={credentials.senha}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='loginoucadastro'>
                  <button type="submit" className="button-19">
                    Acessar
                  </button>
                  <h3>ou</h3>
                  <a href='/cadastro'>
                    <button type='button' className="button-19">
                      Cadastre-se
                    </button>
                  </a>
                </div>
              </form>
            </div>
          )}

          {!loading && (
            <div className="login-image hvr-grow">
              <img src={LoginImage} alt="Login Visual" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;

