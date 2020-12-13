import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BossMenu from "./molecules/BossMenu";
import Layout from "./molecules/Layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Layout>
            <BossMenu />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
