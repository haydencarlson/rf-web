import React from 'react'

class ChatboxMessage extends React.Component {
  render () {
    return (
      <li className="chat-message-container">
        <div class="chat-message-text">
          {this.props.content}
        </div>
    </li>
    )
  }
}

export default ChatboxMessage;
