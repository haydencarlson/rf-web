import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/search.css';

class Search extends Component {
  render() {
    var { location } = this.props;
    return (
      <div className="nav-search-box">
        <div className="nav-search-container">
          <input className="search-input" placeholder="Search..."/>
        </div>
      </div>
    )
  }
}

export default Search;
