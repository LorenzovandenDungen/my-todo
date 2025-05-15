function TodoList({ todos, onChangeToDo, onDeleteToDo, onClearCompleted }) {
  const completedCount = todos.filter(todo => todo.done).length;

  return (
    <div>
      {/* Teller */}
      <div className="text-xs text-neutral-400 mb-2">
        {completedCount} van {todos.length} taken voltooid
      </div>

      {/* Lege lijst melding */}
      {todos.length === 0 && (
        <p className="text-neutral-500 text-center mt-6">
          Je hebt nog geen taken 🎉
        </p>
      )}

      {/* Verwijder voltooide taken knop */}
      {todos.some(todo => todo.done) && (
        <button
          className="mb-4 px-3 py-1 bg-neutral-800 rounded hover:bg-neutral-700 text-xs text-white"
          onClick={onClearCompleted}
        >
          Verwijder voltooide taken
        </button>
      )}

      {/* De todo's zelf */}
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between px-0 py-2 border-b border-neutral-800 last:border-0"
          >
            {/* Linkerzijde: details */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
              <span className={todo.done ? "line-through text-neutral-500" : ""}>
                {todo.title}
              </span>
              {/* Datum, tijd en locatie */}
              {todo.date && (
                <span className="text-xs text-neutral-400 ml-2">{todo.date}</span>
              )}
              {todo.time && (
                <span className="text-xs text-neutral-400 ml-2">{todo.time}</span>
              )}
              {todo.location && (
                <span className="text-xs text-neutral-400 ml-2">{todo.location}</span>
              )}
            </div>
            {/* Rechterzijde: checkbox en delete */}
            <div className="flex items-center gap-2 ml-2">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onChangeToDo({ ...todo, done: !todo.done })}
                className="h-4 w-4"
              />
              <button
                className="text-xs px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white"
                onClick={() => onDeleteToDo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
