import React, { Component } from 'react'
import Modal from 'react-modal'


const DeleteModal = ({toggleModal, isModalOpen}) => {
	return(
		<Modal
			className="delete-modal"
			isOpen={!!isModalOpen}
			contentLabel={'Delete Modal'}
		>
			<div className="modal-content">
				<p>Are you sure you want delete this expense</p>
				<div className="modal-buttons">
					<button className="yes">Yes</button>
					<button onClick={toggleModal}>No</button>
				</div>
			</div>
		</Modal>
	)
}

export { DeleteModal }