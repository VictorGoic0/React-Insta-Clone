import React from 'react';

const Comment = props => {
  return (
    <div>
      <h4>{props.info.username}</h4>
      <p>{props.info.text}</p>
    </div>
  )
}
export default Comment;
