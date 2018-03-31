import React, { Component } from 'react';
import './styles/breadcrumb.css';

class Breadcrumb extends Component {
  render() {
    return (
      <div className="breadcrumb-container">
        <span className="breadcrumb-path">
          <i class="fa fa-home"></i> Home
        </span>
        <span className="breadcrumb-activities">
          All Activities
        </span>
      </div>
    )
  }
}


export default Breadcrumb;
