import React, { Component } from 'react';
import '../styles/search.css';

class Search extends Component {
  render() {
    return (
      <div className="nav-search-box">
        <div className="nav-search-container">
          <input className="search-input" placeholder="Search..."/>
          <button className="search-button">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Search;
