import React, { Component } from 'react';
import './styles/header.css';
import { connect } from 'react-redux';
import Logo from './components/Logo';
import NavTabs from './components/NavTabs';
import SignIn from './components/SignIn';
import Search from './components/Search';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navItems: [{text: "Home", url: '/'}, {text: "Forums", url: '/forum'}]
    }
  }

  render() {
    return (
      <header>
        <div className="header-container">
          <Logo />
          <div className="nav-menu-items">
            <Search/>
            <NavTabs {...this.props} items={this.state.navItems}/>
            <SignIn/>
          </div>
        </div>
      </header>
    )
  }
}


export default Header;
