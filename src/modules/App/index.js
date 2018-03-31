import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../Home/'
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
        </main>
        <ModalContainer/>
      </div>
    )
  }
}

export default withRouter(App);
