import React, { Component } from 'react'
import { ButtonComponent } from '../Common'
import { FormGroup, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import './common.css'

class ExpenseForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			description:'' || this.props.description,
			amount:0 || this.props.amount,
			date:'20/08/2018' || this.props.date,
			note:'' || this.props.notes
		}
	}

	render(){
		return(
			<div className="form-container">
				<form>
				  <input
				  	 type="text"
				  	 name="description" 
				  	 value={this.state.description} 
				  	 className="form-control" 
				  	 placeholder="Description" 
				  	 required
				  	/>
				  <br/>

				  <input 
				  	 type="number" 
				  	 name="amount" 
				  	 value={this.state.amount} 
				  	 className="form-control" 
				  	 placeholder="Amount" 
				  	 required="required"
				  	/>
				  <br/>

				  <input 
				  	 type="date"  
				  	 name="date"
				  	 value={this.state.date}
				  	 className="form-control" 
				  	 placeholder="Date" 
				  	 required="required"
				  	/>
				  <br />

				  <FormGroup className="text-area">
	         	 <Label for="exampleText">Add note (optional)</Label>
	         	 <Input 
	         	 	type="textarea" name="note" 
	         	 	value={this.state.note}
	         	 	/>
	        	  </FormGroup>
				  <br />
				  <Link to="/"><ButtonComponent  buttonText={this.props.buttonText}/></Link>
				</form>
			</div>
		)
	}
}

export { ExpenseForm }