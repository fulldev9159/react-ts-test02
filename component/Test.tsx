import * as React from 'react';

export default function Car(props) {
  return (
    <React.Fragment>
      <h1>This is a React Test Code.</h1>
      <h3>color: {props.color} &nbsp; &nbsp; ({props.dataid})</h3>
    </React.Fragment>
  );
}
