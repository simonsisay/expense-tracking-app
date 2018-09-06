import React, { Component } from 'react'
import { Button } from 'reactstrap'

const ButtonComponent = ( {buttonText} ) => {
	return(
		<Button color="primary">
			{buttonText}
		</Button>
	)
}

export { ButtonComponent }