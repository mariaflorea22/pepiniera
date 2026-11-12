import { useEffect, useState } from "react";
import TaskList from "./components/TaskList.jsx";
import { fetchTasks } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [taskuri, setTaskuri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchTasks();
        if (!ignore) setTaskuri(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

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

          {loading && <p className="info">Se încarcă...</p>}

          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}

          {!loading && !error && (
            <TaskList taskuri={taskuri} onToggle={handleToggle} onDelete={handleDelete} />
          )}
        </section>
      </main>
    </>
  );
}