import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (!tasks.length) return <p>No tasks yet!</p>;
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}
export default TaskList;
