import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const Post = props => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="thumbnail" src={props.data.thumbnailUrl} alt="profile thumbnail" />
        <h2>{props.data.username}</h2>
      </div>
      <img className="post-img" src={props.data.imageUrl} alt="post" />
      <div className="post-footer">
        <h3>{props.data.likes} likes</h3>
        <CommentSection comments={props.data.comments} />
        <p>{props.data.timestamp}</p>
      </div>
      <form>
        <input
        placeholder="Add a comment...">
        </input>
      </form>
    </div>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  })
}

export default Post
