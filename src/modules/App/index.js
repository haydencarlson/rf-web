import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../Home/'
import Header from '../Header';
import '../../styles/global.css';

class App extends React.Component {

  render() {
    console.log(this.props, 'app props')
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

export default App;
