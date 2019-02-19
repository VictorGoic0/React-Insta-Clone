import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';

const PostContainer = props => {
  return (
    <div>
      {props.data.map((input, index) => (
        <Post key={index} />
      ))}
      {props.data.map((input, index) => (
        <CommentSection key={index} comments={props.data.map(input => input.comments)} />
      ))}
    </div>
  )
}

export default PostContainer;
