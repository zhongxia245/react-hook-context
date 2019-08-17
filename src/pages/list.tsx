import React, { useContext } from 'react';
import { AppContext } from '../context';

export default function() {
  let { root }: any = useContext(AppContext);

  return (
    <div>
      <h1>List</h1>
      <ul>
        {root.list &&
          root.list.map((item: string, index: number) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
}
