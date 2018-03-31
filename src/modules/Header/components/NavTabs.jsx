import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navtabs.css';

class NavTabs extends Component {

  renderNavItems(items, location) {
    return items.map((item) => {
      return (
        <li key={item.text} className="nav-item">
          <Link className={location.pathname === item.url ? 'active' : null }to={item.url}>
            {item.text}
          </Link>
        </li>
      )
    })
  }

  render() {
    var { location } = this.props;
    return (
      <div className="nav-items-container">
        <ul>
          {this.renderNavItems(this.props.items, location)}
        </ul>
      </div>
    )
  }
}

export default NavTabs;
