import "./app.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";

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
