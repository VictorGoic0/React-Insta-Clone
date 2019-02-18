import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
        username={this.state.data.username}
        thumbnailUrl={this.state.data.thumbnailUrl}
        imageUrl={this.state.data.imageUrl}
        likes={this.state.data.likes}
        timestamp={this.state.data.timestamp}
        comments={this.state.data.comments}
        />
      </div>
    );
  }
}

export default App;
