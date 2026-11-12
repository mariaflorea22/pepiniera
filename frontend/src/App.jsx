import { useEffect, useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import { createTask, deleteTask, fetchTasks, updateTask } from "./api.js";

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

  async function handleAdd(task) {
    const creat = await createTask(task);
    setTaskuri((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const task = taskuri.find((t) => t.id === id);
    try {
      const actualizat = await updateTask(id, { gata: !task.gata });
      setTaskuri((prev) => prev.map((t) => (t.id === id ? actualizat : t)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      setTaskuri((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = taskuri.filter((t) => !t.gata).length;

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
          <h2>Adaugă plantă</h2>
          <TaskForm onAdd={handleAdd} />
        </section>
        <section className="panel">
          <h2>Plantele Mele</h2>
          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă...
            </p>
          )}
          {error && (
            <p className="error" data-testid="error">
              {error}
            </p>
          )}
          {!loading && (
            <TaskList taskuri={taskuri} onToggle={handleToggle} onDelete={handleDelete} />
          )}
        </section>
      </main>
    </>
  );
}