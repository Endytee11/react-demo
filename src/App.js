import React, { Fragment } from 'react'
import Header from './component/Header'
import Todo from './component/Todo'
import './App.css'
import Hello from './component/testabc'


const App = () =>{
    return(
      <Fragment>
        <Header />
        <Todo />
        <Hello />
      </Fragment>
    )
}

export default App