import React from "react";
import { Player, Boss, Item, Upgrade } from "./types";
import { useApi } from "./api";

export interface DataState {
  players?: { [playerId: number]: Player };
  bosses?: { [bossId: number]: Boss };
  upgrades?: { [itemId: number]: Upgrade[] };
}

enum ActionType {
  setPlayers,
  setBosses,
  setItems,
  setUpgrades,
}

type Action =
  | { type: ActionType.setPlayers; payload: Player[] }
  | { type: ActionType.setBosses; payload: Boss[] }
  | { type: ActionType.setItems; payload: { items: Item[]; bossId: number } }
  | {
      type: ActionType.setUpgrades;
      payload: { upgrades: Upgrade[]; itemId: number };
    };

const dataReducer = (state: DataState, action: Action): DataState => {
  switch (action.type) {
    case ActionType.setPlayers:
      return {
        ...state,
        players: action.payload.reduce(
          (acc, player) => ({
            ...acc,
            [player.id]: player,
          }),
          {}
        ),
      };
    case ActionType.setUpgrades:
      return {
        ...state,
        upgrades: {
          ...state?.upgrades,
          [action.payload.itemId]: action.payload.upgrades,
        },
      };
    case ActionType.setBosses:
      return {
        ...state,
        bosses: action.payload.reduce(
          (acc, boss) => ({
            ...acc,
            [boss.id]: boss,
          }),
          {}
        ),
      };
    case ActionType.setItems:
      if (state?.bosses?.[action.payload.bossId]) {
        return {
          ...state,
          bosses: {
            ...state.bosses,
            [action.payload.bossId]: {
              ...state.bosses?.[action.payload.bossId],
              items: action.payload.items.reduce(
                (acc, item) => ({
                  ...acc,
                  [item.id]: item,
                }),
                {}
              ),
            },
          },
        };
      }

      return state;
  }
};

const DataContext = React.createContext<{
  state: DataState;
  dispatch: React.Dispatch<Action>;
}>({ state: {}, dispatch: () => {} });

export const DataProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(dataReducer, {});

  return <DataContext.Provider {...props} value={{ state, dispatch }} />;
};

export const usePlayers = () => {
  const { data, loading } = useApi("v2/players");
  const { state, dispatch } = React.useContext(DataContext);

  React.useEffect(() => {
    const isNewData: boolean = !data?.every(
      (player: any) =>
        JSON.stringify(player) === JSON.stringify(state.players?.[player.id])
    );

    if (!loading && isNewData) {
      dispatch({
        type: ActionType.setPlayers,
        payload: data,
      });
    }
  }, [loading, data]);

  return state.players;
};

export const useBosses = (): DataState["bosses"] => {
  const { data, loading } = useApi("v2/bosses");
  const { state, dispatch } = React.useContext(DataContext);

  React.useEffect(() => {
    const isNewData: boolean = !data?.every(
      (boss: any) =>
        JSON.stringify(boss) === JSON.stringify(state.bosses?.[boss.id])
    );

    if (!loading && isNewData) {
      dispatch({
        type: ActionType.setBosses,
        payload: data,
      });
    }
  }, [loading, data]);

  return state.bosses;
};

export const useItems = (bossId: number) => {
  const { data, loading } = useApi(`v2/bosses/${bossId}/items`);
  const { state, dispatch } = React.useContext(DataContext);

  React.useEffect(() => {
    const isNewData: boolean = !data?.every(
      (item: Item) =>
        JSON.stringify(item) ===
        JSON.stringify(state.bosses?.[bossId]?.items?.[item.id])
    );

    if (!loading && isNewData) {
      dispatch({
        type: ActionType.setItems,
        payload: {
          items: data,
          bossId,
        },
      });
    }
  }, [loading, data]);

  return state.bosses?.[bossId]?.items;
};

export const useUpgrades = (itemId: number) => {
  const { data, loading } = useApi(`v2/upgrades/${itemId}`);
  const { state, dispatch } = React.useContext(DataContext);

  React.useEffect(() => {
    const isNewData: boolean =
      JSON.stringify(data) !== JSON.stringify(state.upgrades?.[itemId]);

    if (!loading && isNewData) {
      dispatch({
        type: ActionType.setUpgrades,
        payload: {
          upgrades: data,
          itemId,
        },
      });
    }
  }, [loading, data]);

  return state.upgrades?.[itemId];
};
