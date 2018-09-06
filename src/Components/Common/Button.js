import React, { Component } from 'react'
import { Button } from 'reactstrap'

const ButtonComponent = ( {buttonText } ) => {
	return(
		<Button color="indigo">
			{buttonText}
		</Button>
	)
}

export { ButtonComponent }