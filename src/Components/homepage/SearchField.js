import React from 'react'
import { Input, Fa } from 'mdbreact'

const SearchField = () => {
	return(
		<div className="search-field">
			<Input label="Search expenses" type="search" icon="search" />
		</div>
	)
}

export default SearchField