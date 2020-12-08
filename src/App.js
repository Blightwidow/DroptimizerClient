import React, { Component } from 'react';
import axios from 'axios';

import BossWrapper from './components/BossWrapper';
import PageHeader from './components/PageHeader';
import { API_DOMAIN, BOSSES } from './config';

class App extends Component {
  state = {
    players: [],
    bossCollapsed: false,
    loading: true,
    items: [],
  };

  async componentDidMount() {
    const { data: players } = await axios.get(`${API_DOMAIN}/1/character`);
    const itemIds = BOSSES.map((boss) => boss.loot)
      .reduce((acc, loots) => [...acc, ...loots], [])
      .map((loot) => loot.id)
      .filter((lootId, index, self) => self.indexOf(lootId) === index);

    const items = await Promise.all(
      itemIds.map((id) => axios.get(`${API_DOMAIN}/1/item/${id}`))
    ).then((responses) => responses.map((response) => response.data));

    this.setState({
      players,
      items,
      loading: false,
    });
  }

  setBossCollapse = (boo) => {
    this.setState({ bossCollapsed: boo });
  };

  render() {
    const { items, players, loading } = this.state;

    if (loading) {
      return (
        <div className="PlayerHeader d-flex justify-content-center align-items-center py-2">
          <img src="src/spinner.svg" alt="" height="40px" />
        </div>
      );
    }

    return (
      <div className="container-fluid align-items-center">
        <PageHeader
          loading={loading}
          bosses={BOSSES}
          items={items}
          players={players}
          setBossCollapse={this.setBossCollapse}
        />
        {this.state.bossCollapsed ? null : (
          <BossWrapper
            loading={loading}
            bosses={BOSSES}
            items={items}
            players={players}
          />
        )}
      </div>
    );
  }
}

export default App;
