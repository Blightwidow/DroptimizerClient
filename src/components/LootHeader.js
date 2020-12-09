import React from 'react';
import { usePlayers } from '../hooks';

import PlayerList from './PlayerList';

const LootHeader = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [isPercent, setIsPercent] = React.useState(true);
  const players = usePlayers();

  const toggleIsPercent = React.useCallback(
    (event) => {
      event.stopPropagation();
      setIsPercent(!isPercent);
    },
    [isPercent]
  );

  return (
    <div
      className="LootHeader row bg-dark my-2 mx-1 rounded"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="col unselectable d-flex align-items-start p-1">
        <div className="col-12 p-0 d-flex align-items-center">
          <div className="col flex-grow-1 d-flex p-0">
            <div className="col-auto d-flex p-0 pr-2">
              <a
                className="lootLink d-inline-flex align-items-center pr-2"
                href="#!"
                data-wowhead={`item=${item.id}&ilvl=415`}
                data-wh-rename-link="true"
              >
                <img
                  className="LootImage mr-2 ml-1 my-1 rounded"
                  alt=""
                  src={`https://render-us.worldofwarcraft.com/icons/56/${item.icon}.jpg`}
                />
                <h4 className="LootName itemText">{`[${item.name}]`}</h4>
              </a>
            </div>
            <div className="col-auto d-flex flex-shrink-1 p-0">
              <a
                className="align-self-center"
                data-wh-rename-link="true"
                href={`https://wowhead.com/item=${item.id}&ilvl=415`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="wowHeadIco" src="src/wowhead.png" width="30px" alt="" />
              </a>
            </div>
          </div>
          {expanded && (
            <button
              className="btn filterBtn ml-auto mx-2 btn-secondary justify-self-end p-1 text-muted"
              onClick={toggleIsPercent}
            >
              <i className="fas fa-filter"></i>
            </button>
          )}
        </div>
      </div>
      {expanded && <PlayerList item={item} players={players} isPercent={isPercent} />}
    </div>
  );
};

export default LootHeader;
