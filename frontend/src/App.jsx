import { useState } from "react";
import TaskList from "./components/TaskList.jsx";

const TASKURI_INITIALE = [
  { id: 1, titlu: "Ficus Retusa 12 ani", stare: "disponibil", tag: "usor" },
  { id: 2, titlu: "Pinus Thunbergii (Pin Negru Japonez)", stare: "vândut", tag: "expert" },
  { id: 3, titlu: "Acer Palmatum (Arțar Japonez)", stare: "disponibil", tag: "mediu" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [taskuri, setTaskuri] = useState(TASKURI_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setTaskuri((prev) =>
      prev.map((t) => (t.id === id ? { ...t, stare: t.stare === "disponibil" ? "vândut" : "disponibil" } : t))
    );
  }

  function handleDelete(id) {
    setTaskuri((prev) => prev.filter((t) => t.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = taskuri.filter((t) => t.stare === "disponibil").length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>Pepinieră & Magazin de Bonsai și Plante Exotice</h1>
        <p>Gestiune stoc de bonsai și exemplare exotice de pepinieră.</p>
        <p className="app-count">
          {taskuri.length} plante în catalog, dintre care {active} disponibile
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Plantele Mele</h2>
          <TaskList taskuri={taskuri} onToggle={handleToggle} onDelete={handleDelete} />
        </section>
      </main>
    </>
  );
}