import React from 'react'
import { ButtonComponent } from '../Common'
import { FormGroup, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import './common.css'

const ExpenseForm = () => {
	return(
		<div className="form-container">
			<form>
			  <input type="text" className="form-control" placeholder="Description" />
			  <br/>
			  <input type="number" className="form-control" placeholder="Amount" />
			  <br/>
			  <input type="date"  className="form-control" placeholder="Date" />
			  <br />

			  <FormGroup className="text-area">
         	 <Label for="exampleText">Add note (optional)</Label>
         	 <Input type="textarea" name="note" />
        	  </FormGroup>
			  <br />
			  <Link to="/"><ButtonComponent buttonText={'Add Expense'} /></Link>
			</form>
		</div>
	)
}

export { ExpenseForm }