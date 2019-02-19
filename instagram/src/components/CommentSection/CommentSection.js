import React from 'react';
import './CommentSection.css';
import Comment from './Comment'

const CommentSection = props => {
  return props.comments.map((input, index) => <Comment key={index} info={input} />)
}

export default CommentSection;
