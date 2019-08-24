import { combineReducers } from "redux";
import userToken from "./userToken";
import signUp from "./signUp"
import events from "./events"
import tickets from "./tickets"
//import createTicket from "./createTicket"

export default combineReducers({
  userToken,
  signUp,
  events,
  tickets
});