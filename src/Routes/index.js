import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Components/homepage/Home'
import AddExpensePage from '../Components/AddExpense/AddExpensePage'
import EditExpensePage from '../Components/EditExpense/EditExpensePage'

const Routes = () => {
	return(
		<Router>
			<Switch>
				<Route path="/" exact component={ Home } />
				<Route path="/add"  component={ AddExpensePage} />
				<Route path="/edit/:id" component={ EditExpensePage } />
			</Switch>
		</Router>
	)
}

export default Routes