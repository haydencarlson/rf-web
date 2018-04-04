import React from 'react'

class ChatboxMessage extends React.Component {
  render () {
    return (
      <li className="chat-message">{this.props.content}</li>
    )
  }
}

export default ChatboxMessage;
