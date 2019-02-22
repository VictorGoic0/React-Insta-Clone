import React from 'react';
import './PostContainer.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer'
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: ''
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  handleChanges = e => {
    console.log(this.state)

    this.setState({
      search: e.target.value
    })
  }

  performSearch = e => {
    e.preventDefault();

    const filteredData = this.state.data.filter(input => input.username.includes(this.state.search))

    this.setState({
      data: filteredData
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar performSearch={this.performSearch} handleChanges={this.handleChanges} search={this.state.search} />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default PostsPage;
