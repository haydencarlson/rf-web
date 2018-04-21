import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/header.css';
import Logo from './components/Logo';
import NavTabs from './components/NavTabs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Search from './components/Search';
import { showModal } from '../ModalContainer/reduxer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [{text: "Home", url: '/'}, {text: "Forums", url: '/forums'}]
    }
  }

  render() {
    return (
      <header>
        <div className="header-container">
          <Logo />
          <div className="nav-menu-items rt-layout-container">
            <Search/>
            <NavTabs {...this.props} items={this.state.navItems}/>
            <div className="nav-menu-auth">
              <SignIn {...this.props} />
              <SignUp {...this.props} />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = {
  showModal
}

export default connect(null, mapDispatchToProps)(Header);
