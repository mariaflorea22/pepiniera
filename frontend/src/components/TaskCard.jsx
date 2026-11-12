const ETICHETE_PRIORITATE = { mica: "mică", medie: "medie", mare: "mare" };

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <li className={task.gata ? "task-card done" : "task-card"} data-testid="item" data-id={task.id}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={task.gata}
          onChange={() => onToggle(task.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{task.titlu}</h3>
          <span className={`badge badge-${task.prioritate}`}>
            Dificultate {ETICHETE_PRIORITATE[task.prioritate]}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(task.id)}
        aria-label={`Șterge ${task.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}