import React, { useEffect, useState } from 'react';
import { getPostById } from '../services/api';
import Comments from './Comments';
import Loader from './Loader';

const BlogPost = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getPostById(postId);
      setPost(data);
      setLoading(false);
    }
    fetchData();
  }, [postId]);

  if (loading) return <Loader />;

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <Comments postId={postId} />
    </div>
  );
};

export default BlogPost;
