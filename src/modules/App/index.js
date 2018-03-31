import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../Home/'
import Header from '../Header';
import { withRouter } from 'react-router-dom';
import '../../styles/global.css';
import '../../styles/components.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header {...this.props}/>

        <main>
          <Route exact path="/" component={Home} />
        </main>
      </div>
    )
  }
}

export default withRouter(App);
