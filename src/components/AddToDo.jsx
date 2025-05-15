import { useState } from "react";

function AddTodo({ onAddToDo }) {
  const [title, setTitle] = useState("");

  return (
    <div className="flex gap-2 mb-6">
      <input
        className="flex-1 rounded-md px-3 py-2 bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-blue-500"
        placeholder="Nieuwe taak..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
        onClick={() => {
          setTitle("");
          onAddToDo(title);
        }}
        disabled={title.trim() === ""}
      >
        Toevoegen
      </button>
    </div>
  );
}

export default AddTodo;