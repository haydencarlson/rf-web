import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../Home/'
import Header from '../Header';
import { withRouter } from 'react-router-dom';
import '../../styles/global.css';
import '../../styles/components.css';
import './styles/app.css';
import Breadcrumb from '../../components/breadcrumb';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header {...this.props}/>

        <main className="rf-layout-container">
          <Breadcrumb/>
          <Route exact path="/" component={Home} />
        </main>
      </div>
    )
  }
}

export default withRouter(App);
