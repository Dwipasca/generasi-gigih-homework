import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import Main from "./components/layouts/main";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { getAccessTokenFromURL } from "./services/authSpotify";

import { getProfile } from "./services/apiSpotify";

// ! redux area
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "./redux/tokenSlice";

import "./App.css";

function App() {
  // const token = useSelector((state) => state.token.value);
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  const [userID, setUserID] = useState("");

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);

      dispatch(setToken(access_token));

      getProfile(access_token).then((data) => setUserID(data.id));
    }
  }, [dispatch]);

  console.log(userID);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {token !== "" ? <Main /> : <Redirect to="/" />}
          </Route>
          <Route path="/">{token !== "" ? <Main /> : <Home />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
