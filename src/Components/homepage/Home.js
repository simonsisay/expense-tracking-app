import React, { Component } from 'react'
import { Header, ButtonComponent, DeleteModal } from '../Common'
import ExpensesTotal from './ExpensesTotal'
import SearchField from './SearchField'
import ExpensesList from './ExpensesList'
import { Link } from 'react-router-dom'
import './homepage.css'

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			isModalOpen:undefined
		}
	}

	toggleModal = () => {
		this.setState({isModalOpen:!this.state.isModalOpen})
	}


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
					<ExpensesList toggleModal={this.toggleModal} />
					<DeleteModal
						toggleModal={this.toggleModal} 
						isModalOpen={this.state.isModalOpen}
					/>
				</div>
			</div>
		)
	}
}

export default Home