export const SEND_NEW_CHATBOX_MESSAGE = "SEND_NEW_CHATBOX_MESSAGE";
export const SEND_MESSAGE_THROUGH_SOCKET = "CHAT_CHANNEL_SEND_MESSAGE_THROUGH_SOCKET";
export const ADD_NEW_CHATBOX_MESSAGE_TO_LIST = "ADD_NEW_CHATBOX_MESSAGE_TO_LIST";
export const HYDRATE_CHATBOX = "HYDRATE_CHATBOX";


export const sendChatboxMessage = (message) => ({
  type: SEND_NEW_CHATBOX_MESSAGE,
  message: message
})

export const sendMessageThroughSocket = (message) => ({
  type: SEND_MESSAGE_THROUGH_SOCKET,
  message: message
})


export default (state = { messages: []}, action) => {
  switch (action.type) {
    case ADD_NEW_CHATBOX_MESSAGE_TO_LIST:
      return {
        ...state,
        messages: [...state.messages, action.payload]

      }
    case HYDRATE_CHATBOX:
    console.log(action.payload.messages)
      return {
        ...state,
        messages: action.payload.messages
      }
    default:
      return state;
  }
};
