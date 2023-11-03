import React from 'react';
import Post from './post';

const Posts = ({ posts }) => (
  <div>
    {posts.filter(post => post.status).map(post => <Post key={post.id} post={post} />)}
  </div>
);

export default Posts;
