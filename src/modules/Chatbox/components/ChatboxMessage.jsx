import React from 'react'

class ChatboxMessage extends React.Component {
  render () {
    return (
      <li className="chat-message-container">
        <div class="chat-message-text">
          <span>{this.props.username}</span>
          {this.props.content}
        </div>
    </li>
    )
  }
}

export default ChatboxMessage;
