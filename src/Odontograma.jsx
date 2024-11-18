import React from "react";
import Diente from "./Diente";
import "./Odontograma.css";

const Odontograma = () => {
  return (
    <div className="odontograma">
      {/* Fila 1 con 16 columnas */}
      <div className="fila">
        {[...Array(16)].map((_, index) => (
          <Diente key={`fila1-${index}`} />
        ))}
      </div>

      {/* Fila 2 con 10 columnas */}
      <div className="fila">
        {[...Array(10)].map((_, index) => (
          <Diente key={`fila2-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Odontograma;
