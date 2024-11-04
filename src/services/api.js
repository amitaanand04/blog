import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`${API_URL}/posts/${id}`);
  return response.data;
};

export const getCommentsByPostId = async (postId) => {
  const response = await axios.get(`${API_URL}/comments?postId=${postId}`);
  return response.data;
};
