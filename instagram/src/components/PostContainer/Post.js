import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
  return (
    <div>
      <img src={props.data.thumbnailUrl} />
      <h2>{props.data.username}</h2>
      <img src={props.data.imageUrl} />
    </div>
  )
}

export default Post
