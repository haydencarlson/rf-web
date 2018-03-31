import React, { Component } from 'react';
import './styles/header.css';
import { connect } from 'react-redux';
import Logo from './components/Logo';
import NavTabs from './components/NavTabs';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navItems: [{text: "Home", url: '/'}, {text: "Forums", url: '/forum'}]
    }
  }

  render() {
    console.log(this.props)
    return (
      <header>
        <div className="header-container">
          <Logo />
          <div className="nav-menu-items">
            <NavTabs items={this.state.navItems}/>
          </div>
        </div>
      </header>
    )
  }
}


export default Header;
