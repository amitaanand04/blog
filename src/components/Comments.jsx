import React, { useEffect } from 'react';
import { fetchCommentsByPostId } from '../redux/slice/postSlice';
import { useDispatch,useSelector } from 'react-redux';

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const {comments} = useSelector((state) =>state.posts)

  useEffect(() => {
   dispatch(fetchCommentsByPostId(postId));
  }, [postId]);

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
