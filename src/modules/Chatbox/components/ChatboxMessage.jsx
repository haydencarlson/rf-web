import React from 'react'
import defaultAvatar from '../images/default_avatar.png';
class ChatboxMessage extends React.Component {
  render () {
    return (
      <li className="chat-message-container">
        <img src={defaultAvatar} className="chat-message-avatar"/>
        <div class="chat-message-text">
          <span>{this.props.username}</span>
          <span>{this.props.content}</span>
        </div>
    </li>
    )
  }
}

export default ChatboxMessage;
