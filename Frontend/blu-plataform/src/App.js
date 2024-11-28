import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Forum from './pages/forum';
import Contraceptivos from './pages/Contraceptivos'; // Importa a nova página
import Sexualidade from "./pages/Sexualidade";
import Gravidez from "./pages/gravidez";
import Coleta from "./pages/coleta";
import Sobre from "./pages/sobre";
import Navbar from './components/navbar';
import FixedLogo from './components/FixedLogo'; // Importa o logo fixo
import { AuthProvider } from './context/AuthContext'; // Importa o AuthProvider

// Componente para condicionalmente renderizar o FixedLogo
const ConditionalFixedLogo = () => {
  const location = useLocation();
  return location.pathname !== '/' ? <FixedLogo /> : null; // Exibe FixedLogo se não estiver na Home
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Navbar sempre visível */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/contraceptivos" element={<Contraceptivos />} /> {/* Nova rota */}
          <Route path="/sexualidade" element={<Sexualidade />} />
          <Route path="/gravidez" element={<Gravidez />} />
          <Route path="/coleta" element={<Coleta />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <ConditionalFixedLogo /> {/* Condicionalmente adiciona o logo fixo */}
      </Router>
    </AuthProvider>
  );
}

export default App;