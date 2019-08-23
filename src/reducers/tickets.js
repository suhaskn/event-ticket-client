import { FETCH_ALL_TICKETS } from '../actions'

const initialState = { allTickets: [], eventId: [] }
const reducer = (state = initialState, action = {}) => {
      
    switch (action.type) {
        case FETCH_ALL_TICKETS:
            return {
                ...state,
                allTickets: action.payload.response,
                eventId: action.payload.eventId  
            }
        default:
            return state
    }
}

export default reducer