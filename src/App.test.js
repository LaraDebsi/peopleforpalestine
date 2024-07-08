import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <a href="#stay-updated">Stay Updated</a>
          <a href="#about">About</a>
          <a href="#encampments">Encampments</a>
          <a href="#donate">Donate Now</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Take Action For Palestine!</h1>
          <p>-- Learn where to start to be on the right side of history --</p>
          <button className="learn-now">Learn Now</button>
          <img src="https://via.placeholder.com/800x400" alt="Protest" />
        </section>
      </main>
    </div>
  );
}

export default App;