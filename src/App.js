import React from 'react'
import ExpenseProvider from './Context/ExpenseContext'
import Routes from './Routes'


export default () => (
  <ExpenseProvider>
    <Routes />
  </ExpenseProvider>

)