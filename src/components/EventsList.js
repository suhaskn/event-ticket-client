import React from 'react'
import { fetchAllEvents } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const dateFormat = require('dateformat')

class EventsList extends React.Component {

    componentDidMount() {
        this.props.fetchAllEvents();
    }

    render() {
        const main = {
            height: '200px',
            margin: '0 auto',
            width: '1000px'
         }
        const first = {
            float: 'left',
            width: '250px'
          }
          const second = {
            float: 'left',
            width: '250px'
          }
          const third = {
            float: 'left',
            width: '250px'
          }
          const fourth = {
            float: 'left',
            width: '250px'
          }
      
        const { events } = this.props;
        const allEvents = events.allEvents
        return (
            <div>  
                <h1>All events</h1>
                <Link className="create-event" to={`/create-event`}>
                <h2 >Create Event</h2>
                </Link>  
                <div style={main}> 
                    <div style={first}>   
                       <h2>Event name</h2>
                    </div>
                    <div style={second}> 
                        <h2>Picture</h2>
                    </div>
                    <div style={third}>   
                       <h2>Start date</h2>
                    </div>
                    <div style={fourth}> 
                        <h2>End date</h2>
                    </div>
                </div>         
                <ul className="event-list">
                    {allEvents.map(event => (
                        <Link className="event" key={event.id} to={`/events/${event.id}`}>
                            <div style={main}> 
                            <li className="event-item">
                               <div style={first}> 
                                    <h2 className="event-title">{event.name}</h2>
                               </div>
                               <div style={second}> 
                                     <img src={event.picture} alt="" />
                                </div>
                                <div style={third}> 
                                <h2 className="event-title">{dateFormat(event.startDate, "yyyy-mm-dd")}</h2>
                                </div>
                                <div style={fourth}> 
                                <h2 className="event-title">{dateFormat(event.endDate, "yyyy-mm-dd")}</h2>
                                </div>
                            </li> 
                            </div>
                        </Link>
                    ))}
                </ul>
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    
    return {
        events: state.events
    }
}

const mapDispatchToProps = {
    fetchAllEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList)