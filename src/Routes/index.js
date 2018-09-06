import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Components/homepage/Home'
import AddExpensePage from '../Components/AddExpense/AddExpensePage'


const Routes = () => {
	return(
		<Router>
			<Switch>
				<Route path="/" exact component={ Home } />
				<Route path="/add" exact component={ AddExpensePage} />
			</Switch>
		</Router>
	)
}

export default Routes