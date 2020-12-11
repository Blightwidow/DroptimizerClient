import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const DataContext = React.createContext({ players: [], items: [] });

export const usePlayers = () => {
  const { players } = React.useContext(DataContext);

  return players;
};

export const useItems = () => {
  const { items } = React.useContext(DataContext);

  return items;
};

export const useLazyApi = (url, options = {}) => {
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = React.useState({
    error: null,
    loading: true,
    data: null,
  });

  const load = async () => {
    try {
      const { ...fetchOptions } = options;
      const accessToken = await getAccessTokenSilently({
        audience: 'https://api.loot.odrel.com',
        scope: 'admin',
      });
      const res = await fetch(url, {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          // Add the Authorization header to the existing headers
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });
      setState({
        ...state,
        data: await res.json(),
        error: null,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        error,
        loading: false,
      });
    }
  };

  return [load, state];
};
