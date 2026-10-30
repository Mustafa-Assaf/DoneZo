import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import NotFound from "./components/NotFound";
import TaskDetails from "./components/TaskDetails";
import taskList from "./data/tasklist.json";
import { useState } from "react";

function App() {
  const [taskValue, setTaskValue] = useState(taskList);

  return (
    <div id="homepage">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main className="homePage">
          <Routes>
            <Route path="/" element={<HomePage taskValue={taskValue} setTaskValue={setTaskValue}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/task-details/:taskId" element={<TaskDetails taskValue={taskValue} setTaskValue={setTaskValue}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
