import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)
