import ToDoItem from './ToDoItem';

function ToDoList({ todos, onChangeToDo, onDeleteToDo, onClearCompleted }) {
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

      {/* De todo's zelf, elk in een eigen card */}
      <ul className="mt-8 flex flex-col gap-6">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`
        bg-neutral-900 
        rounded-2xl 
        shadow-lg 
        px-6 py-4 
        flex items-center justify-between
        border border-white
        transition-all
        hover:border-blue-600
        hover:shadow-2xl
      `}
          >
            {/* Linkerzijde: details */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <span className={`font-medium text-base truncate ${todo.done ? "line-through text-neutral-500" : "text-white"}`}>
                {todo.title}
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                {todo.date && (
                  <span className="text-xs text-neutral-400">{todo.date}</span>
                )}
                {todo.time && (
                  <span className="text-xs text-neutral-400">{todo.time}</span>
                )}
                {todo.location && (
                  <span className="text-xs text-neutral-400">{todo.location}</span>
                )}
              </div>
            </div>
            {/* Rechterzijde: acties */}
            <div className="flex items-center gap-3 ml-6 flex-shrink-0">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onChangeToDo({ ...todo, done: !todo.done })}
                className="h-5 w-5 accent-blue-600"
              />
              <button
                className="text-xs px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow"
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

export default ToDoList;
