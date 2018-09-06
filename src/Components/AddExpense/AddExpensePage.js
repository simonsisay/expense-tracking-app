import React, { Component } from 'react'
import { Header } from '../Common'
import './addExpense.css'
import { ExpenseForm } from '../Common'

class AddExpensePage extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="add-expense-container">
					<h3>Add New Expense</h3>
				</div>
				<ExpenseForm buttonText={'Add Expense'}/>
			</div>
		)
	}
}

export default AddExpensePage