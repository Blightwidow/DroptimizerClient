import React, { Component } from 'react';
import axios from 'axios';

import BossWrapper from './components/BossWrapper';
import PageHeader from './components/PageHeader';
import { API_DOMAIN, BOSSES } from './config';

class App extends Component {
  state = {
    players: [],
    bossCollapsed: false,
  };
  bosses = BOSSES;
  items = [];
  loading = true;

  updateItemState = () => {
    let promises = [];
    let requests = [];
    for (let i = 0; i < this.bosses.length; i++) {
      for (var j = 0; j < this.bosses[i].loot.length; j++) {
        let url = `${API_DOMAIN}/1/item/${this.bosses[i].loot[j].id}`;
        requests.push(url);
      }
    }
    for (let i = 0; i < requests.length; i++) {
      promises.push(axios.get(requests[i], { crossdomain: true }));
    }
    axios.all(promises).then(
      axios.spread((...args) => {
        this.items = [];
        for (let i = 0; i < args.length; i++) {
          if (args[i].data !== '') {
            for (let m = 0; m < this.bosses.length; m++) {
              let bItems = this.bosses[m].loot;
              let out = {};
              for (let k = 0; k < bItems.length; k++) {
                if (bItems[k].id === args[i].data.id) {
                  let terms = [];
                  terms.push(args[i].data.name);

                  let result = args[i].data;
                  if (typeof bItems[k].searchTerms !== 'undefined') {
                    for (let n = 0; n < bItems[k].searchTerms.length; n++) {
                      terms.push(bItems[k].searchTerms[n]);
                    }
                  }
                  result.searchTerms = terms;
                  out = result;
                }
              }
              if (Object.keys(out).length > 0) {
                this.items.push(out);
              }
            }
          } else {
          }
        }
        this.loading = false;
      })
    );
  };

  componentDidMount() {
    this.updateItemState();
    axios
      .get(`${API_DOMAIN}/1/character`, { crossdomain: true })
      .then((response) => this.setState({ players: response.data }));
  }

  setBossCollapse = (boo) => {
    this.setState({ bossCollapsed: boo });
  };

  render() {
    return (
      <div className="container-fluid align-items-center">
        <PageHeader
          loading={this.loading}
          bosses={this.bosses}
          items={this.items}
          players={this.state.players}
          update={this.updateItemState}
          setBossCollapse={this.setBossCollapse}
        />
        {this.state.bossCollapsed ? null : (
          <BossWrapper
            loading={this.loading}
            bosses={this.bosses}
            items={this.items}
            update={this.updateItemState}
            players={this.state.players}
          />
        )}
      </div>
    );
  }
}

export default App;
