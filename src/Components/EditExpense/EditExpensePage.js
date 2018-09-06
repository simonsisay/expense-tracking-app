import React, { Component } from 'react'
import { ExpenseForm, Header } from '../Common'
import './editExpense.css'

class EditExpensePage extends Component{
	render(){
		return(
			<div>
				<Header />
				<div className="edit-container">
					<h3>Edit expense</h3>
					<ExpenseForm buttonText={'Edit Expense'} />
				</div>
			</div>
		)
	}
}

export default EditExpensePage