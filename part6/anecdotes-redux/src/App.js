import React from 'react';
import AddForm from './components/AddForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {  
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

export default App