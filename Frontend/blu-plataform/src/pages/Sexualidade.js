import React, { useState } from 'react';
import "../styles/sexualidade.css";
import ArrowLeft from '../assets/navIcons/arrow-left.svg';
import ArrowRight from '../assets/navIcons/arrow-right.svg';
import Footer from "../components/Footer";

function Sexualidade() {

    const [selectedItem, setSelectedItem] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const importAll = (requireContext) => {
      let images = {};
      requireContext.keys().forEach((key) => {
        const fileName = key.replace('./', '').replace('.svg', '');
        images[fileName] = requireContext(key);
      });
      return images;
    };
  
    const images = importAll(require.context('../assets/generos', false, /\.svg$/));
  
    const methods = [
        {
            name: 'Homem Cisgênero',
            description: 'Pessoa que se identifica com o gênero masculino, atribuído ao nascer.',
          },
          {
            name: 'Mulher Cisgênero',
            description: 'Pessoa que se identifica com o gênero feminino, atribuído ao nascer.',
          },
          {
            name: 'Não-Binário',
            description: 'Pessoa que não se identifica exclusivamente como homem ou mulher.',
          },
          {
            name: 'Transgênero',
            description: 'Pessoa cuja identidade de gênero é diferente do gênero atribuído ao nascer.',
          },
          // Adicione outros exemplos de gêneros aqui...
      
      // Adicione os outros métodos aqui...
    ];
  
    const handlePrevious = () => {
      setSelectedItem((prev) => (prev > 0 ? prev - 1 : methods.length - 1));
    };
  
    const handleNext = () => {
      setSelectedItem((prev) => (prev < methods.length - 1 ? prev + 1 : 0));
    };
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleItemClick = (index) => {
      if (selectedItem === index) {
        openModal(); // Abre o modal somente se o item já estiver selecionado
      } else {
        setSelectedItem(index); // Apenas seleciona o item no primeiro clique
      }
    };

  return (
    <div>
      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      <div  className="sexualidade-container">
        {/* Título */}
        <h1 className="title">Sexualidade e Gênero</h1>

        {/* Seção principal */}
        <section className="main-section">
          <div className="main-content">
            <div className="main-image">
                <img className="hvr-grow"
                src={require("../assets/sexualidade/sexualidadeImg.svg").default}
                alt="Sexualidade e Gênero"
                />
            </div>
            <p className="main-description">
              A Organização Mundial da Saúde (OMS) define sexualidade como “uma energia 
              que nos motiva para encontrar amor, contato, ternura e intimidade; ela integra-se 
              no modo como sentimos, movemos, tocamos e somos tocados, é ser-se sensual 
              e ao mesmo tempo ser-se sexual. A sexualidade influencia pensamentos, 
              sentimentos, ações e interações e, por isso, influencia também a nossa saúde 
              física e mental.”
              <br></br><br></br>
              Sexualidade e gênero são conceitos profundamente interligados que moldam 
              como os indivíduos experienciam e expressam suas identidades ao longo da vida.
            </p>
          </div>
        </section>

        {/* Seção de subtópicos */}
        <section className="topics-section">
          <h2 className="subtitle">Mas afinal, o que é sexualidade?</h2>
          <div className="topics-container">
              <div className="text">
                Cada ser humano experimenta e expressa sua sexualidade ao longo da vida, moldada por diversas 
                mudanças e experiências. Essas transformações incluem o crescimento e amadurecimento do corpo, 
                as práticas e escolhas sexuais e reprodutivas, a orientação sexual, o erotismo, os laços 
                amorosos, entre outros aspectos. A maneira como expressamos nossa sexualidade hoje é diferente 
                daquela da infância e também mudará à medida que envelhecemos.
              </div>
            <div className="topic-content">
                <div className="text">
                    Diversos fatores influenciam como vivenciamos nossa sexualidade durante a vida: nossa 
                    identidade de gênero, a integridade do corpo físico, a experiência com doenças crônicas 
                    ou graves, as oportunidades de afeto e cuidados na infância, o ambiente em que crescemos 
                    – se ele foi seguro e não violento –, as relações satisfatórias de amizade e amor que tivemos, 
                    a presença de uma educação sexual mais aberta ou restritiva no ambiente familiar e o acesso a 
                    informações adequadas sobre sexualidade e seus desafios.
                </div>
                <div className="image">
                    <img className="hvr-grow"
                        src={require("../assets/sexualidade/pesquisa.svg").default}
                        alt="Ilustração de Sexualidade"
                    />
                </div>
            </div>
            <div className="text">
                Os valores e conhecimentos que temos hoje sobre sexualidade são aprendidos e construídos ao longo da vida, 
                influenciados pelo que absorvemos de cada ambiente que frequentamos desde o nascimento: a forma como somos tratados, 
                as mensagens explícitas e implícitas do meio ao nosso redor e as experiências sensoriais e emocionais que vivemos.
            </div>
            <div className="topic-content">
                <div className="image2">
                    <img className="hvr-grow"
                        src={require("../assets/sexualidade/pessoas.svg").default}
                        alt="Ilustração de Sexualidade"
                    />
                </div>
                <div className="text">
                    Portanto, limitar a definição de que a sexualidade se associa a apenas a sexo biológico e reprodução, 
                    como já previa Foucault, não exprime o que são os conceitos atuais, mais abrangentes e inclusivos. 
                    Robert Stoller, no livro Sex and Gender, introduziu a palavra gênero para criar um critério diferente do termo sexo, 
                    que estava tão somente ligado às condições biológicas.
                </div>
            </div>
            <div className="topic">
            <h2 className="subtitle">E onde o gênero entra nisso?</h2>
                <div className="text">
                    Gênero foi incluído no conceito amplo de sexualidade com mais intensidade a partir da década de 1980, estimulado pelos 
                    movimentos sociais feministas. A palavra gênero expandiu a possibilidade dos papéis sociais e a aplicabilidade na relação 
                    entre a expressão de gênero feminino e gênero masculino, reforçando a subjetividade de cada ser humano na maneira de expressar 
                    sua sexualidade.
                    <br></br><br></br>
                    Em resumo, gênero é a maneira como cada pessoa expressa seu corpo e suas ações de forma contínua, passando por mudanças ao longo da 
                    vida. Ele pode assumir várias identidades e não se limita apenas à orientação sexual, sendo também influenciado por questões emocionais.
                </div>
            </div>
            <div className="topic-content">
                <div className="text">
                    Diversos fatores influenciam como vivenciamos nossa sexualidade durante a vida: nossa 
                    identidade de gênero, a integridade do corpo físico, a experiência com doenças crônicas 
                    ou graves, as oportunidades de afeto e cuidados na infância, o ambiente em que crescemos 
                     se ele foi seguro e não violento, as relações satisfatórias de amizade e amor que tivemos, 
                    a presença de uma educação sexual mais aberta ou restritiva no ambiente familiar e o acesso a 
                    informações adequadas sobre sexualidade e seus desafios.
                </div>
                <div className="image">
                    <img className="hvr-grow"
                        src={require("../assets/sexualidade/conforto.svg").default}
                        alt="Ilustração de Sexualidade"
                    />
                </div>
            </div>
            <div className="text">
                Gênero se refere a formas de se identificar e ser identificada como homem ou como mulher. Orientação sexual se refere 
                à atração afetivossexual por alguém de algum/ns gênero/s. Uma dimensão não depende da outra, não há uma norma de orientação 
                sexual em função do gênero das pessoas, assim, nem todo homem e mulher é “naturalmente” heterossexual.
                <br></br><br></br>
            </div>
          </div>
          <div className="topic">
  <h2 className="subtitle">E quais são os gêneros? Como eles se “juntam” com a sexualidade?</h2>
  <div className="text">
    O conceito de gênero é diverso e pode variar bastante conforme a cultura, o contexto histórico e a compreensão individual. 
    Existem vários gêneros reconhecidos atualmente, que vão além do binário masculino e feminino. Alguns exemplos incluem:
  </div>

    {/* Carrossel */}
    <div className="carousel-container">
        <button className="carousel-button previous button-19" onClick={handlePrevious}>
        <img src={ArrowLeft} alt="Anterior" className="arrow-icon" />
        </button>
        <div className="carousel-wrapper">
        <div
            className="carousel-track"
            style={{
            transform: `translateX(calc(50% - ${selectedItem * 150}px - 75px))`,
            }}
        >
            {methods.map((method, index) => (
            <div
                key={index}
                className={`carousel-item ${
                index === selectedItem ? 'selected hvr-grow' : ''
                }`}
                onClick={() => handleItemClick(index)}
            >
                <img
                src={images[method.name.replace(/\s+/g, '')]}
                alt={method.name}
                className="carousel-image"
                />
                <h2>{method.name}</h2>
            </div>
            ))}
        </div>
        </div>
        <button className="carousel-button next button-19" onClick={handleNext}>
        <img src={ArrowRight} alt="Próximo" className="arrow-icon" />
        </button>
    </div>

    {/* Texto adicional */}
    <div className="text">
        Tal qual as demais pessoas, uma pessoa trans pode ser bissexual, heterossexual ou homossexual, dependendo do gênero que adota 
        e do gênero com relação ao qual se atrai afetivossexualmente: mulheres transexuais que se atraem por homens são heterossexuais, 
        tal como seus parceiros; homens transexuais que se atraem por mulheres também o são.
        <br /><br />
        Já mulheres transexuais que se atraem por outras mulheres são homossexuais, e homens transexuais que se atraem por outros 
        homens também. Não se pode esquecer, igualmente, das pessoas com orientação sexual bissexual.
        <br /><br />
        Homossexuais se sentem atraídos por pessoas do mesmo gênero, e bissexuais por pessoas de qualquer gênero, o que não se relaciona 
        com sua identidade de gênero, ou seja, não se questionam quanto a sua identidade como homens ou mulheres e ao gênero que lhes foi 
        atribuído quando nasceram, ao contrário das pessoas transexuais e travestis.
        <br /><br />
        Pessoas que se identificam com alguma das expressões da transgeneralidade enfrentam um primeiro desafio: reconhecer a si mesmas e 
        fazer decisões pessoais sobre se e quando irão se apresentar aos outros da forma como se identificam. Cada um(a) tem o seu tempo. 
        É preciso compreender que essa atitude não é simples de se tomar, nem fácil de pôr em prática, porém é necessária, para que elas 
        possam ser quem são por inteiro, entre seus amigos, na família, no trabalho, na rua.
        <br /><br />
        Escrever ou falar conforme um vocabulário reconhecido pelas pessoas representadas é essencial para valorizar a cidadania. 
        Com relação a travestis e transexuais, é comum o uso de expressões que levam a concepções errôneas sobre a vivência e os desafios 
        dessas pessoas. Reforçando: com relação a pronomes, as pessoas transgênero devem ser tratadas de acordo com o gênero com o qual se 
        identificam. Se você não está certo(a) quanto ao gênero da pessoa, pode perguntar, respeitosamente, como ela prefere ser tratada, e 
        tratá-la dessa forma.
        <br /><br />
        <br /><br />
    </div>

    {/* Modal */}
    {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
            &times;
            </button>
            <img
            src={images[methods[selectedItem].name.replace(/\s+/g, '')]}
            alt={methods[selectedItem].name}
            className="modal-image"
            />
            <h2 className="modal-title">{methods[selectedItem].name}</h2>
            <p className="modal-description">{methods[selectedItem].description}</p>
        </div>
        </div>
    )}
    </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Sexualidade;
