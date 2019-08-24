import { FETCH_ALL_TICKETS, CREATE_TICKET } from '../actions'

const initialState = { allTickets: [], eventId: [], addTicket: []}
const reducer = (state = initialState, action = {}) => {
      
    switch (action.type) {
        case FETCH_ALL_TICKETS:
            return {
                ...state,
                allTickets: action.payload.response,
                eventId: action.payload.eventId  
            }
        case CREATE_TICKET:
            return {
                ...state,
                addTicket: action.payload
            }
        default:
            return state
    }
}

export default reducer