import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_USER = gql`
  mutation signin( $email: String!, $password: String!) {
    signin(email :$email, password :$password) {
      id
      name,
      email,
      password,
      posts {
        title
      }
    }
  }
`;

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        mutation={SIGNIN_USER}
        variables={{ name, email, password }}
        // onCompleted={(data) => console.log(data)}
        // onError={(e) => { console.log(e) }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {
          (signin, { loading, error, data }) => {
            if (error) return <p>{error.toString()}</p>
            if (loading) return <h1>Submitting... one sec :D</h1>
            if (data) return <p>login success</p>

            return (
              <form
                method="post"
                onSubmit={e => {
                  e.preventDefault();
                  signin()
                }}>
                <fieldset
                  disabled={loading}
                  className="flex flex-column mt3"
                >
                  <h1>SIGN IN</h1>
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
                  <button type="submit">signin</button>
                </fieldset>
              </form>
            )
          }
        }
      </Mutation>
    );
  }
}

export default Signin;