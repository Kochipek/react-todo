const Task = (props) => {
  return (
    <div
      className="task"
      style={{
        backgroundColor: props.isCompleted
          ? "#5DBB63"
          : "rgba(255, 255, 255, 0.588)",
      }}
    >
      <li key={props.id}>{props.taskName}</li>
      <div className="buttons">
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button
          className="delete-button"
          onClick={() => props.deleteTask(props.id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Task;
