import React, { Component } from 'react'
import { Button} from 'reactstrap'

const ButtonComponent = ( {buttonText, task } ) => {
	return(
		<Button color="indigo" onClick={task || null}>
	 		{buttonText}
		</Button>
	)
}

export { ButtonComponent }