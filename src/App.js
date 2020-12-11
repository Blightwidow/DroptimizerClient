import React from 'react';
import axios from 'axios';

import { API_DOMAIN, BOSSES } from './config';
import { DataContext } from './hooks';
import BossHeader from './components/BossHeader';
import PageHeader from './components/PageHeader';

const App = () => {
  const [data, setData] = React.useState(null);

  const fetchData = async () => {
    const { data: players } = await axios.get(`${API_DOMAIN}/1/character`);
    const boosItems = BOSSES.map((boss) => boss.loot)
      .reduce((acc, loots) => [...acc, ...loots], [])
      .map((loot) => loot)
      .filter((lootId, index, self) => self.indexOf(lootId) === index);

    const items = await Promise.all(
      boosItems.map((item) => axios.get(`${API_DOMAIN}/1/item/${item.id}`))
    ).then((responses) => responses.map((response) => response.data));

    const itemsWithTerms = items.map((item, index) => ({
      ...item,
      terms: boosItems[index].searchTerms.map(term => term.toLowerCase()),
    }));

    setData({
      players,
      items: itemsWithTerms,
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="PlayerHeader d-flex justify-content-center align-items-center py-2">
        <img src="src/spinner.svg" alt="" height="40px" />
      </div>
    );
  }

  return (
    <DataContext.Provider value={data}>
      <div className="container-fluid align-items-center">
        <PageHeader bosses={BOSSES} />
        <div className="BossWrapper align-items-center">
          {BOSSES.map((boss) => (
            <BossHeader
              boss={boss}
              items={data.items.filter((item) =>
                boss.loot.find((bossItem) => bossItem.id === item.id)
              )}
              key={boss.name}
            />
          ))}
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default App;
