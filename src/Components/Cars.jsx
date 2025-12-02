import React from "react";

export default function Cars({ listaAut }) {
  return (
    <div className="cars-grid">
      {listaAut.map(([brand, model, imgName]) => (
        <div className="car-card" key={brand + model}>
          {}
          <div className="img-wrap">
            <img
              src={`/cars/${imgName}.jpg`}
              alt={model}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent) parent.classList.add("no-img");
              }}
            />
            <div className="no-img-fallback" aria-hidden="true">
              {brand[0]}
            </div>
          </div>

          <div className="car-info">
            <strong>{brand}</strong>
            <div className="model">{model}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
