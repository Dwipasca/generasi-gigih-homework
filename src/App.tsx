import React from "react";

// ? lib third party
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

// ! redux store
import store from "redux/store";

// ? routers
import ListRouter from "components/router";

// ? css style
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <ListRouter />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
