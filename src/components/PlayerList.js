import React from 'react';
import axios from 'axios';

import PlayerHeader from './PlayerHeader';
import { API_DOMAIN } from '../config';
import { usePlayers } from '../hooks';

const PlayerList = ({ item }) => {
  const players = usePlayers();
  const [upgrades, setUpgrades] = React.useState(null);

  const fetchData = async () => {
    const upgrades = await Promise.all(
      players.map((player) => axios.get(`${API_DOMAIN}/1/upgrade/${player.name}/${item.id}`))
    ).then((responses) =>
      responses.map((response) => response.data).filter((upgrade) => !!upgrade)
    );
    setUpgrades(upgrades.sort((a, b) => b.dps - b.baseDps - (a.dps - a.baseDps)));
  };

  const maxIncrease = React.useMemo(() => {
    if (!upgrades) {
      return null;
    }

    return upgrades.reduce(
      (acc, upgrade) => Math.max(acc, upgrade.dps - upgrade.baseDps),
      -Infinity
    );
  }, [upgrades]);

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!upgrades) {
    return (
      <div className="col-12 playerScroller rounded">
        <div className="PlayerList rounded-bottom m-auto">
          <div className="PlayerListItem">
            <div className="PlayerWrapper pr-auto">
              <div className="PlayerHeader d-flex justify-content-center align-items-center py-2">
                <img src="src/spinner.svg" alt="" height="40px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-12 playerScroller rounded">
      <div className="PlayerList rounded-bottom m-auto">
        {upgrades.length > 0 ? (
          upgrades.map((upgrade, index) => (
            <PlayerHeader
              player={upgrade}
              maxIncrease={maxIncrease}
              key={upgrade.name}
              item={item}
              rank={index + 1}
            />
          ))
        ) : (
          <div className="PlayerListItem">
            <div className="PlayerWrapper pr-auto">
              <div className="PlayerHeader d-flex justify-content-center align-items-center py-2">
                <h5 className="pl-3 pt-2 mx-2 text-muted">No Upgrades found</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerList;
