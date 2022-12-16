import * as React from 'react';
import '../style.scss';

export default function Login(props) {
  return (
    <React.Fragment>
      <h2>We are going to React test with simple Login</h2>
      <form className="login-form">
        <input type="text" placeholder="enter first name" />
        <input type="text" placeholder="enter last name" />
        <input type="text" placeholder="enter email" />
        <input type="text" placeholder="enter phone" />
        <input className="submit-button" type="submit" value="Post" />
      </form>
    </React.Fragment>
  );
}
