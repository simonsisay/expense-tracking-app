import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './common.css'

class Header extends Component {
	render(){
		return(
			<div className="header">
				<Link to="/">
					<h2>Budget App</h2>
				</Link>
				<div className="logout">
					<Link to="/">Logout</Link>
				</div>
			</div>
		)
	}
}

export { Header }