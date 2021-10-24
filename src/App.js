import React, { Fragment } from 'react'
import Header from './component/Header'
import Todo from './component/Todo'
import './App.css'


const App = () =>{
    return(
      <Fragment>
        <Header />
        <Todo />
      </Fragment>
    )
}

export default App