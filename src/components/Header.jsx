function Header() {
  console.log("Header rendered");

  return (
    <header className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 text-center text-2xl font-bold">
      Habit Tracker
    </header>
  );
}

export default Header;