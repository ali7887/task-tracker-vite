import { useState } from "react";

function TaskItem({ task, toggleTask, deleteTask, updateTaskText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  // Finish editing
  const handleBlur = () => {
    setIsEditing(false);
    if (text.trim() && text !== task.text) updateTaskText(task.id, text);
  };

  return (
    <li className="flex justify-between items-center mb-2 p-2 border rounded">
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          className="border p-1 rounded flex-1"
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          onClick={() => toggleTask(task.id)}
          className={`cursor-pointer flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}
        >
          {task.text}
        </span>
      )}

      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded ml-2 hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
