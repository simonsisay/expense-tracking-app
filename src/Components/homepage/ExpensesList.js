import React, { Component } from 'react'
import { Card } from 'mdbreact'
import Expense from './Expense'
import { FormGroup, Input, Label} from 'reactstrap'

class ExpensesList extends Component {

	getSelectValue = () => {

	}

	render(){
		return(
			<div className="expenses-list">
				<div className="sort-and-title">
					<h3>Expenses</h3>
					<FormGroup className="select-sort">
			          <Label for="exampleSelect" className="label">Sort by</Label>
			          <Input type="select" name="select" id="exampleSelect">
			            <option>Date</option>
			            <option>Amount</option>
			          </Input>
        		   </FormGroup>
				</div>

				<div className="expense">
					<Expense 
						amount={'500'}
						description={'Rent'}
						date={'12/06/2018'}
						note={'this is the first month rent payment and i am not happy, i will be broke next month'}
						toggleModal={this.props.toggleModal}
					/>
					<Expense 
						amount={'500'}
						description={'Rent'}
						date={'12/06/2018'}
						note={'this is the first month rent payment and i am not happy, i will be broke next month'}
						toggleModal={this.props.toggleModal}
					/>
					<Expense 
						amount={'500'}
						description={'Rent'}
						date={'12/06/2018'}
						note={'this is the first month rent payment and i am not happy, i will be broke next month'}
						toggleModal={this.props.toggleModal}
					/>
					<Expense 
						amount={'500'}
						description={'Rent'}
						date={'12/06/2018'}
						note={'this is the first month rent payment and i am not happy, i will be broke next month'}
						toggleModal={this.props.toggleModal}
					/>
					<Expense 
						amount={'500'}
						description={'Rent'}
						date={'12/06/2018'}
						note={'this is the first month rent payment and i am not happy, i will be broke next month'}
						toggleModal={this.props.toggleModal}
					/>
				</div>

			</div>
		)
	}
}

export default ExpensesList
