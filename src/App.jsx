import React, { useState, useEffect } from "react";
import Cars from "./Components/Cars";
import ButtonMsg from "./Components/ButtonMsg";


const carsList = [
  ["Mitsubishi", "Lancer", "Lancer"],
  ["Dodge", "Charger", "Charger"],
  ["Toyota", "Supra", "Supra"],
  ["Nissan", "Skyline", "Skyline"],
  ["Ford", "Mustang", "Mustang"]
];

const quotes = [
  "Życie to nie film, ale możemy je prowadzić jak w F&F.",
  "Paliwo to tylko płyn; prawdziwy napęd to przyjaźń.",
  "Szybkość to uczucie, nie liczby.",
  "Dobrze prowadzony samochód to przedłużenie dłoni.",
  "Każda droga ma swoją historię."
];

function Header() {
  return (
    <header className="top-menu">
      <div className="top-inner">
        <h1 className="logo">Na Portlu O Fast & Furious</h1>
        <nav className="nav">
          <a href="#cars">Samochody</a>
          <a href="#quote">Hasło dnia</a>
          <a href="#present">Przedstaw się</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  const [bg, setBg] = useState("dark");
  const [quote, setQuote] = useState("");
  const [name, setName] = useState(null);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    const saved = localStorage.getItem("ff_name");
    if (saved) setName(saved);
   
  }, []);

  const randomBg = () => {
    const h = Math.floor(Math.random() * 360);
    setBg(`hsl(${h} 60% 8%)`);
  };

  const toggleTheme = () => {
    setBg(prev => (prev === "dark" ? "#fff" : "dark"));
  };

  return (
    <div className="app" style={{ background: bg === "dark" ? "#0e0e0e" : bg }}>
      <Header />

      <main className="container">
        <section className="hero section">
          <div className="hero-left">
            <p className="greeting">{name ? `Witaj ponownie, ${name}!` : "Cześć — przedstaw się!"}</p>
            <div className="controls">
              <button onClick={randomBg}>Losowe tło</button>
              <button onClick={toggleTheme}>Jasne / Ciemne</button>
            </div>
          </div>

          <div className="hero-right">
            <h2 id="quote">Hasło dnia:</h2>
            <p className="quote-text">{quote}</p>
          </div>
        </section>

        <section id="cars" className="section">
          <h2>Lista samochodów</h2>
          <Cars listaAut={carsList} />
        </section>

        <section id="present" className="section">
          <h2>Przedstaw się</h2>
          <ButtonMsg onNameChange={setName} />
        </section>

        <footer className="footer">
          <small>Projekt demo • Zmień nazwy plików zdjęć w /public/cars jeśli chcesz obrazki</small>
        </footer>
      </main>
    </div>
  );
}
