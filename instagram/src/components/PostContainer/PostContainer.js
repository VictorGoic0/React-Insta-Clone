import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';

const PostContainer = props => {
  return (
    <div>
      <Post />
      <CommentSection comments={props.data.comments} />
    </div>
  )
}

export default PostContainer;
