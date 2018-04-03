import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ChatboxContainer from './components/ChatboxContainer';
class Chatbox extends React.Component {

  sendMessage = (e, message) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <ChatboxContainer onSendMessage={this.sendMessage}/>
      </div>
    )
  }
}

export default Chatbox;
