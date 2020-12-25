import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LootList from './LootList';
import PlayerModal from './PlayerModal';
import { API_DOMAIN } from '../config';
import { useLazyApi, usePlayers, useItems } from '../hooks';

const PageHeader = () => {
  const players = usePlayers();
  const items = useItems();
  const [searchInput, setSearchInput] = React.useState('');
  const [reportInput, setReportInput] = React.useState('');
  const [simcInput, setsimcInput] = React.useState('');
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const { permissions = [] } = (user || {})[`https://api.loot.odrel.com/roles`] || {};
  const [submitReportID] = useLazyApi(`${API_DOMAIN}/1/update/report`, {
    method: 'POST',
    body: JSON.stringify({ reportId: reportInput }),
  });
  const [submitSimc] = useLazyApi(`${API_DOMAIN}/1/update/simc`, {
    method: 'POST',
    body: JSON.stringify({ text: simcInput }),
  });

  const submitReport = React.useCallback(() => {
    submitReportID();
    setReportInput('');
  }, [reportInput]);

  const submitSimC = React.useCallback(() => {
    submitSimc();
    setsimcInput('');
  }, [simcInput]);

  const searchedItems = React.useMemo(() => {
    if (!searchInput) {
      return [];
    }

    return items
      .filter(
        (item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.terms.includes(searchInput.toLowerCase())
      )
      .reduce((acc, item) => {
        if (acc.find((el) => el.id === item.id)) {
          return acc;
        }

        return [...acc, item];
      }, []);
  }, [searchInput]);

  return (
    <div>
      <div
        className="modal fade "
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header ">
              <h5 className="modal-title align-self-center d-flex" id="exampleModalLongTitle">
                {`OG Feedback Raid Roster - ${players.length} Players`}
              </h5>
              <button
                type="button"
                className="btn btn-outline-secondary searchBar"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times searchIcon"></i>
              </button>
            </div>
            <div className="modal-body">
              {permissions.includes('write:simc') && (
                <div className="row d-flex">
                  <div className="input-group w-75 px-3 mx-auto my-2">
                    <div className="input-group-prepend px-2">
                      <img className="wowIco" src="src/rb3.png" alt="" />
                    </div>
                    <textarea
                      type="text"
                      className="form-control searchBar text-light"
                      placeholder="Paste simC"
                      aria-label="simC"
                      value={simcInput}
                      onChange={(event) => setsimcInput(event.target.value)}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary searchBar"
                        onClick={submitSimC}
                        type="button"
                      >
                        <i className="fas fa-sync-alt searchIcon"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="row d-flex">
                <h5 className="mx-auto">OR</h5>
              </div>
              {permissions.includes('admin') && (
                <div className="row d-flex">
                  <div className="input-group w-75 px-3 mx-auto my-2">
                    <div className="input-group-prepend px-2">
                      <img className="wowIco" src="src/rb3.png" alt="" />
                    </div>
                    <input
                      type="text"
                      className="form-control searchBar text-light"
                      placeholder="New Report ID"
                      aria-label="Report ID"
                      value={reportInput}
                      onChange={(event) => setReportInput(event.target.value)}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary searchBar"
                        onClick={submitReport}
                        type="button"
                      >
                        <i className="fas fa-sync-alt searchIcon"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <hr />
              <div className="row d-flex flex-wrap">
                {players
                  .sort((a, b) => a.name - b.name)
                  .map((player) => (
                    <div className="col-6 pb-1 px-2" key={player.name}>
                      <PlayerModal player={player} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="PageHeaderWrapper align-items-center">
        <div className="PageHeader unselectable bg-dark rounded d-flex mt-2 mx-2 align-items-center">
          <button
            className="m-2 p-3 btn wowBtn btn-outline-secondary"
            onClick={() => {
              isAuthenticated ? logout() : loginWithRedirect();
            }}
          >
            {isAuthenticated ? <i className="fas fa-times" /> : <i className="fas fa-users" />}
          </button>
          ;
          <div className="container px-0">
            <div className="row w-100 align-self-center d-flex justify-content-between mx-0">
              <div className="col"></div>
              <div className="col-12 col-lg-11 col-xl-9 align-self-center">
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <button
                      className="btn wowBtn btn-outline-secondary searchBar"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      type="button"
                    >
                      <img className="wowIco" src="src/wowico.png" alt="" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    className="form-control searchBar text-light"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary searchBar"
                      onClick={() => setSearchInput('')}
                      type="button"
                    >
                      <i className="fas fa-times searchIcon"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
        <div className="mb-4">{searchedItems.length > 0 && <LootList loot={searchedItems} />}</div>
      </div>
    </div>
  );
};

export default PageHeader;
