# useState , useContext 代替 redux

创建一个根 store 来管理状态和改变状态, 可以用来做小型应用的状态管理，适合全局共享状态。

```jsx
// context/index.tsx
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

```

把状态注入到整个页面的根节点中，让各个子组件可以访问到全局的状态。

```jsx
// layouts/index.tsx
// 在应用的最外层包上 context
import React from 'react';
import Link from 'umi/link';
import { AppContextProvider } from '../context';

const BasicLayout: React.FC = props => {
  return (
    <AppContextProvider>
      <header>
        <Link to="/">home</Link>
        <Link to="/demo">demo</Link>
        <Link to="/list">list</Link>
      </header>
      <div>{props.children}</div>
    </AppContextProvider>
  );
};

export default BasicLayout;
```



来看看，子组件中，如何获取全局的状态，和改变状态吧。

```jsx
// pages/demo.tsx
import React, { useContext } from 'react';
import { AppContext } from '../context';

export default function() {
  let { root }: any = useContext(AppContext);

  return (
    <div>
      <h1>Demo</h1>
      <ul>
        {root.list &&
          root.list.map((item: string, index: number) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
}
```

同样的在 `pages/list.tsx` 也可以这样获取全局的状态。


更详细清看源码。
