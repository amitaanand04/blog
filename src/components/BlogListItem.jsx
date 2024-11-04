import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.body.substring(0, 100)}...</p>
    <Link to={`/post/${post.id}`}>Read More</Link>
  </div>
);

export default BlogListItem;
