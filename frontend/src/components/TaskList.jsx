import TaskCard from "./TaskCard.jsx";
import styles from "./TaskList.module.css";

export default function TaskList({ taskuri, onToggle, onDelete }) {
  if (taskuri.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există niciun element.
      </p>
    );
  }
  return (
    <ul className={styles.list}>
      {taskuri.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}