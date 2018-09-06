import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

class Header extends Component {
	render(){
		return(
			<div className="header">
				<h2>Budget App</h2>
				<div className="logout">
					<Link to="/">Logout</Link>
				</div>
			</div>
		)
	}
}

export { Header }