import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import NotFound from "./components/NotFound";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <div id="homepage">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main className="homePage">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/task-details/:taskId" element={<TaskDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
