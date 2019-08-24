import * as request from "superagent";
import { url } from "./constants";

export const NEW_NAME = 'NEW_NAME'
export const FETCH_ALL_EVENTS = 'FETCH_ALL_EVENTS'
export const FETCH_ALL_TICKETS = 'FETCH_ALL_TICKETS'
export const CREATE_TICKET = 'CREATE_TICKET'
export const CREATE_EVENT = 'CREATE_EVENT'


export function newName(payload) {
  return {
    type: NEW_NAME,
    payload
  };
}

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export function login(email, password) {
  return function (dispatch) {
    request
      .post(`${url}/login`)
      .send({ email, password })
      .then(response => {
        const action = jwt(response.body);
        dispatch(action);
      })
      .catch(error => {
        console.log("Something is wrong with the log in");
        console.log(error);
      });
  };
}

const displayEvents = (response) => ({
  type: FETCH_ALL_EVENTS,
  payload: response

})

export const fetchAllEvents = () => (dispatch) => {
  request
    .get(`${url}/events`)
    .then(res => dispatch(displayEvents(res.body)))
    .catch(err => console.error(err))
}

const displayTickets = (response, eventId) => ({
  type: FETCH_ALL_TICKETS,
  payload: {response, eventId}

})

export const fetchTicketsByEventId = (eventId) => (dispatch) => {
  request
    .get(`${url}/tickets/${eventId}`)
    .then(res => dispatch(displayTickets(res.body, eventId)))
    .catch(err => console.error(err))
}

export const createTicketFun = (event,jwt) => (dispatch) => {
  request
    .post(`${url}/tickets`)
    .set('authorization', `Bearer ${jwt}`)
    .send(event)
    .then(response => dispatch({
      type: CREATE_TICKET,
      payload: response.body
    }))
    .catch(err => console.error(err))
}

export const createEventFun = (event,jwt) => (dispatch) => {
  request
    .post(`${url}/events`)
    .set('authorization', `Bearer ${jwt}`)
    .send(event)
    .then(response => dispatch({
      type: CREATE_EVENT,
      payload: response.body
    }))
    .catch(err => console.error(err))
}