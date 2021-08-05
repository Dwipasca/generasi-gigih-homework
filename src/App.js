import React from "react";

// ? components
import PrivateRoute from "./components/router/privateRouter";

//  ? pages
import Home from "./pages/Home";
import CreatePlaylist from "./pages/CreatePlaylist";

// ? lib third party
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// ! redux store
import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <ChakraProvider>
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
        </ChakraProvider>
      </Provider>
    </div>
  );
}

export default App;
