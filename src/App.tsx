import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import Layout from './molecules/Layout';
import BossMenu from './molecules/BossMenu';
import ItemMenu from './molecules/ItemMenu';
import UpgradeMenu from './molecules/UpgradeMenu';
import { UrlParameters } from './utils/types';

const Content = () => {
  const { bossId, itemId } = useParams<UrlParameters>();

  return (
    <Layout>
      <BossMenu />
      {bossId && <ItemMenu />}
      {itemId && <UpgradeMenu />}
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Content />} />
        <Route exact path={`/boss/:bossId`} children={<Content />} />
        <Route exact path={`/boss/:bossId/item/:itemId`} children={<Content />} />
      </Switch>
    </Router>
  );
};

export default App;
