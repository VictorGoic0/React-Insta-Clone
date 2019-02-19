import React from 'react';
import './CommentSection.css'

const Comment = props => {
  return (
    <div className="comment">
      <h4>{props.info.username}</h4>
      <p>{props.info.text}</p>
    </div>
  )
}
export default Comment;
