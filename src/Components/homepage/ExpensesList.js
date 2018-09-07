import React, { Component } from 'react'
import { Card } from 'mdbreact'
import Expense from './Expense'
import { FormGroup, Input, Label} from 'reactstrap'
import { ExpenseContext } from '../../Context/ExpenseContext'


class ExpensesList extends Component {

	render(){
		return(
			<div className="expenses-list">
				<div className="sticky-top sort-and-title">
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
					<ExpenseContext.Consumer>
						{(context) => (
							<React.Fragment>
							{context.state.map(expense => (
									<Expense
										toggleModal={this.props.toggleModal}
										key={expense.id}
										amount={expense.amount}
										description={expense.description}
										note={expense.note}
										date={expense.createdAt}
										id={expense.id}
									/>
							))}
							</React.Fragment>
						)}
					</ExpenseContext.Consumer>
				</div>
			</div>
		)
	}
}

export default ExpensesList
