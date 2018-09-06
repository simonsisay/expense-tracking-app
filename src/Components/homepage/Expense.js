import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Fa } from 'mdbreact'
import { Link } from 'react-router-dom'


class Expense extends Component {


  render(){
   const  {description, date, amount, note} = this.props;
   
  	return(
  	 <ListGroup>
           <ListGroupItem>

                <div className="d-flex w-100 justify-content-between">
                    <h5 className="description mb-1">{description}</h5>

                    <div className="list-icons-top">
                    	<Link to="/edit/1">
                        <Fa icon="edit" className="icon edit primary-text"/>
                      </Link>
                        <Fa icon="trash " 
                          className="icon delete red-text" 
                          onClick={this.props.toggleModal}
                        />
                    </div>
                </div>

                <p>{ note }</p>
                <h5 className="mb-1" className="amount">${ amount }</h5>

                <p className="date-bottom">{ date }</p>

            </ListGroupItem>
      </ListGroup>
  	)
  }
}

export default Expense