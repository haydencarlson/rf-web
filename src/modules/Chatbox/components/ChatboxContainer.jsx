import React from 'react';
import '../styles/chatbox_container.css';
import ChatboxInput from './ChatboxInput';
import ChatboxMessages from './ChatboxMessages';
class ChatboxContainer extends React.Component {
  render () {
    return (
      <div className="chatbox_container">
        <div className="chatbox-header">
          <h4> Chatbox </h4>
        </div>
        <ChatboxMessages messages={this.props.messages} />
        <ChatboxInput onSendMessage={this.props.onSendMessage} />
      </div>
    )
  }
}

export default ChatboxContainer;
