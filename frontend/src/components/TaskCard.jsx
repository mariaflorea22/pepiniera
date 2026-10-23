const ETICHETE_TAG = { usor: "uşor", mediu: "mediu", expert: "expert" };

export default function TaskCard({ task }) {
  return (
    <div className={task.stare === "vândut" ? "task-card done" : "task-card"}>
      <div className="task-info">
        <h3>{task.titlu}</h3>
        <span className={`badge badge-${task.tag}`}>
          Nivel: {ETICHETE_TAG[task.tag]}
        </span>
      </div>
      <span className="status">{task.stare === "vândut" ? "Vândut" : "Disponibil"}</span>
    </div>
  );
}