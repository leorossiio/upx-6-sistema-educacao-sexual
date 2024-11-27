import React, { useState } from 'react';
import '../styles/contraceptivos.css';
import ArrowLeft from '../assets/navIcons/arrow-left.svg';
import ArrowRight from '../assets/navIcons/arrow-right.svg';

function Contraceptivos() {
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

  const images = importAll(require.context('../assets/contraceptivos', false, /\.svg$/));

  const methods = [
    {
      name: 'Adesivo Contraceptivo',
      description: 'O adesivo contraceptivo é um método que libera hormônios pela pele para prevenir a ovulação. Ele é aplicado na pele em áreas como o braço, abdômen ou nádegas e deve ser trocado semanalmente durante três semanas, seguido de uma semana sem adesivo. O adesivo é eficaz e conveniente, pois não requer uma ingestão diária.',
      efficacy: 'Taxa de falha: Uso típico = 7%, Uso perfeito = 1%',
    },
    {
      name: 'Anel Vaginal',
      description: 'O anel vaginal é um método contraceptivo hormonal que consiste em um anel flexível inserido na vagina, onde é liberado os hormônios. Ele deve ser colocado na vagina por três semanas, seguido de uma semana sem o anel, durante a qual ocorre a menstruação. O anel é eficaz na prevenção da ovulação e é conveniente, pois não requer uma aplicação diária.',
      efficacy: 'Taxa de falha: Uso típico = 7%, Uso perfeito = 1%',
    },
    {
      name: 'Anticoncepcional',
      description: 'A pílula anticoncepcional é um método hormonal que impede a ovulação, alterando os níveis de estrogênio e progesterona no corpo da mulher. Ela deve ser tomada diariamente, no mesmo horário, para ser eficaz.',
      efficacy: 'Taxa de falha: Uso típico = 9%, Uso perfeito = 0.3%',
    },
    {
      name: 'Camisinha Masculina',
      description: 'A camisinha masculina é uma capa de látex colocada no pênis ereto antes da relação sexual, impedindo o contato do esperma com o corpo da mulher e prevenindo ISTs. Após o uso, deve ser retirada com cuidado.',
      efficacy: 'Taxa de falha: Uso típico = 13%, Uso perfeito = 3%',
    },
    {
      name: 'Diu',
      description: 'O DIU (Dispositivo Intrauterino) é um pequeno dispositivo inserido no útero para impedir a fecundação. Pode ser de cobre ou hormonal, e sua ação dura de 5 a 10 anos.',
      efficacy: 'Taxa de falha: DIU de cobre = 0,8% - DIU hormonal = 0,2%',
    },
    {
      name: 'Camisinha Feminina',
      description: 'A camisinha feminina é uma bolsa inserida na vagina antes da relação sexual, Ela atua como uma barreira, impedindo que o esperma alcance o útero e reduzindo o risco de gravidez e infecções sexualmente transmissíveis (ISTs).',
      efficacy: 'Taxa de falha: Uso perfeito = 5%',
    },
    {
      name: 'Implanon',
      description: 'O Implanon é um método contraceptivo que consiste em um pequeno bastão flexível inserido sob a pele do braço, geralmente na parte interna. Ele libera o hormônio etonogestrel, que impede a ovulação e torna o muco cervical mais espesso, dificultando a passagem do esperma. O implante pode durar até três anos e deve ser inserido e removido por um profissional de saúde.',
      efficacy: 'Taxa de falha: Menos de 1%',
    },
    {
      name: 'Injeção',
      description: 'A injeção anticoncepcional é um método contraceptivo que contém hormônios, geralmente progesterona, e é administrada por via intramuscular ou subcutânea a cada três meses. Ela atua prevenindo a ovulação, tornando o muco cervical mais espesso e alterando o revestimento do útero, o que reduz a probabilidade de gravidez.',
      efficacy: 'Taxa de falha: Menos de 1%',
    },
    {
      name: 'Pílula do dia seguinte',
      description: 'A pílula do dia seguinte é um método contraceptivo emergincial que deve ser tomado após uma relação sexual desprotegida para prevenir a gravidez. Ela contém hormônios que agem inibindo ou atrasando a ovulação, além de dificultar a fecundação. É mais eficaz quando tomada o mais rápido possível após a relação, preferencialmente dentro de 72 horas',
      efficacy: 'Taxa de falha: Uso logo após = 2% - Dentro de 72h = 15%-25%',
    },
    {
      name: 'Espermicida',
      description: 'O espermicida é um método contraceptivo que utiliza substâncias químicas para destruir/incapacitar os espermatozoides, impedindo a fecundação. Disponível em formas como gel, espuma ou supositórios, deve ser aplicado na vagina antes da relação sexual. É frequentemente combinado com outros métodos, como camisinhas.',
      efficacy: 'Taxa de falha: Uso típico = 28% - Uso perfeito = 18%',
    },
    {
      name: 'Tabelinha',
      description: 'A tabelinha, ou método do ritmo, é um método de planejamento familiar que envolve o rastreamento do ciclo menstrual para identificar os dias férteis da mulher. A ideia é evitar relações sexuais desprotegidas durante esse período para prevenir a gravidez. Para isso, a mulher deve monitorar seu ciclo menstrual por vários meses, registrando a duração e os dias em que ocorre a ovulação.',
      efficacy: 'Taxa de falha: 9%',
    },
    {
      name: 'Capuz Cervical',
      description: 'O capuz cervical é um pequeno dispositivo de silicone ou látex que se encaixa sobre o colo do útero, criando uma barreira que impede a passagem do esperma. Ele deve ser inserido na vagina antes da relação sexual e pode ser utilizado com espermicida para aumentar a eficácia. O capuz cervical pode ser deixado no lugar por até 48 horas após a relação, mas deve ser retirado para evitar infecções.',
      efficacy: 'Taxa de falha: 9%',
    },
    {
      name: 'Esponja Contraceptiva',
      description: 'A esponja contraceptiva é um método de barreira que contém espermicida e é feita de material macio e absorvente. Ela é inserida na vagina antes da relação sexual, cobrindo o colo do útero e liberando espermicida para matar ou imobilizar os espermatozoides. A esponja pode ser deixada no lugar por até 24 horas após a relação, e deve ser umedecida antes da inserção para maior eficácia.',
      efficacy: 'Taxa de falha: 9%',
    },
    {
      name: 'Laqueadura',
      description: 'A laqueadura contraceptiva é um método cirúrgico de esterilização feminina que consiste em fechar ou cortar as trompas de falópio, impedindo que os óvulos se encontrem com os espermatozoides. É considerado um método permanente de contracepção, indicado para mulheres que têm certeza de que não desejam ter mais filhos. A laqueadura pode ser realizada por diferentes técnicas, incluindo laparoscopia.',
      efficacy: 'Taxa de falha: Menos de 1%',
    },
    {
      name: 'Vasectomia',
      description: 'A vasectomia é um procedimento cirúrgico de esterilização masculina que corta e liga os canais deferentes, impedindo a liberação de espermatozoides durante a ejaculação. É um método permanente de contracepção, realizado com anestesia local e considerado seguro.',
      efficacy: 'Taxa de falha: Menos de 1%',
    },
    
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
    <div className="contraceptivos-container">
      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      <div className="white-background">
        {/* Título */}
        <h1 className="title">Anticoncepcionais</h1>
        {/* Seção SEM JULGAMENTOS */}
        <section className="no-judgment-section">
          <div className="no-judgment-content">
            <h2 className="no-judgment-title">Sem Julgamentos</h2>
            <p className="no-judgment-description">
              Aqui você tem um ambiente acolhedor e seguro, onde possibilitamos que você busque
              informações sobre prevenção à gravidez, com informações detalhadas sobre métodos
              contraceptivos, desde os mais tradicionais até os mais modernos, além de orientações sobre
              como escolher o método que melhor se adapta às suas necessidades e estilo de vida, sempre
              priorizando sua saúde e bem-estar.
              <br></br><br></br>
              <b>Role para baixo para saber mais sobre os vários tipos de métodos anticoncepcionais!</b>
            </p>
          </div>
          <div className="no-judgment-image">
            <img
              src={require('../assets/illustrations/no-judgment.svg').default}
              alt="Sem Julgamentos"
            />
          </div>
        </section>

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
            <p className="modal-efficacy">{methods[selectedItem].efficacy}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contraceptivos;

