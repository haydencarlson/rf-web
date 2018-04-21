import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../../layouts/Home'
import Forum from '../../layouts/Forum'
import Header from '../Header';
import Breadcrumb from '../../components/breadcrumb';
import ModalContainer from '../ModalContainer';
import { withRouter } from 'react-router-dom';
import '../../styles/global.css';
import '../../styles/components.css';
import './styles/app.css';

class App extends React.Component {
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

export default withRouter(App);
