import React from 'react'
import { fetchTicketsByEventId } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class TicketList extends React.Component {

    componentDidMount() {
        this.props.fetchTicketsByEventId(this.props.match.params.id)             
    }

    render() {      
        const main = {
            width: '1000px',
            height: '200px',
            margin: '0 auto',
         }
        const first = {
            float: 'left',
            width: '500px'
          }
          const second = {
            float: 'left',
            width: '500px'
          }
      
        const { tickets } = this.props;
        const allTickets = tickets.allTickets

        return (

            <div>
                <h1>Tickets</h1>
                <Link className="createTicket" to={`/createTicket`}>
                <h2 >Create Ticket</h2>
                </Link>
                <div style={main}> 
                    <div style={first}>   
                       <h2>Ticket Description</h2>
                    </div>
                    <div style={second}> 
                        <h2>Ticket picture</h2>
                    </div>  
                </div>

                <ul className="ticket-list">             
                    {allTickets.map(tickets => (
                        <Link className="tickets" key={tickets.id} to={`/tickets/${tickets.id}`}>
                             <div style={main}> 
                            <li className="tickets-item">
                                <div style={first}>   
                                    <h2 className="tickets-title">{tickets.description}</h2>
                               </div>
                               <div style={second}> 
                                  <img src={tickets.ticketPicture} alt="" />
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
        tickets: state.tickets
    }
}

const mapDispatchToProps = {
    fetchTicketsByEventId
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)