import { useState } from "react";

function ToDoItem({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="flex items-center justify-between px-0 py-2 border-b border-neutral-800 last:border-0">
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) =>
            onChange({
              ...todo,
              done: e.target.checked,
            })
          }
        />
        {isEditing ? (
          <>
            <input
              className="rounded px-2 py-1 bg-neutral-900 text-white border border-neutral-700"
              value={todo.title}
              onChange={(e) =>
                onChange({
                  ...todo,
                  title: e.target.value,
                })
              }
            />
          </>
        ) : (
          <span className={todo.done ? "line-through text-neutral-500" : ""}>
            {todo.title}
          </span>
        )}
      </div>
      <div className="flex gap-1">
        {isEditing ? (
          <button
            className="text-xs px-2 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => setIsEditing(false)}
            disabled={todo.title.length === 0}
          >
            Save
          </button>
        ) : (
          <button
            className="text-xs px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-white"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="text-xs px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
      {todo.title.length === 0 && (
        <p className="text-xs text-red-500 ml-2">Task can't be empty.</p>
      )}
    </li>
  );
}

export default ToDoItem;