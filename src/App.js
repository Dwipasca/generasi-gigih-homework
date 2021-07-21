// import Search from "./pages/Search";
// import CreatePlaylist from "./pages/CreatePlaylist";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import "./app.css";

function App() {
  return (
    <div className="app">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
