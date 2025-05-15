import { useState } from "react";

function AddTodo({ onAddToDo }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {title.length === 0 && <small> Type a task to add</small>}
      <button
        onClick={() => {
          setTitle("");
          onAddToDo(title);
        }}
        disabled={title.length === 0}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTodo;