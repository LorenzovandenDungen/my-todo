import { useState } from 'react';

function AddTodo({ onAddToDo }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  function handleAdd() {
    if (!title.trim()) return;
    onAddToDo(title, date, time, location);
    setTitle('');
    setDate('');
    setTime('');
    setLocation('');
  }

  return (
    <div className="flex flex-col gap-2 mb-6">
      <input
        type="text"
        placeholder="Nieuwe taak..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="rounded px-3 py-2 bg-neutral-800 text-white border border-neutral-700"
      />
      <div className="flex gap-2">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded px-3 py-2 bg-neutral-800 text-white border border-neutral-700"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="rounded px-3 py-2 bg-neutral-800 text-white border border-neutral-700"
        />
        <input
          type="text"
          placeholder="Locatie"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="rounded px-3 py-2 bg-neutral-800 text-white border border-neutral-700"
        />
      </div>
      <button
        onClick={handleAdd}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Toevoegen
      </button>
    </div>
  );
}

export default AddTodo;
