import { NEW_NAME } from "../actions";

export default function signUp(state = {}, action = {}) {
  switch (action.type) {
    case NEW_NAME:
      return action.payload;
    default:
      return state;
  }
}