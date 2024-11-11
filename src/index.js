import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pizzaData } from './data.js';

function Header() {
  return (
    <header>
      <h1>MYU'S PIZZA CO.</h1>
      <h2>OUR MENU</h2>
      <p>Authentic Italian cuisine, all from our stone oven</p>
    </header>
  );
}

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a pizza..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

function Pizza({ name, ingredients, price, imageUrl, isFavorite, onFavoriteToggle }) {
  return (
    <div className="pizza">
      <img src={imageUrl} alt={name} />
      <div className="pizza-details">
        <h3>{name}</h3>
        <p className="ingredients">{ingredients}</p>
        <button className={`favorite-button ${isFavorite ? 'active' : ''}`} onClick={onFavoriteToggle}>
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <p className="price">${price}</p>
    </div>
  );
}

function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleFavoriteToggle = (name) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(name)
        ? prevFavorites.filter((favorite) => favorite !== name)
        : [...prevFavorites, name]
    );
  };

  const filteredPizzas = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchTerm) ||
    pizza.ingredients.toLowerCase().includes(searchTerm)
  );

  return (
    <section>
      <SearchBar onSearch={handleSearch} />
      <div className="menu">
        {filteredPizzas.map((pizza, index) => (
          <Pizza
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            imageUrl={pizza.imageUrl}
            isFavorite={favorites.includes(pizza.name)}
            onFavoriteToggle={() => handleFavoriteToggle(pizza.name)}
          />
        ))}
      </div>
    </section>
  );
}

function Order() {
  return (
    <div>
      <p>We're currently open</p>
      <button>Order</button>
    </div>
  );
}

function Footer({ isOpen }) {
  return (
    <footer>
      {isOpen ? <Order /> : <p>Sorry, we're closed</p>}
    </footer>
  );
}

function App() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <div>
      <Header />
      <Menu />
      <Footer isOpen={isOpen} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
