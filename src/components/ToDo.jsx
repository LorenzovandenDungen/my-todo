import { useState, useEffect } from 'react';
import AddTodo from "./AddTodo";
import TodoList from './TodoList';

let nextId = 1;
const initialTodos = [{id: 0, title: "Todo Example", date: "", time: "", location: "", done: true}];

function ToDo() {
    // Taken ophalen uit localStorage bij laden
    const [todos, setTodos] = useState(() => {
      const saved = localStorage.getItem('todos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) {
          nextId = Math.max(...parsed.map(t => t.id)) + 1;
        }
        return parsed;
      }
      return initialTodos;
    });

    // Taken opslaan in localStorage bij elke wijziging
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function addTodo(title, date, time, location) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title,
                date,
                time,
                location,
                done: false
            },
        ]);
    }

    function editToDo(nextTodo) {
        setTodos(
            todos.map((todo) => (todo.id === nextTodo.id ? nextTodo : todo))
        );
    }

    function deleteTodo(todoId) {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    }

    function clearCompleted() {
        setTodos(todos.filter(todo => !todo.done));
    }

    return (
      <div>
        <h1 className="text-xl font-semibold text-white mb-6 text-center">
          Mijn Minimal To-Do
        </h1>
        <AddTodo onAddToDo={addTodo} />
        <TodoList
          todos={todos}
          onChangeToDo={editToDo}
          onDeleteToDo={deleteTodo}
          onClearCompleted={clearCompleted}
        />
      </div>
    );
}

export default ToDo;
