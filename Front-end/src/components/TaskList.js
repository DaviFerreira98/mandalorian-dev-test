export default function TaskList({
  tasks,
  completeTaskHandler,
  deleteTaskHandler,
}) {
  tasks.sort((a, b) => a.completed - b.completed);
  return (
    <div>
      {tasks.map(({ label, completed, id }) => (
        <div key={id} className={`task ${completed && 'task-completa'}`}>
          <button
            className="task-completa-button"
            onClick={() => completeTaskHandler(id)}
          />
          <p className="task-nome">{label}</p>
          <button
            className="task-delete-button"
            onClick={() => deleteTaskHandler(id)}
          >
            🗑
          </button>
        </div>
      ))}
    </div>
  );
}
