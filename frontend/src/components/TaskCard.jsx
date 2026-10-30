const ETICHETE_TAG = { usor: "uşor", mediu: "mediu", expert: "expert" };

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className={task.stare === "vândut" ? "task-card done" : "task-card"}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={task.stare === "vândut"}
          onChange={() => onToggle(task.id)}
        />
        <div className="task-info">
          <h3>{task.titlu}</h3>
          <span className={`badge badge-${task.tag}`}>
            Nivel: {ETICHETE_TAG[task.tag]}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(task.id)}
        aria-label={`Șterge ${task.titlu}`}
      >
        Șterge
      </button>
    </div>
  );
}