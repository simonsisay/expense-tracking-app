import React from 'react'
import { ListGroup, ListGroupItem, Fa } from 'mdbreact'
import { Link } from 'react-router-dom'


const Expense = ({description, date, amount, note}) => {
	return(
	 <ListGroup>
         <ListGroupItem>

              <div class="d-flex w-100 justify-content-between">
                  <h5 class="description mb-1">{description}</h5>

                  <div className="list-icons-top">
                  	<Link to="/"><Fa icon="edit" color="black" className="icon edit"/></Link>
                  	<Link to="/"><Fa icon="trash " className="icon delete"/></Link>
                  </div>
              </div>

              <p>{ note }</p>
              <h5 class="mb-1" className="amount">${ amount }</h5>

              <p className="date-bottom">{ date }</p>

          </ListGroupItem>
    </ListGroup>
	)
}

export default Expense