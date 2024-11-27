import React, { useState } from 'react';
import Navbar from '../components/navbar'; // Importando o componente Navbar
import '../styles/cadastro.css';
import '../styles/navbar.css';
import CadastroImage from '../assets/cadastroImg.svg';
import API_BASE_URL from '../apiConfig';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/users/cadastroUsuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.mensagem); // Mensagem de sucesso
      } else {
        alert(data.mensagem || 'Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
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

      <div className="cadastro-container">
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

        <div className="cadastro-image">
          <img src={CadastroImage} alt="Cadastro Visual" className="hvr-grow" />
        </div>
      </div>
    </div>
  );
}

export default Cadastro;

