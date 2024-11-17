import React, { useEffect, useState } from 'react';
import BlogListItem from './BlogListItem';
import Loader from './Loader';
import { useDispatch,useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slice/postSlice';

const BlogList = () => {
  const dispatch= useDispatch();
  const {posts,loading} = useSelector((state)=>state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
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
