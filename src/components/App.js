import React, { Component } from 'react';
import '../styles/App.css';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Post post={[{ title: 'test', descripion: 'joe' }, { title: 'aaa', descripion: 'bb' }]} />
        </header>
      </div>
    );
  }
}

export default App;
