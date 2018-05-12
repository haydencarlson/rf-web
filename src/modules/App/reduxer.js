export const FETCH_INITIAL_STATE = "FETCH_INITIAL_STATE";
export const SET_INITIAL_STATE = "SET_INITIAL_STATE";

export const fetchInitialState = () => ({
  type: FETCH_INITIAL_STATE
})


export default (state = {}, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {
        forums: action.payload.forums
      }
    break;
    default:
      return state;
  }
};
