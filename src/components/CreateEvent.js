import React from 'react'
import { createEventFun } from '../actions'
import { connect } from 'react-redux'

class CreateEvent extends React.Component {
  state = { name: '',
            description: '',
            picture: '', 
            startDate: '',
            endDate: ''
           }

	componentDidMount() {
		const {jwt} = this.props
		this.props.createEventFun(this.state,jwt);
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
		// this.setState({
    //   eventId: parseInt(this.props.eventId)
		// })
	}
	
	render() {
		
		return (
			<form onSubmit={this.handleSubmit}>
        <div>
					<label> Name: </label>
					<input name="name" id="name" value={
						this.state.name} onChange={ this.handleChange } />
				</div><br/>
        <div>
					<label> Description: </label>
					<input name="description" id="description" value={
						this.state.description} onChange={ this.handleChange } />
				</div><br/>
				<div>
					<label> Picture: </label>
					<input name="picture" id="picture" value={this.state.picture} onChange={ this.handleChange } />
				</div><br/>
                                 
        <div>
					<label> Start Date: </label>
					<input name="startDate" id="startDate" value={
						this.state.startDate} placeholder="yyyy-mm-dd" onChange={ this.handleChange } />
				</div><br/>

				<div>
					<label> End Date: </label>
					<input name="endDate" id="endDate" value={
						this.state.endDate || ''} placeholder="yyyy-mm-dd" onChange={ this.handleChange } />
				</div>
		    <button type="submit">Save</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
  return {
			jwt: state.userToken.jwt
  }
}

const mapDispatchToProps = {
  createEventFun
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent)