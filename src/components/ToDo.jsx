import { useState, useEffect } from 'react';
import AddTodo from "./AddTodo";
import TodoList from './TodoList';

const API_URL = 'https://backend-h9j4.onrender.com';

function ToDo() {
  const [todos, setTodos] = useState([]);

  // Taken ophalen bij laden en na elke wijziging
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
      id: Date.now(), // Of laat backend een id genereren
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

  // Verwijder een taak via backend
  function deleteTodo(todoId) {
    fetch(`${API_URL}/todos/${todoId}`, { method: 'DELETE' })
      .then(() => fetchTodos());
  }

  // Pas een taak aan via backend
  function editToDo(nextTodo) {
    fetch(`${API_URL}/todos/${nextTodo.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nextTodo),
    })
    .then(() => fetchTodos());
  }

  // Verwijder alle voltooide taken via backend
  function clearCompleted() {
    fetch(`${API_URL}/todos`, { method: 'DELETE' })
      .then(() => fetchTodos());
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
