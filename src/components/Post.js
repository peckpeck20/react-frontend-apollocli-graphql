import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      description
      voteCount
      author {
        name
      }
      category {
        title
      }
      comments{
        value
      author{
        name
      }
      replies{
        value
      }
    }
    }
  }
`;

const Post = (props) => {
  return (
    // traditional way of taping props obj and mapping it
    // <div>
    //   {props.post.map((item, index) => {
    //     return (<div key={index}>
    //       <h1>{item.title}</h1>
    //       <p>{item.descripion} </p>
    //     </div>);
    //   })
    //   }
    // </div>

    <Query query={POSTS_QUERY}>
      {({ loading, error, data }) => {
        console.log(data)
        if (loading) return <h1>Loading..</h1>
        if (error) return <h1>error</h1>
        return (

          data.posts.map((item, index) => {
            return (<div key={index}>
              <h1>{item.title}</h1>
              <p>description: {item.description} </p>
              <p>category: {item.category.title} </p>
              <i>discussion {item.comments.map((entry, i) => (
                <ul key={i}> comment {entry.value} <br /> by {entry.author.name} </ul>
              ))} </i>
              <p>likes: {item.voteCount} </p>
              <i>written by: {item.author.name} </i>
            </div>);
          })
        )
      }}
    </Query>
  );
};

export default Post;