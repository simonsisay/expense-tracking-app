import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ExpenseContext } from '../../Context/ExpenseContext'

class DeleteModal extends Component {
	
	toggleOff = () => {
		this.props.toggleModal();
	}

	render(){
		const {toggleModal, isModalOpen, deleteId} = this.props;
		return(
			 <Modal isOpen={isModalOpen} toggle={toggleModal} centered>

		       <ModalBody>
		         <p>Are you sure you want to delete this expense ?</p>
		       </ModalBody>

		       <ModalFooter>
		        <ExpenseContext.Consumer>
			  	 	{(context) =>(
			  	 	<React.Fragment>
			  		  <Button 
				  		  	onClick={() => {
				  		  		context.deleteExpense(deleteId)
				  		  		toggleModal()
				  		  	}}
				  		  	color="danger"> Delete
			  		  </Button>
			  		</React.Fragment>
			  		 )
			  	 	}
			  	</ExpenseContext.Consumer>
		         <Button color="indigo" onClick={toggleModal}>Cancel</Button>
		       </ModalFooter>

		     </Modal>
		 )
	}
}

export { DeleteModal }