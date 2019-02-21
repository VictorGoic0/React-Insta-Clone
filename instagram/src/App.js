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
    e.preventDefault()

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

export default App;
