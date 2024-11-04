import React, { useEffect, useState } from 'react';
import { getCommentsByPostId } from '../services/api';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const data = await getCommentsByPostId(postId);
      setComments(data);
    }
    fetchComments();
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
