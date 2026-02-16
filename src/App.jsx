import Header from "./components/Header";
import HabitForm from "./components/HabitForm";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-50 to-blue-50 flex flex-col">
      <Header />
      <div className="max-w-2xl mx-auto p-4 mt-6">
        <HabitForm />
      </div>
    </div>
  );
}

export default App;