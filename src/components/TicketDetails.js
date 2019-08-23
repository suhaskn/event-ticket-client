import React from 'react'
import { connect } from 'react-redux'
const dateFormat = require('dateformat')

class TicketDetails extends React.Component {

  setColor = (ticketRisk) =>{
    if(ticketRisk <= 15 ){
        return 'Green'
    }
    else if(ticketRisk >= 80){
        return 'Red'
    }
    else 
    return 'Yellow'
    }

  render() {

    const { ticketDetails } = this.props;
    const ticketdetail = ticketDetails.allTickets.filter(ticket =>
      ticket.id == this.props.match.params.id
    )

    const ticket = ticketdetail[0]
    let ticketRisk = 0
    const TicketPriceOfAllTickets = ticketDetails.allTickets.map(ticket => ticket.price)
    const averageTicketPrice = TicketPriceOfAllTickets.reduce((accumulator, current) => accumulator + current) / TicketPriceOfAllTickets.length
    let diffInPerc = (((averageTicketPrice - ticket.price) / averageTicketPrice) * 100)

    if (ticket.price < averageTicketPrice) {
      ticketRisk += diffInPerc;
    }
    else {
      if ((diffInPerc * -1) < 10) {
        ticketRisk -= (diffInPerc * -1);
      } else {
        ticketRisk -= 10;
      }
    }
    const createdTime = dateFormat(ticket.createdAt, "H")
    ticketRisk = createdTime >= 9 && createdTime <= 17 ? ticketRisk - 10.0 : ticketRisk + 10.0
    ticketRisk = ticketRisk.toFixed(2)
    if (ticketRisk < 5) {
      ticketRisk = 5
    }
    else if (ticketRisk > 95) {
      ticketRisk = 95
    }

    console.log('color',this.setColor(ticketRisk))
    const main = {
      width: '18%',
      margin: '0 auto',
      background: this.setColor(ticketRisk)
   }

    return (
      <div>
        <h1>Ticket details</h1>
        <img src={ticket.ticketPicture} alt="" />
        <div style={main}>
          <p>Ticket risk: {ticketRisk}%</p>
        </div>
          <p>Ticket description: {ticket.description}</p>
          <p>Ticket price: {ticket.price}</p>
        <br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ticketDetails: state.tickets
  }
}

export default connect(mapStateToProps, null)(TicketDetails)