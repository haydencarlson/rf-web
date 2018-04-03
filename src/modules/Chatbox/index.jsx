import React from 'react'
import { connect } from 'react-redux'
import ChatboxContainer from './components/ChatboxContainer';
import { sendChatboxMessage } from './reduxer';

class Chatbox extends React.Component {
  sendMessage = (e, message) => {
    e.preventDefault();
    this.props.sendChatboxMessage(message);
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

const mapDispatchToProps = {
  sendChatboxMessage: sendChatboxMessage
}

export default connect(null, mapDispatchToProps)(Chatbox);
