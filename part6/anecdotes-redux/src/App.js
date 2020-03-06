import React, { useEffect } from 'react';
import AddForm from './components/AddForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initAnecdotes } from './reducers/anecdoteReducer'
import { connect } from 'react-redux'

const App = (props) => {  
  
  useEffect(() => {
    props.initAnecdotes()}, [])

  return (
    <div>
      <h2>Anecdote</h2>
      <Notification />
      <Filter />
      <AddForm />
      <AnecdoteList />
    </div>
  )
}

const mapDispatchToProps = {
  initAnecdotes
}

export default connect(
  null, 
  mapDispatchToProps)(App)