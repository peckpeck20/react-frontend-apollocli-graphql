import React, { Component } from 'react';
import '../styles/App.css';
import Post from './Post';
import Signup from './Signup';
import User from './User';
import Signin from './Signin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <User>
            {/* from payload children prop, desctructure data then destructure 2nd level User object */}
            {({ data: { user } }) => {
              //console.log(user)
              if (user) {
                return <h1>signed in as {user.name} </h1>
              }
              else {
                return null
              }
            }}
          </User>
          <Post />
          <Signup />

          <Signin />
        </div>

      </div>
    );
  }
}

export default App;
