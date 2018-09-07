import React, { Component } from 'react'
import { ButtonComponent } from '../Common'
import { FormGroup, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import './common.css'
import { ExpenseContext } from '../../Context/ExpenseContext'


class ExpenseForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			description:'' ,
			amount:0 ,
			date:'20-08-2018',
			note:'',
			id:undefined
		}
	}

	componentDidMount(){
		if(this.props.location.pathname !== '/add'){
			const state = this.props.location.state;
			const id = this.props.match.params.id;

			this.setState({
				description:state.description,
				amount:state.amount,
				date:state.date,
				note:state.note,
				id:id
			})
		}

	}

	handleInputChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}




	render(){

		const button = this.props.buttonText === 'Add Expense' ? 
			<ExpenseContext.Consumer>
				{(context) => (
						<ButtonComponent 
							buttonText={'Add Expense'}
							task={() => context.addNewExpense({
								description:this.state.description,
								amount:this.state.amount,
								createdAt:this.state.date,
								note:this.state.note
							})}
						/>
				)}
			</ExpenseContext.Consumer>  :

			<ExpenseContext.Consumer>
				{(context) => (
					<ButtonComponent 
						buttonText={'Edit Expense'}
						task={() => context.editExpense({
							description:this.state.description,
							amount:this.state.amount,
							createdAt:this.state.date,
							note:this.state.note,
							id:this.props.match.params.id
					})}
					/>
				)}
			</ExpenseContext.Consumer>

		return(
			<div className="form-container">
				<form>
				  <input
				  	 type="text"
				  	 name="description" 
				  	 value={this.state.description} 
				  	 className="form-control" 
				  	 placeholder="Description" 
				  	 onChange={this.handleInputChange}
				  	 required
				  	/>
				  <br/>

				  <input 
				  	 type="number" 
				  	 name="amount" 
				  	 value={this.state.amount} 
				  	 className="form-control" 
				  	 placeholder="Amount"
				  	  onChange={this.handleInputChange} 
				  	 required="required"
				  	/>
				  <br/>

				  <input 
				  	 type="date"  
				  	 name="date"
				  	 value={this.state.date}
				  	 className="form-control" 
				  	 placeholder="Date" 
				  	 onChange={this.handleInputChange}
				  	 required="required"

				  	/>
				  <br />

				  <FormGroup className="text-area">
	         	 <Label for="exampleText">Add note (optional)</Label>
	         	 <Input 
	         	 	type="textarea" 
	         	 	name="note" 
	         	 	value={this.state.note}
	         	 	onChange={this.handleInputChange}
	         	 	/>
	        	  </FormGroup>
				  <br />

				  <Link to="/">
				  	{button}
				  </Link>
				</form>
			</div>
		)
	}
}

export { ExpenseForm }