
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(data: {name :$name , email :$email }) {
      id
      name
    }
  }
`;


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "elon",
      email: "ee@com",
    }
  }

  render() {
    const { name, email } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="enter name"
          />
          <input
            className="mb2"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="email"
          />
        </div>
        <Mutation mutation={CREATE_USER} variables={{ name, email }}>
          {
            (createUser) => (
              <button onClick={createUser}>signup</button>
            )
          }
        </Mutation>
        {/* <button onClick={() => console.log('e')}>Submit</button> */}
      </div>
    );
  }
}

export default Signup;