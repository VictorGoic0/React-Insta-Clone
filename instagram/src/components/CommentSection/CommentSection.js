import React from 'react';
import './CommentSection.css';
import Comment from './Comment'
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div>
        {this.props.comments.map((input, index) => <Comment key={index} info={input} />)}
        <p>{this.props.timestamp}</p>
        <form>
          <input
          placeholder="Add a comment...">
          </input>
        </form>
      </div>
    )
  }
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
