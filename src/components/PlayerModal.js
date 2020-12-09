import React from 'react';
import { GUILD_REALM, GUILD_REGION } from '../config';

const PlayerModal = ({ player }) => (
  <div className="PlayerModalWrapper align-items-center">
    <a
      className="armoryLink"
      href={`https://worldofwarcraft.com/en-us/character/${GUILD_REGION}/${GUILD_REALM}/${player.name}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="LootHeader p-1 unselectable bg-dark rounded d-flex align-items-center">
        <div className="col-3 align-self-center">
          <div className="row">
            <div className="row">
              <div className="col d-flex align-middle align-items-center">
                <img
                  className="PlayerModalImage rounded mr-2 align-items-center "
                  alt=""
                  src={`https://render-us.worldofwarcraft.com/character/${player.thumbnail}
                    ?alt=/shadow/avatar/2-1.jpg`}
                />
                <h5 className={`PlayerName pt-1 class${player.class}`}>{player.name}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default PlayerModal;
