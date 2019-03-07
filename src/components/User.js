import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query{
    checkUser{
      id,
      name,
      email,
      permissions
      posts {
        id
      }
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
