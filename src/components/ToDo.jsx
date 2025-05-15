import { useState } from 'react';
import AddTodo from "./AddTodo";
import TodoList from './TodoList';

let nextId = 1;
const initialTodos = [{id: 0, title: "Todo Example", done: true}];

function ToDo() {
    const [todos, setTodos] = useState(initialTodos);

    function addTodo(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            },
        ]);
    }

    function editToDo(nextTodo) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === nextTodo.id) {
                    return nextTodo;
                } else {
                    return todo;
                }
            })
        );
    }

    function deleteTodo(todoId) {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    }

  return (
    <>
      <div>
        <AddTodo onAddToDo={addTodo} />
        <TodoList
          todos={todos}
          onChangeToDo={editToDo}
          onDeleteToDo={deleteTodo}
        />
      </div>
    </>
  );
}

export default ToDo;