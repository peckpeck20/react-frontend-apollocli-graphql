import React, { Component } from 'react';
import '../styles/App.css';
import Post from './Post';
import Signup from './Signup';
import User from './User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Post />
          <Signup />
          <User>
            {/* from payload children prop, desctructure data then destructure 2nd level User object */}
            {({ data: { user } }) => {
              console.log(user)
              return <p>user is logged in</p>
            }}
          </User>
        </div>

      </div>
    );
  }
}

export default App;
