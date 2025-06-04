import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../AddToDo.jsx';

test('calls onAddToDo and clears input fields after adding a todo', () => {
  const onAddToDo = jest.fn();
  render(<AddTodo onAddToDo={onAddToDo} />);

  const [titleInput, dateInput, timeInput, locationInput] = screen.getAllByRole('textbox');
  fireEvent.change(titleInput, { target: { value: 'Test task' } });
  fireEvent.change(dateInput, { target: { value: '2025-06-05' } });
  fireEvent.change(timeInput, { target: { value: '12:00' } });
  fireEvent.change(locationInput, { target: { value: 'Home' } });

  fireEvent.click(screen.getByRole('button', { name: /toevoegen/i }));

  expect(onAddToDo).toHaveBeenCalledWith('Test task', '2025-06-05', '12:00', 'Home');
  expect(titleInput).toHaveValue('');
  expect(dateInput).toHaveValue('');
  expect(timeInput).toHaveValue('');
  expect(locationInput).toHaveValue('');
});
