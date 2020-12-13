import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { API_DOMAIN } from "../config";

export interface ApiState {
  data?: any;
  error: Error | null;
  loading: boolean;
}

type LazyLoad = (options?: RequestInit) => void;

const fetchApi = async (path: string, options: RequestInit = {}) => {
  try {
    const res = await fetch(`${API_DOMAIN}/${path}`, {
      ...options,
      headers: {
        ...options.headers,
        // Add the Authorization header to the existing headers
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return {
      data: await res.json(),
      error: null,
      loading: false,
    };
  } catch (error) {
    console.error(error);
    return {
      error,
      loading: false,
    };
  }
};

export const useApi = (path: string, options: RequestInit = {}) => {
  const [state, lazyLoad] = useLazyApi(path);

  React.useEffect(() => {
    lazyLoad(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return state;
};

export const useLazyApi = (path: string): [ApiState, LazyLoad] => {
  const [state, setState] = React.useState({
    error: null,
    loading: true,
  });

  const load: LazyLoad = async (options = {}) => {
    const nextState = await fetchApi(path, options);

    setState(nextState);
  };

  return [state, load];
};

export const useLazyProtectedApi = (path: string) => {
  const { getAccessTokenSilently } = useAuth0();
  const [state, lazyLoad] = useLazyApi(path);

  const load: LazyLoad = async (options = {}) => {
    const accessToken = await getAccessTokenSilently({
      audience: "https://api.loot.odrel.com",
      scope: "admin",
    });

    lazyLoad({
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  return [state, load];
};
