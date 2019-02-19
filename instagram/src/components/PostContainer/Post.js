import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
  return (
    <div>
      <img src={props.data.thumbnailUrl} />
      <h2>{props.data.username}</h2>
      <img src={props.data.imageUrl} />
      <h3>{props.data.likes} likes</h3>
      <CommentSection comments={props.data.comments} />
    </div>
  )
}

export default Post
