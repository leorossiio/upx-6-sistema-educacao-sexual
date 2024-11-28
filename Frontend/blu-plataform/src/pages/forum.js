import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/navbar';
import '../styles/forum.css';
import LoginImage from '../assets/user-square.svg';
import API_BASE_URL from '../apiConfig';
import { AuthContext } from '../context/AuthContext';
import Footer from "../components/Footer";

const Forum = () => {
  const { user, token } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // Pergunta selecionada para modal
  const [newPost, setNewPost] = useState({
    titulo: '',
    descricao: 'Saúde',
  });
  const [newResponse, setNewResponse] = useState(''); // Nova resposta
  const [filteredSection, setFilteredSection] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal

  // Carregar postagens do backend
  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/perguntas`);
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error('Erro ao carregar posts:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    }
  };

  // Carregar respostas de uma pergunta
  const fetchResponses = async (postId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/respostas/pergunta/${postId}`);
      if (response.ok) {
        const data = await response.json();
        setSelectedPost((prevPost) => ({ ...prevPost, respostas: data }));
      } else {
        console.error('Erro ao carregar respostas:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao carregar respostas:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Manipular mudanças nos campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  // Adicionar uma nova postagem
  const addNewPost = async () => {
    if (!token) {
      alert('Você precisa estar logado para postar.');
      return;
    }

    try {
      const postBody = {
        titulo: newPost.titulo,
        descricao: newPost.descricao,
      };

      const response = await fetch(`${API_BASE_URL}/perguntas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postBody),
      });

      if (response.ok) {
        fetchPosts();
        setNewPost({ titulo: '', descricao: 'Saúde' });
      } else {
        const errorData = await response.json();
        console.error('Erro ao adicionar post:', errorData.message);
        alert(errorData.message || 'Erro ao adicionar post');
      }
    } catch (error) {
      console.error('Erro ao adicionar post:', error);
      alert('Erro ao adicionar post');
    }
  };

  // Adicionar uma nova resposta
  const addNewResponse = async () => {
    if (!token) {
      alert('Você precisa estar logado para responder.');
      return;
    }

    try {
      const responseBody = {
        conteudo: newResponse,
        pergunta: selectedPost._id,
      };

      const response = await fetch(`${API_BASE_URL}/respostas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(responseBody),
      });

      if (response.ok) {
        fetchResponses(selectedPost._id); // Atualiza respostas
        setNewResponse('');
      } else {
        const errorData = await response.json();
        console.error('Erro ao adicionar resposta:', errorData.message);
        alert(errorData.message || 'Erro ao adicionar resposta');
      }
    } catch (error) {
      console.error('Erro ao adicionar resposta:', error);
      alert('Erro ao adicionar resposta');
    }
  };

  // Filtrar postagens conforme as opções de filtro e pesquisa
  const filteredPosts = posts.filter(
    (post) =>
      (filteredSection === 'Todas' || post.descricao === filteredSection) &&
      ((post.titulo &&
        post.titulo.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.author &&
          post.author.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="forum-page">
      <Navbar />

      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="forum-container">
        <div className="filter-bar">
          <h3>Filtrar</h3>
          <button className="button-19" onClick={() => setFilteredSection('Todas')}>
            Todas
          </button>
          <button className="button-19" onClick={() => setFilteredSection('Saúde')}>
            Saúde
          </button>
          <button className="button-19" onClick={() => setFilteredSection('Sexualidade')}>
            Sexualidade
          </button>
          <button className="button-19" onClick={() => setFilteredSection('Gênero')}>
            Gênero
          </button>

          <input
            type="text"
            placeholder="Pesquisar posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </div>

        <div className="add-post-bar">
          <textarea
            name="titulo"
            value={newPost.titulo}
            onChange={handleInputChange}
            placeholder="Digite sua pergunta..."
            className="input-title"
          ></textarea>
          <select
            name="descricao"
            value={newPost.descricao}
            onChange={handleInputChange}
            className="hvr-grow"
          >
            <option value="Saúde">Saúde</option>
            <option value="Sexualidade">Sexualidade</option>
            <option value="Gênero">Gênero</option>
          </select>
          <button className="button-19" onClick={addNewPost}>
            POSTAR
          </button>
        </div>

        <div className="forum-posts-container">
          {filteredPosts.map((post) => (
            <div key={post._id} className="forum-post">
              <div className="post-header">
                <img src={LoginImage} alt="Avatar" className="avatar" />
                <div className="post-info">
                  <h3 className="author">{post.author || 'Desconhecido'}</h3>
                  <span className="role">{post.role || 'Usuário'}</span>
                </div>
                <div className="tags">
                  <span className="tag">{post.descricao || 'Geral'}</span>
                </div>
              </div>
              <p className="post-content">{post.titulo || 'Sem conteúdo'}</p>
              <div className="post-footer">
                <button
                  className="button-19"
                  onClick={() => {
                    setSelectedPost(post);
                    fetchResponses(post._id);
                    setIsModalOpen(true);
                  }}
                >
                  Responder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedPost && (
      <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={() => setIsModalOpen(false)}>
            &times;
          </button>
          <div className="post-header">
            <span className="tag">{selectedPost.descricao}</span>
            <div className="filter-bar-answer question">{selectedPost.titulo}</div>
          </div>
          <div className="responses">
            <div className="forum-answer-title"></div>
            {selectedPost.respostas?.map((resposta, index) => (
              <div key={index} className="response-card">
                <div className="response-header">
                  <img src={LoginImage} alt="Avatar" className="avatar" />
                  <span className="response-author">Usuário</span>
                </div>
                <p className="response-content">{resposta.conteudo}</p>
              </div>
            ))}
          </div>
          <div className="answer-text">
            <textarea
              value={newResponse}
              onChange={(e) => setNewResponse(e.target.value)}
              placeholder="Digite sua resposta..."
              className="input-area"
            ></textarea>
          </div>
            <button className="button-19" onClick={addNewResponse}>
              Enviar
            </button>
          </div>
        </div>
      )}
      <div style={{ height: "20px", background: "transparent" }}></div>
      <Footer />
    </div>
  );
};

export default Forum;

