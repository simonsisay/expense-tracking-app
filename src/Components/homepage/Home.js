import React, { Component } from 'react'
import { Header, ButtonComponent } from '../Common'
import ExpensesTotal from './ExpensesTotal'
import SearchField from './SearchField'
import ExpensesList from './ExpensesList'
import './homepage.css'

class Home extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="home-container">
					<ExpensesTotal />
					<div className="button">
						<ButtonComponent buttonText={'Add Expense'}/>
					</div>
					<SearchField />
					<ExpensesList />
				</div>
			</div>
		)
	}
}

export default Home