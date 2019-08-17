import React, { useState } from 'react';

export const AppContext = React.createContext({});

export interface IAppContext {
  root: any;
  setData: Function;
  [propName: string]: any;
}

export const AppContextProvider = ({ children }: any) => {
  // 修改状态
  const setData = (name: string, data: any) => {
    setState(prevState => {
      return { ...prevState, [name]: data };
    });
  };

  // 添加新的状态
  const addStore = (name: string, initState: any) => {
    setState(prevState => ({ ...prevState, [name]: initState }));
  };

  const initAppState: IAppContext = {
    root: { text: 'hello context', list: ['1+1=?', '1+2=?'] },
    setData,
    addStore,
  };
  const [state, setState] = useState(initAppState);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
