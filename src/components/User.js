import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query{
    user{
      id,
      name,
      email,
      permissions
    }
  }
`;

const User = (props) => {
  return (
    <Query {...props} query={CURRENT_USER_QUERY}>
      {payload => props.children(payload)}
    </Query>

  );
};

export default User;