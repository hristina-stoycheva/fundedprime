import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../apollo/queries';

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      {data.posts.nodes.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
