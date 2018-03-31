import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navtabs.css';

class NavTabs extends Component {

  renderNavItems(items) {
    console.log(this.props)
    return items.map((item) => {
      return (
        <li key={item.text} className="nav-item">
          <Link to={item.url}>
            {item.text}
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="nav-items-container">
        <ul>
          {this.renderNavItems(this.props.items)}
        </ul>
      </div>
    )
  }
}

export default NavTabs;
