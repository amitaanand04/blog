import React from 'react';
import BlogList from '../components/BlogList';
import withAuth from './HighOrder';


const ProtectedHome = withAuth(BlogList);
const isAuthenticated = true;
const Home = () => (
  <div>
    <h1>Blog Posts</h1>
    <ProtectedHome isAuthenticated={isAuthenticated} />
  </div>
);

export default Home;
