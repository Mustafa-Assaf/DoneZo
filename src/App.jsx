import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./App.css";

function App() {
  return (
    <div id="homepage">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main>
            
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
