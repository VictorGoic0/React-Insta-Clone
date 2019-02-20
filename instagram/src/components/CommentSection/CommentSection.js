import React from 'react';
import './CommentSection.css';
import Comment from './Comment'
import PropTypes from 'prop-types';

const CommentSection = props => {
  return props.comments.map((input, index) => <Comment key={index} info={input} />)
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

export default CommentSection;
