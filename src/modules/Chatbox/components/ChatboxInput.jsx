import React from 'react'
import '../styles/chatbox_input.css';

class ChatboxInput extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  render () {
    return (
      <div className="chatbox-input-container">
        <form>
          <input
            value={this.state.message}
            placeholder="Your message..."
            className="chatbox-input"
            onChange={(e) => this.setState({message: e.target.value})}
            >
          </input>
          <button onClick={(e) => this.props.onSendMessage(e, this.state.message)}className="chatbox-send-button">
            <i className="fa fa-level-down fa-rotate-90"></i>
          </button>
        </form>
      </div>
    )
  }
}

export default ChatboxInput;
