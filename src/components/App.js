import React, { Component } from 'react';
import '../styles/App.css';
import Post from './Post';
import Signup from './Signup';
import User from './User';
import Signin from './Signin';
import Signout from './Signout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <User>
            {/* from payload children prop, desctructure data then destructure 2nd level checkUser object */}
            {({ data: { checkUser } }) => {
              //console.log(checkUser)
              if (checkUser) {
                return <>
                  <h1>signed in as {checkUser.name} </h1>
                  <Signout />
                </>
              }
              else {
                return <Signin />
              }
            }}
          </User>
          <Post />
          <Signup />


        </div>

      </div>
    );
  }
}

export default App;
