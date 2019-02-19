import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.data.map((input, index) => <Post data={props.data[index]} key={index} />)}
    </div>
  )
}

export default PostContainer;
