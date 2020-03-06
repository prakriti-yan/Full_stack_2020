import React, { useEffect } from 'react';
import AddForm from './components/AddForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'
import { initAnecdotes } from './reducers/anecdoteReducer'
import { connect } from 'react-redux'

const App = (props) => {  
  
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => {
        console.log(anecdotes)
        props.initAnecdotes(anecdotes)
      })
  }, [])

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