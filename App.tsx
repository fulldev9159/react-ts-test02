import * as React from 'react';
import Description from './component/description';
import Login from './component/login';

export default function App() {
  return (
    <React.Fragment>
      <Login></Login>
      <Description></Description>
    </React.Fragment>
  );
}
