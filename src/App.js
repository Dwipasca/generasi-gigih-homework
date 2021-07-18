import "./app.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";

import datas from "./constants/ListMusic";

function App() {
  console.log(datas);
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className="body">
        <Sidebar />
        <CreatePlaylist datas={datas} />
      </div>
    </div>
  );
}

export default App;
