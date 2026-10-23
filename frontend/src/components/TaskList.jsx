import TaskCard from "./TaskCard.jsx";

export default function TaskList({ taskuri }) {
  if (taskuri.length === 0) {
    return <p className="empty">Nu există nicio plantă în catalog.</p>;
  }

  return (
    <div className="task-list">
      {taskuri.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}