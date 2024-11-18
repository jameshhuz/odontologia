import React from "react";
import Odontograma from "./Odontograma";
import Seleccionador from "./Seleccionador";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Odontograma</h1>
      <Odontograma />
      <h2>Seleccionador de Figuras</h2>
      <Seleccionador />
    </div>
  );
}

export default App;
