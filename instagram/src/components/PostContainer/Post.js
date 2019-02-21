import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      username: props.data.username,
      thumbnailUrl: props.data.thumbnailUrl,
      imageUrl: props.data.imageUrl,
      likes: props.data.likes,
      timestamp: props.data.timestamp,
      comments: props.data.comments
    }
  }

  likeIncrement = () => {
    this.setState({
      likes: this.state.likes+=1
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img className="thumbnail" src={this.state.thumbnailUrl} alt="profile thumbnail" />
          <h2>{this.state.username}</h2>
        </div>
        <img className="post-img" src={this.state.imageUrl} alt="post" />
        <div className="post-footer">
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8v%0D%0ARFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQv%0D%0Ac3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDov%0D%0AL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5%0D%0AL3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjMyNi45MTZweCIgaGVpZ2h0PSIzMjYu%0D%0AOTE2cHgiIHZpZXdCb3g9IjAgMCAzMjYuOTE2IDMyNi45MTYiIHN0eWxlPSJlbmFibGUtYmFja2dy%0D%0Ab3VuZDpuZXcgMCAwIDMyNi45MTYgMzI2LjkxNjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0K%0D%0APGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAzMDM7IiBkPSJNMTYzLjk4MSwzMDYu%0D%0AMDY4TDI1LjY2OCwxODAuMTk4Yy00LjQyLTQuNzEyLTguMzk0LTkuOTM4LTExLjgwMi0xNS41Mw0K%0D%0ACQkJYy0zLjM2Mi01LjUwNi02LjE2MS0xMS4zODQtOC4zMjgtMTcuNDc0QzEuODY3LDEzNi44NTgs%0D%0AMCwxMjYuMjAzLDAsMTE1LjUxYzAtNTIuMiw0Mi40NjItOTQuNjYyLDk0LjY2Mi05NC42NjINCgkJ%0D%0ACWMyNi4yNzcsMCw1MS4wNTksMTAuODYxLDY4Ljc5OSwyOS42NGMxNy43MzEtMTguNzc4LDQyLjUy%0D%0ANC0yOS42NCw2OC43OTktMjkuNjRjNTIuMTk0LDAsOTQuNjU2LDQyLjQ2Miw5NC42NTYsOTQuNjYy%0D%0ADQoJCQljMCwxMC41MS0xLjgwMiwyMS4wMDItNS4zNTMsMzEuMTc3Yy0yLjI2NCw2LjQ3Ni01LjI0%0D%0AMywxMi43MzEtOC44OCwxOC41NzVjLTMuMDQ4LDQuOTE4LTYuNTY0LDkuNTc4LTEwLjQ1OCwxMy44%0D%0ANmwtMC43NDksMC43NDkNCgkJCUwxNjMuOTgxLDMwNi4wNjh6IE00Mi40NDUsMTYzLjg0NGwxMjEu%0D%0ANDczLDExMC41MDFsMTIxLjMzMS0xMTEuMzU4YzIuODAyLTMuMTI1LDUuMzM1LTYuNTA3LDcuNTM2%0D%0ALTEwLjA2NA0KCQkJYzIuNzMzLTQuMzk3LDQuOTc1LTkuMDk3LDYuNjc5LTEzLjk2M2MyLjY3Ni03%0D%0ALjY4OCw0LjAzNy0xNS41ODIsNC4wMzctMjMuNDU1YzAtMzkuMjgzLTMxLjk1OC03MS4yNDEtNzEu%0D%0AMjM1LTcxLjI0MQ0KCQkJYy0yMy43MTMsMC00NS44MDIsMTEuNzUxLTU5LjA5LDMxLjQzOGwtOS43%0D%0AMDksMTQuMzc4bC05LjcwOS0xNC4zNzNDMTQwLjQ2LDU2LjAyLDExOC4zNzQsNDQuMjYzLDk0LjY2%0D%0AMiw0NC4yNjMNCgkJCWMtMzkuMjc3LDAtNzEuMjQxLDMxLjk1OC03MS4yNDEsNzEuMjQxYzAsOC4w%0D%0AMTEsMS40MDcsMTYuMDI0LDQuMTgsMjMuODM1YzEuNjMsNC41NzUsMy43MzcsOC45OTUsNi4yNjEs%0D%0AMTMuMTM0DQoJCQlDMzYuMzU1LDE1Ni41NjUsMzkuMjQzLDE2MC4zODUsNDIuNDQ1LDE2My44NDR6%0D%0AIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8%0D%0AL2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9n%0D%0APg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4N%0D%0ACjxnPg0KPC9nPg0KPC9zdmc+DQo=" alt="heart" className="logo" onClick={this.likeIncrement} />
          <h3>{this.state.likes} likes</h3>
          <CommentSection comments={this.state.comments} timestamp={this.state.timestamp}/>
        </div>

      </div>
    )
  }
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
