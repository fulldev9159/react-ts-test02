import * as React from 'react';
import './Test.scss';

export default function Car(props) {
  return (
    <React.Fragment>
      <div className="description">
        <h3>This is a example for `props` use</h3>
        <h3>
          color: {props.color} &nbsp; &nbsp; ({props.dataid})
        </h3>
      </div>
    </React.Fragment>
  );
}
