import React from 'react';
import { createContext, useState } from 'react';

type LikedUserType = Array<String>;

export const StateContext = createContext({});

const StateContextProvider = (props: any) => {
  const [likedUsers, setLikedUsers] = useState<LikedUserType>([]);

  const addUserAction = (user: string) => {
    setLikedUsers(curr => [...curr, user]);
  };

  const removeUserAction = (user: string) => {
    setLikedUsers(prev => prev.filter(i => i !== user));
  };

  const states = {
    likedUsers
  };

  const actions = {
    addUserAction,
    removeUserAction
  };

  return <StateContext.Provider value={{ states, actions }}>{props.children}</StateContext.Provider>;
};

export const useLocalState = (): any => React.useContext(StateContext);

export default StateContextProvider;
