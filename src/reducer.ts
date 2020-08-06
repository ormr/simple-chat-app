import { IState } from './actions/constants';

export const initialState: IState = {
  joined: false,
  roomId: null,
  userName: null,
  users: [],
  messages: []
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
        roomId: action.payload.roomId
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      };
    case 'NEW_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};

export { reducer };