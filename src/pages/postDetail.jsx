import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

const PostDetail = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);

  return (
    <div>
      <h1>Post Details</h1>
      <BlogPost postId={postId} />
    </div>
  );
};

export default PostDetail;
