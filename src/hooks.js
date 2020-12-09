import React from 'react';

export const DataContext = React.createContext({ players: [], items: [] });

export const usePlayers = () => {
  const { players } = React.useContext(DataContext);

  return players;
};

export const useItems = () => {
  const { items } = React.useContext(DataContext);

  return items;
};
