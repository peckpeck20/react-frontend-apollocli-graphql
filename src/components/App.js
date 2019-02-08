import React, { Component } from 'react';
import '../styles/App.css';
import Post from './Post';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Post post={[{ title: 'test', descripion: 'joe' }, { title: 'aaa', descripion: 'bb' }]} />
          <Signup />
        </div>

      </div>
    );
  }
}

export default App;
