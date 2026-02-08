import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center">
        ¡Hola Tailwind + daisyUI!
      </h1>
      <div className="flex gap-4 mt-6 justify-center">
        <button className="btn btn-primary">Botón Principal</button>
        <button className="btn btn-secondary">Botón Secundario</button>
        <button className="btn btn-accent btn-outline">Botón Accent</button>
      </div>
    </div>
  );
}
export default App;
