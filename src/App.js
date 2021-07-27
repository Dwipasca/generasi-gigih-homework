import Sidebar from "./components/layouts/sidebar";
import Header from "./components/layouts/header";

import CreatePlaylist from "./pages/CreatePlaylist";

import {
  loginAuthorizeSpotify,
  getAccessTokenFromURL,
} from "./services/authSpotify";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="header">
        <Header
          loginAuthorizeSpotify={loginAuthorizeSpotify}
          namePage="Create Playlist"
        />
      </div>
      <div className="content">
        <CreatePlaylist getAccessTokenFromURL={getAccessTokenFromURL} />
      </div>
    </div>
  );
}

export default App;
