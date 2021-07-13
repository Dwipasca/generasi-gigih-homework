import "./app.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import CreatePlaylist from "./pages/CreatePlaylist";

function App() {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className="body">
        <Sidebar />
        <CreatePlaylist />
      </div>
    </div>
  );
}

export default App;
