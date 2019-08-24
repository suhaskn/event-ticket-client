import React from 'react'
import { createTicketFun } from '../actions'
import { connect } from 'react-redux'

class CreateTicket extends React.Component {
  state = { ticketPicture: '',
						price: '',
						description: '',
						eventId: ''
           }

	componentDidMount() {
		const {jwt} = this.props
		this.props.createTicketFun(this.state,jwt);
	}

	handleSubmit = (event) => {
				event.preventDefault()
		    this.componentDidMount()
  }
    
  handleChange = (event) => {
		
    const {name, value} = event.target
    this.setState({
      [name]: value
		})
		this.setState({
      eventId: parseInt(this.props.eventId)
		})
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label> Ticket Picture: </label>
					<input name="ticketPicture" id="ticketPicture" value={this.state.ticketPicture || ''
          } onChange={ this.handleChange } />
				</div><br/>
                                 
        <div>
					<label> Description: </label>
					<input name="description" id="description" value={
						this.state.description || ''} onChange={ this.handleChange } />
				</div><br/>

				<div>
					<label> Price: </label>
					<input name="price" id="price" value={
						this.state.price || ''
					} onChange={ this.handleChange } />
				</div>

			    <button type="submit">Save</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
  return {
			eventId: state.tickets.eventId,
			jwt: state.userToken.jwt
  }
}

const mapDispatchToProps = {
  createTicketFun
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicket)