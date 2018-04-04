import React from 'react'
import '../styles/chat_messages.css';
import ChatboxMessage from './ChatboxMessage';

class ChatboxMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  renderMessages = (messages) => {
    return messages.map((message) => {
      return (
        <ChatboxMessage
          content={message.content} 
          created={message.created_at}
          />
      )
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.messages.length) {
      return {
        loading: false
      }
    }
    return null;
  }

  render () {
    if (this.state.loading) {
      return (
        <span> Loading... </span>
      )
    }
    return (
      <div className="chat-messages-container">
        <ul>
          {this.renderMessages(this.props.messages)}
        </ul>
      </div>
    )
  }
}

export default ChatboxMessages;
