import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Workspace from "./components/Workspace";

function App() {
  return (
    <div id="homepage">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main className="workSpace">
            <Workspace />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
