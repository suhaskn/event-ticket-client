import { CREATE_TICKET } from '../actions'

const initialState = {addTicket: []}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
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