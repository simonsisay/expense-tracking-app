import React, { Component } from 'react'
import { Header, ButtonComponent } from '../Common'
import ExpensesTotal from './ExpensesTotal'
import SearchField from './SearchField'
import ExpensesList from './ExpensesList'
import { Link } from 'react-router-dom'
import './homepage.css'

class Home extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="home-container">
					<ExpensesTotal />
					<div className="button">
						<Link to="/add"><ButtonComponent buttonText={'Add Expense'}/></Link>
					</div>
					<SearchField />
					<ExpensesList />
				</div>
			</div>
		)
	}
}

export default Home