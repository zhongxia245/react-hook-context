import React from 'react';
import Link from 'umi/link';
import { AppContextProvider } from '../context';

const BasicLayout: React.FC = props => {
  return (
    <AppContextProvider>
      <header>
        <Link to="/" style={{ marginRight: 10 }}>
          home
        </Link>
        <Link to="/demo" style={{ marginRight: 10 }}>
          demo
        </Link>
        <Link to="/list">list</Link>
      </header>
      <div>{props.children}</div>
    </AppContextProvider>
  );
};

export default BasicLayout;
