import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import BlogListItem from './BlogListItem';
import Loader from './Loader';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      {posts.map((post) => (
        <BlogListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
