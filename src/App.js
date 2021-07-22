import Sidebar from "./components/layouts/sidebar";
import Header from "./components/layouts/header";

import Search from "./pages/Search";

import { loginSpotify, getAccessTokenFromURL } from "./functions/auth";

import "./app.css";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="header">
        <Header loginSpotify={loginSpotify} />
      </div>
      <div className="content">
        <Search getAccessTokenFromURL={getAccessTokenFromURL} />
      </div>
    </div>
  );
}

export default App;
