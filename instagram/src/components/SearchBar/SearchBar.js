import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <form className="searchbar" onChange={props.performSearch} onSubmit={props.performSearch}>
      <input
      type="text"
      value={props.search}
      onChange={props.handleChanges}
      placeholder="Search...">
      </input>
    </form>
  )
}

export default SearchBar;
