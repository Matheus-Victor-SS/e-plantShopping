import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content-overlay"></div>
        <div className="content">
          <div className="landing-content">
            <h1>Bem-vindo ao Paraíso Verde</h1>
            <div className="divider"></div>
            <p>Onde a natureza encontra seu lar</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Explorar Plantas
            </button>
          </div>
          <div className="aboutus-container">
            <AboutUs />
          </div>
        </div>
      </div>

      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick} />
      </div>
    </div>
  );
}

export default App;