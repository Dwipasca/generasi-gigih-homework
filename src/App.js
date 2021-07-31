import React from "react";

// ? components
// import Navbar from "./components/layouts/navbar";
import PrivateRoute from "./components/router/privateRouter";

//  ? pages
import Home from "./pages/Home";
import CreatePlaylist from "./pages/CreatePlaylist";

// ? lib third party
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ! redux store
import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute
              component={CreatePlaylist}
              path="/create-playlist"
              exact
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
