import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Moment from 'react-moment';

import { API_DOMAIN, GUILD_REALM, GUILD_REGION } from '../config';
import { useLazyApi } from '../hooks';
import Tooltip from './Tooltip';
import { getPlayerIcon } from '../utils';

const PlayerModal = ({ player }) => {
  const { isAuthenticated } = useAuth0();
  const [deleteUser] = useLazyApi(`${API_DOMAIN}/1/character/${player.name}`, { method: 'DELETE' });

  const deleteCharacter = React.useCallback(
    async (event) => {
      event.stopPropagation();
      event.preventDefault();
      await deleteUser();
      window.location.reload();
    },
    [player]
  );

  return (
    <div className="PlayerModalWrapper align-items-center">
      <a
        className="armoryLink"
        href={`https://worldofwarcraft.com/en-us/character/${GUILD_REGION}/${GUILD_REALM}/${player.name}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="LootHeader p-1 unselectable bg-dark rounded d-flex align-items-center">
          <div className="col d-flex align-middle align-items-center">
            <img
              className="PlayerModalImage rounded mr-2 align-items-center "
              alt=""
              src={`https://render-us.worldofwarcraft.com/character/${player.thumbnail}
                    ?alt=/shadow/avatar/2-1.jpg`}
            />
            <h5 className={`PlayerName pt-1 class${player.class}`}>{player.name}</h5>
            <div className="tooltipWrapper">
              <img
                className="roleIco ml-3 align-self-center"
                src="src/wowico.png"
                alt=""
                height="25px"
              />
              <Tooltip>
                <div className="row justify-content-center text-light rbttText2">
                  Last Simc Update
                </div>
                <div className="row justify-content-center text-light rbttText">
                  {player.simcLastModified ? (
                    <Moment className="text-justify-center" fromNow>
                      {player.simcLastModified}
                    </Moment>
                  ) : (
                    'No simc yet'
                  )}
                </div>
              </Tooltip>
            </div>
            {isAuthenticated && (
              <button
                className="btn btn-outline-secondary searchBar ml-auto"
                onClick={deleteCharacter}
                type="button"
              >
                <i className="fas fa-times searchIcon"></i>
              </button>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default PlayerModal;
