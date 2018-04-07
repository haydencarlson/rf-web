import React, { Fragment } from 'react'
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
          id={message.id}
          key={message.id}
          username={message.username}
          content={message.content}
          created={message.created_at}
          />
      )
    });
  }

  componentDidMount = () => {
    this.scrollToBottom();
  }

  componentDidUpdate = () => {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "instant" });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.messages.length) {
      return { loading: false }
    }
    return null;
  }

  render () {
    return (
      <div className="chat-messages-container">
        <ul>
        {this.state.loading ? (
          <span> Loading... </span>
        ) : (
          <Fragment>
              {this.renderMessages(this.props.messages)}
          </Fragment>
        )}
        <div style={{ float:"left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
        </ul>
      </div>
    )
  }
}

export default ChatboxMessages;
