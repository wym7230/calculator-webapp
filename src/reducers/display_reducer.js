import { APPEND_VALUE, EQUAL_OPERATION, CLEAR_OPERATION } from '../actions';

const INITIAL_STATE = {
  isTyping: false,
  ans: 0,
  current: '0'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_OPERATION:
      return { ...state, isTyping: false, current: '0' };
    case APPEND_VALUE:
      return { ...state, isTyping: true, current: action.payload };
    case EQUAL_OPERATION:
      return {
        ...state,
        isTyping: false,
        ans: action.payload,
        current: action.payload
      };
    default:
      return state;
  }
};
