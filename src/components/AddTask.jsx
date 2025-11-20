import { useState } from "react";

function AddTask({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add new task..."
        className="border p-2 mr-2 flex-1 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}
export default AddTask;
