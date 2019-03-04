import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const SIGNUP_USER = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name :$name , email :$email, password :$password) {
      id
      name
    }
  }
`;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "john",
      email: "xxxxxx@com",
      password: "12312412"
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { name, email, password } = this.state
    return (
      <Mutation
        mutation={SIGNUP_USER}
        variables={{ name, email, password }}
        onCompleted={(data) => console.log(data)}
        onError={(e) => { console.log(e) }}
      >
        {
          (signup, { loading, error, data }) => {
            if (error) return <p>{error.toString()}</p>
            if (loading) return <h1>Submitting... one sec :D</h1>
            if (data) return <p>sucess</p>

            return (
              <form
                method="post"
                onSubmit={e => {
                  e.preventDefault();
                  signup()
                }}>
                <fieldset
                  disabled={loading}
                  className="flex flex-column mt3"
                >
                  <input
                    name="name"
                    className="mb2"
                    value={name}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="enter name"
                  />
                  <input
                    name="email"
                    className="mb2"
                    value={email}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="email"
                  />
                  <input
                    name="password"
                    className="mb2"
                    value={password}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="password"
                  />
                  <button type="submit">signup</button>
                </fieldset>
              </form>
            )
          }
        }
      </Mutation>

    );
  }
}

export default Signup;