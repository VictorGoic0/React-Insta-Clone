import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="thumbnail" src={props.data.thumbnailUrl} />
        <h2>{props.data.username}</h2>
      </div>
      <img className="post-img" src={props.data.imageUrl} />
      <h3>{props.data.likes} likes</h3>
      <CommentSection comments={props.data.comments} />
      <form>
        <input>
        </input>
      </form>
    </div>
  )
}

export default Post
