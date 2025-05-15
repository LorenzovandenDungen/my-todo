import ToDo from './components/ToDo';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 flex justify-center pt-20">
      <div className="w-full max-w-sm bg-neutral-900 rounded-xl shadow-lg p-6">
        <div>
          <ToDo />
        </div>
      </div>
    </div>
  );
}

export default App;
