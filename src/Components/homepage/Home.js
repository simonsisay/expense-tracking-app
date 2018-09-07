import React, { Component } from 'react'
import { Header, ButtonComponent, DeleteModal } from '../Common'
import ExpensesTotal from './ExpensesTotal'
import SearchField from './SearchField'
import ExpensesList from './ExpensesList'
import { ExpenseContext } from '../../Context/ExpenseContext'
import { Link } from 'react-router-dom'
import './homepage.css'

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			isModalOpen:undefined,
			deleteId:undefined
		}
	}

	toggleModal = (id) => {
		this.setState({isModalOpen:!this.state.isModalOpen, deleteId:id})

	}


	render(){
		return(
			<div>
				<Header />
				<div className="home-container">

					<ExpenseContext.Consumer>
					{(context) => (
						<ExpensesTotal data = {context.state}/>
					  )
					}
					</ExpenseContext.Consumer>

					<div className="button">
						<Link to="/add"><ButtonComponent buttonText={'Add Expense'}/></Link>
					</div>

					<SearchField />

					<ExpensesList toggleModal={this.toggleModal} />

					<div className="modal-container">

					<DeleteModal
						deleteId={this.state.deleteId}
						toggleModal={this.toggleModal} 
						isModalOpen={this.state.isModalOpen}
					/>
					</div>
				</div>
			</div>
		)
	}
}

export default Home