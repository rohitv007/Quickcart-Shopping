import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-white min-h-screen grid grid-rows-[auto_1fr_auto]">
      <header className="sticky top-0 shadow-md z-10">
        <Navbar />
      </header>
      <main className="flex flex-col justify-center">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
