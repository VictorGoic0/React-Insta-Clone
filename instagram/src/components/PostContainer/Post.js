import React from 'react';

const Post = props => {
  return (
    <div>
      <p>{props.username}</p>
      <img src={props.imageUrl} />
    </div>
  )
}

export default Post
