import React from 'react'
import { connect } from 'react-redux'
import ChatboxContainer from './components/ChatboxContainer';
import { sendChatboxMessage } from './reduxer';

class Chatbox extends React.Component {
  sendMessage = (e, message) => {
    this.props.sendChatboxMessage(message);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <ChatboxContainer
          messages={this.props.messages}
          onSendMessage={this.sendMessage}/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  sendChatboxMessage: sendChatboxMessage
}

const mapStateToProps = (state) => ({
  messages: state.chatbox.messages
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);
