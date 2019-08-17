import React, { useContext, useState } from 'react';
import { AppContext } from '../context';

export default function() {
  const [state, setState] = useState({ name: 'home', val: '' });
  let { root, setData, addStore }: any = useContext(AppContext);

  console.log(useContext(AppContext));

  const action = {
    add: () => {
      root.list.push(`add new ${root.list.length + 1}`);
      setData('root', root);
    },
    addNewStore: () => {
      addStore(state.name, state.val);
    },
    onChange: (name: string, e: any) => {
      let val = e.target ? e.target.value : e;
      setState({ ...state, [name]: val });
    },
  };

  return (
    <div>
      <h1>Home</h1>
      <p>{root.text}</p>
      <ul>
        {root.list &&
          root.list.map((item: string, index: number) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
      <button onClick={action.add}>Add</button>
      <hr />
      <input
        type="text"
        placeholder="请输入storeName"
        value={state.name}
        onChange={action.onChange.bind(null, 'name')}
      />
      <input
        type="text"
        placeholder="请输入Store 的值"
        value={state.val}
        onChange={action.onChange.bind(null, 'val')}
      />
      <button onClick={action.addNewStore}>Add New State</button>
    </div>
  );
}
