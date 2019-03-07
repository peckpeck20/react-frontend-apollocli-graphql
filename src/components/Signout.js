import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';

const SIGNOUT_USER = gql`
  mutation SIGNOUT_USER {
    signout {
      message
    }
  }
`;

const Signout = () => {
  return (
    <Mutation
      mutation={SIGNOUT_USER}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signout, { loading, error, data }) => {
        // TODO set logout sucess message or alert :D
        return <button onClick={signout}>signout</button>
      }}
    </Mutation>
  );
};

export default Signout;