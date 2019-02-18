import React from 'react';
import './CommentSection.css';
import Comment from './Comment'

const CommentSection = props => {
  return (
    <div>
      <Comment comment={props.comments} />
      <form>
        <input>
        </input>
      </form>
    </div>
  )
}

export default CommentSection;
