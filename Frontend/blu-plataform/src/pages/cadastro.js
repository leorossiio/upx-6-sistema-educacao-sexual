import React, { useState } from 'react';
import Navbar from '../components/navbar'; // Importando o componente Navbar
import '../styles/cadastro.css';
import '../styles/navbar.css';
import CadastroImage from '../assets/cadastroImg.svg';
import API_BASE_URL from '../apiConfig';
import Footer from "../components/Footer";

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
  });
  const [loading, setLoading] = useState(false); // Controle do carregamento
  const [success, setSuccess] = useState(false); // Controle da tela de sucesso

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Mostra o carregamento
    try {
      const response = await fetch(`${API_BASE_URL}/users/cadastroUsuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLoading(false); // Para o carregamento

      if (response.ok) {
        setSuccess(true); // Mostra a tela de sucesso
      } else {
        alert(data.mensagem || 'Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setLoading(false); // Para o carregamento em caso de erro
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <div className="cadastro-page">
      <Navbar /> {/* Incluindo a mesma Navbar usada no login */}

      {/* Contêiner de partículas para cobrir toda a tela */}
      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {success ? (
        <div className="cadastro-success-message">
          <h1>Cadastro realizado com sucesso!</h1>
          <button
            className="button-19"
            onClick={() => (window.location.href = '/login')} // Redireciona para login
          >
            Ir para Login
          </button>
        </div>
      ) : (
        <div className={`cadastro-container ${loading ? 'hidden' : ''}`}>
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Carregando...</p>
            </div>
          ) : (
            <div className="cadastro-card">
              <h2>Cadastro</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nome de Usuário</label>
                  <input
                    className="hvr-grow"
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    className="hvr-grow"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Senha</label>
                  <input
                    className="hvr-grow"
                    type="password"
                    name="senha"
                    value={formData.senha}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Confirme a Senha</label>
                  <input
                    className="hvr-grow"
                    type="password"
                    name="confirmacaoSenha"
                    value={formData.confirmacaoSenha}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit" className="button-19">
                  Cadastrar
                </button>
              </form>
            </div>
          )}
          <div className="cadastro-image">
            <img src={CadastroImage} alt="Cadastro Visual" className="hvr-grow" />
          </div>
        </div>
      )}
      <div style={{ height: "20px", background: "transparent" }}></div>
      <Footer />
    </div>
  );
}

export default Cadastro;
