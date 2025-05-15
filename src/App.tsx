import ToDo from './components/ToDo';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <div>
          <ToDo />
        </div>
      </div>
    </div>
  );
}

export default App;
