import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
  );
}

export default App;