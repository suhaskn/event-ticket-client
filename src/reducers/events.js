import { FETCH_ALL_EVENTS, CREATE_EVENT } from '../actions'

const initialState = { allEvents: [], addEvent: [] }

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
       case FETCH_ALL_EVENTS:
            const formatDate = (n) => {
                return n < 10 ? '0' + n : n;
            }            
            const currentDate = new Date()
            const year = currentDate.getFullYear()
            const month = currentDate.getMonth()
            const date = currentDate.getDate()
            const exactDate = `${year}-${formatDate(month)}-${formatDate(date)}`
            return {
                ...state,
                allEvents: action.payload.filter(event => event.endDate >= exactDate)
            }
        case CREATE_EVENT:
            return {
                ...state,
                addEvent: action.payload
            }
        default:
        return state
  }
}

export default reducer