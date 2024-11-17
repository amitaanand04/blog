import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts, getPostById, getCommentsByPostId } from '../../services/api';

// Thunks for API calls
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const data = await getPosts();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (id, { rejectWithValue }) => {
  try {
    const data = await getPostById(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchCommentsByPostId = createAsyncThunk(
  'posts/fetchCommentsByPostId',
  async (postId, { rejectWithValue }) => {
    try {
      const data = await getCommentsByPostId(postId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    selectedPost: null,
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {}, // Add synchronous reducers if needed
  extraReducers: (builder) => {
    builder
      // Fetch all posts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch a single post by ID
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPost = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch comments for a post
      .addCase(fetchCommentsByPostId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchCommentsByPostId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
