import React from "react";

export default function ButtonMsg({ onNameChange }) {
  const handleSet = () => {
    const name = prompt("Jak masz na imię?");
    if (name && name.trim()) {
      localStorage.setItem("ff_name", name.trim());
      if (typeof onNameChange === "function") onNameChange(name.trim());
    }
  };

  const handleClear = () => {
    localStorage.removeItem("ff_name");
    if (typeof onNameChange === "function") onNameChange(null);
  };

  return (
    <div>
      <button onClick={handleSet}>Przedstaw się</button>
      <button onClick={handleClear} style={{ marginLeft: 10, background: "#ff4d4d" }}>Wyczyść zapis</button>
    </div>
  );
}
