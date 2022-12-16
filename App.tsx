import * as React from 'react';
import './style.css';

function LoginForm(props) {
  return (
    <React.Fragment>
      <h2>We are going to React test with simple Login</h2>
      <form>
        <input type="text" placeholder="enter first name" />
        <input type="text" placeholder="enter last name" />
        <input type="text" placeholder="enter email" />
        <input type="text" placeholder="enter phone" />
        <input type="submit" value='Post' />
      </form>
    </React.Fragment>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <h1>Hello StackBlitz!</h1>
      <LoginForm className=""></LoginForm>
    </React.Fragment>
  );
}
