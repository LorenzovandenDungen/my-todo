import { useState, useEffect } from 'react';
import AddTodo from "./AddTodo";
import TodoList from './TodoList';

const API_URL = 'http://localhost:3001';

function ToDo() {
  const [todos, setTodos] = useState([]);

  // Taken ophalen bij laden en als er iets verandert
  function fetchTodos() {
    fetch(`${API_URL}/todos`)
      .then(res => res.json())
      .then(data => setTodos(data));
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  // Taak toevoegen via backend
  function addTodo(title, date, time, location) {
    const newTodo = {
      id: Date.now(), // Mag ook zonder, backend mag id's maken
      title,
      date,
      time,
      location,
      done: false,
    };
    fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    })
    .then(res => res.json())
    .then(() => fetchTodos());
  }

  // Taak verwijderen via backend (nog niet in backend, dus alleen frontend)
  function deleteTodo(todoId) {
    // TODO: Maak een DELETE endpoint in je backend!
    // fetch(`${API_URL}/todos/${todoId}`, { method: 'DELETE' })
    //   .then(() => fetchTodos());

    // Voor nu: alleen uit de frontend verwijderen
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  // Edit en clear completed kan ook via backend met extra endpoints!
  function editToDo(nextTodo) {
    // TODO: PATCH/PUT endpoint maken voor echte backend sync
    setTodos(
      todos.map((todo) => (todo.id === nextTodo.id ? nextTodo : todo))
    );
  }

  function clearCompleted() {
    // TODO: Endpoint maken die alle completed taken verwijderd
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
