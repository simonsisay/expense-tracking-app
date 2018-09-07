import React, { Component } from 'react'
import { ExpenseContext } from '../../Context/ExpenseContext'


class ExpensesTotal extends Component {
	constructor(props){
		super(props);
		this.state = {
			total:0,
			numberOfExpenses:0
		}
	}

	componentDidMount(){
		let totalExpense = 0;
		let numberOfExpenses = this.props.data.length
		this.props.data.forEach(expense => {
			totalExpense = totalExpense + Number(expense.amount);
		})

		this.setState({total:totalExpense, numberOfExpenses:numberOfExpenses})
	}


	render(){
		return(
			<div className="total-expense">
				<h2>Viewing {this.state.numberOfExpenses} expenses</h2>
				<h4>totalling ${this.state.total}</h4>
			</div>
		)
	}
}

export default ExpensesTotal