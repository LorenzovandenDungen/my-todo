import ToDoItem from "./ToDoItem";

function ToDosList({ todos, onChangeToDo, onDeleteToDo }) {
  let completedTasks = 0;

  todos.map((todo) => {
    if (todo.done) {
      completedTasks = completedTasks + 1;
    }
    return completedTasks;
  });

  return (
    <>
      {todos.length === 0 ? (
        <h4>No tasks</h4>
      ) : (
        <h4>
          {completedTasks} completed
          {completedTasks === 1 ? "task" : "tasks"}
          {" "}
          out of {todos.length} {todos.length === 
          1 ? "task" : "tasks"} in total
        </h4>
      )}
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <ToDoItem
              todo={todo}
              onChange={onChangeToDo}
              onDelete={onDeleteToDo}
            />
          </li>
        ))}
      </ol>
    </>
  );
}

export default ToDosList;