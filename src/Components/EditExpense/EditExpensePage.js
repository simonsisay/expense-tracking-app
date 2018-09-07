import React, { Component } from 'react'
import { ExpenseForm, Header } from '../Common'
import './editExpense.css'

class EditExpensePage extends Component{
	render(){
		const { location, match } = this.props;
		return(
			<div>
				<Header />
				<div className="edit-container">
					<h3>Edit expense</h3>
					<ExpenseForm 
						buttonText={'Edit Expense'} 
						location={location}
						match={match}
					/>
				</div>
			</div>
		)
	}
}

export default EditExpensePage