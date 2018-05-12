import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from '../../layouts/Home'
import Forum from '../../layouts/Forum'
import Header from '../Header';
import Breadcrumb from '../../components/breadcrumb';
import ModalContainer from '../ModalContainer';
import { withRouter } from 'react-router-dom';
import '../../styles/global.css';
import '../../styles/components.css';
import './styles/app.css';
import { fetchInitialState } from './reduxer';

class App extends React.Component {

  componentWillMount() {
    this.props.fetchInitialState();
  }

  render() {
    return (
      <div>
        <Header {...this.props}/>

        <main className="rt-layout-container">
          <Breadcrumb/>
          <Route exact path="/" component={Home} />
          <Route exact path="/forums" component={Forum} />
        </main>
        <ModalContainer/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchInitialState
}

export default withRouter(connect(null, mapDispatchToProps)(App));
