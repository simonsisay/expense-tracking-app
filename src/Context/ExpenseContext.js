import React, { Component } from 'react'



const Context = React.createContext();

class ExpenseProvider extends Component {
	render(){
		return(
			<Context.Provider>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export default ExpenseProvider