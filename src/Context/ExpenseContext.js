import React, { Component } from 'react'
import uuid from 'uuid'

const data = [
		{
			amount:500,	
			description:'Rent',	
			createdAt:'2018-09-19',	
			note:'this is the first month rent payment and i am not happy, i will be broke next month',		
			id:uuid()
		},
		{
			amount:700,	
			description:'School',	
			createdAt:'12-06-2018',	
			note:'this is the first month rent payment and i am not happy, i will be broke next month',		
			id:uuid()
		},
		{
			amount:1000,	
			description:'Food',	
			createdAt:'01-06-2018',	
			note:'this is the first month rent payment and i am not happy, i will be broke next month',		
			id:uuid()
		}
]

export const ExpenseContext = React.createContext();

export class ExpenseProvider extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:data,
		}
	}

	addNewExpense = (newExpenseObj = {}) => {
		const {description, note, amount, createdAt } = newExpenseObj

		const newExpense = {
			description, 
			id:uuid(),
			note,
			amount,
			createdAt,
		}
		this.setState({data:[...this.state.data, newExpense]})
	}


	editExpense = ( editedExpenseObject = {}) => {
		const {id, description, note, createdAt, amount } = editedExpenseObject;
		const editedExpense = this.state.data.map(expense => {
			if(expense.id === id){
				return {description, note, id, amount, createdAt}
			}
			return expense;
		})
		console.log(editedExpense)
		this.setState({data:editedExpense})
	}


	deleteExpense = ( id ) => {
		const filteredExpense = this.state.data.filter(expense => {
			return expense.id !== id;
		})
	  this.setState({data:filteredExpense})
	}



	render(){
		return(
			<ExpenseContext.Provider value={{
				state:this.state.data,
				addNewExpense:this.addNewExpense,
				editExpense:this.editExpense,
				deleteExpense:this.deleteExpense
			}}>
				{this.props.children}
			</ExpenseContext.Provider>
		)
	}
}

