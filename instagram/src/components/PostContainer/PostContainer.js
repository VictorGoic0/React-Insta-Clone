import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div>
      <CommentSection comments={props.comments} />
    </div>
  )
}

export default PostContainer;
