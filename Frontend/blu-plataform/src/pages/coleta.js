import React, { useState } from "react";
import "../styles/coleta.css";
import "../styles/particles.scss";
import MapIcon from "../assets/coleta/Localização.svg"; // Substitua pelo caminho correto do ícone
import Footer from "../components/Footer";

const Coleta = () => {
  const ubsData = {
    Sorocaba: [
      { name: "UBS Centro", address: "Rua São Bento, 123 - Centro" },
      { name: "UBS Jardim Simus", address: "Av. Américo Figueiredo, 456 - Jardim Simus" },
      { name: "UBS Éden", address: "Rua Salvador Leite Marques, 789 - Éden" },
      { name: "UBS Ana Paula Eleutério", address: "Rua José Antonio Ferreira, 1011 - Ana Paula Eleutério" },
      { name: "UBS Vitória Régia", address: "Rua João Ribeiro de Barros, 1213 - Vitória Régia" },
    ],
  };

  const [selectedCity, setSelectedCity] = useState("Sorocaba");

  // Lista de UBS para a cidade selecionada
  const ubsList = ubsData[selectedCity] || [];

  return (
    <div>
      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      <div className="coleta-container">
        <div className="content">
          <img src={MapIcon} alt="Ícone do mapa" className="icon hvr-grow" />
          <div className="texto">
            <h1 className="title">Pontos de Coleta</h1>
            <p className="subtitle">Saiba onde coletar absorventes e preservativos</p>
          </div>
        </div>

        {/* Filtro de Cidade */}
        <div className="filter-container">
          <label htmlFor="city-filter" className="filter-label ubs-name">
            Cidade:
          </label>
          <select
            id="city-filter"
            className="city-filter"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {Object.keys(ubsData).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Lista de UBS */}
        <div className="ubs-container">
          {ubsList.map((ubs, index) => (
            <div key={index} className="ubs-card">
              <h3 className="ubs-name">{ubs.name}</h3>
              <p className="ubs-address">{ubs.address}</p>
            </div>
          ))}
        </div>
        <br></br><br></br>
      </div>
      <Footer />
    </div>
  );
};

export default Coleta;
